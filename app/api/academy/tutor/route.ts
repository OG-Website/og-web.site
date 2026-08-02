import { NextResponse } from "next/server";
import { getLesson } from "../../../academy/course-data";
import { createClient } from "../../../lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
    const body = await request.json();
    const lesson = getLesson(String(body.lessonId || ""));
    const question = String(body.question || "").trim().slice(0, 1200);
    if (!lesson || !question) return NextResponse.json({ error: "Add a lesson question first." }, { status: 400 });

    const endpoint = process.env.KORA_API_URL?.replace(/\/$/, "");
    if (endpoint) {
      const response = await fetch(`${endpoint}/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(process.env.KORA_API_KEY ? { Authorization: `Bearer ${process.env.KORA_API_KEY}` } : {}) },
        body: JSON.stringify({ model: process.env.KORA_MODEL || "mythomax-l2-13b", temperature: 0.35, max_tokens: 700, messages: [{ role: "system", content: `You are Kora, the patient OG Cyber Academy tutor. The learner is a complete beginner studying ${lesson.title}. Explain every abbreviation and technical word in plain UK English. Answer the question directly, then give one small safe example and one check-for-understanding question. General teaching does not require security scope. Never suggest active testing of systems without explicit authorisation.` }, { role: "user", content: question }] }),
        signal: AbortSignal.timeout(25000),
      });
      if (response.ok) {
        const result = await response.json();
        const answer = result.choices?.[0]?.message?.content;
        if (answer) return NextResponse.json({ answer, provider: "kora" });
      }
    }

    return NextResponse.json({ answer: `${lesson.summary}\n\nIn this lesson, your goal is to ${lesson.outcome.charAt(0).toLowerCase()}${lesson.outcome.slice(1)}\n\nYour question was: “${question}”\n\nStart by identifying the exact word or action that is unclear. Describe what you think it means, even if you are unsure. Kora can then correct that understanding before you move on.`, provider: "course-guide" });
  } catch {
    return NextResponse.json({ error: "Kora is temporarily unavailable." }, { status: 500 });
  }
}
