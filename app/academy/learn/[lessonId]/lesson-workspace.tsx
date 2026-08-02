"use client";

import { useState } from "react";
import type { Lesson } from "../../course-data";
import { createClient } from "../../../lib/supabase/client";

export default function LessonWorkspace({ lesson }: { lesson: Lesson }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [saveState, setSaveState] = useState("");
  const [question, setQuestion] = useState("");
  const [tutorAnswer, setTutorAnswer] = useState("");
  const [tutorBusy, setTutorBusy] = useState(false);
  const steps = [
    { title: "First, understand the idea", body: lesson.summary, task: "Read the explanation aloud in your own words. If a word is unfamiliar, write it below before continuing." },
    { title: "See a concrete example", body: lesson.id === "what-is-a-computer" ? "When you click a key, the keyboard provides input. The computer processes that signal, the program decides what it means, and the screen displays output. A saved document is stored data." : `This example connects ${lesson.title.toLowerCase()} to a small, safe cybersecurity task. Nothing here targets another system.`, task: "Write one example from a computer or device you use." },
    { title: "Try it yourself", body: lesson.outcome, task: "Complete the task in the practice box. Explain what happened and why, rather than only writing the final answer." },
    { title: "Check your understanding", body: "Being able to explain the result is more important than memorising a command.", task: "What did you learn, what remains unclear, and what would you test next in a safe practice environment?" },
  ];
  const current = steps[step];
  async function save(completed: boolean) {
    setSaveState("Saving...");
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) throw new Error("Please sign in again.");
      const { error } = await supabase.from("academy_progress").upsert({ user_id: data.user.id, lesson_id: lesson.id, status: completed ? "completed" : "started", notes: answer, updated_at: new Date().toISOString() }, { onConflict: "user_id,lesson_id" });
      if (error) throw error;
      setSaveState(completed ? "Lesson completed and saved." : "Notes saved.");
      if (completed) window.location.href = "/academy/dashboard";
    } catch (error) { setSaveState(error instanceof Error ? error.message : "Could not save progress."); }
  }
  async function askTutor() {
    if (!question.trim()) return;
    setTutorBusy(true); setTutorAnswer("");
    try {
      const response = await fetch("/api/academy/tutor", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lessonId: lesson.id, step, question }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Kora could not answer.");
      setTutorAnswer(result.answer);
    } catch (error) { setTutorAnswer(error instanceof Error ? error.message : "Kora could not answer."); }
    finally { setTutorBusy(false); }
  }
  return <div className="grid min-h-[calc(100vh-73px)] lg:grid-cols-[17rem_1fr_22rem]"><aside className="border-r border-white/10 bg-[#0b0e0d] p-5"><div className="text-xs font-bold uppercase tracking-[0.22em] text-[#8cff41]">Lesson steps</div><div className="mt-5 grid gap-2">{steps.map((item, index) => <button key={item.title} onClick={() => setStep(index)} className={`border-l-2 px-4 py-3 text-left ${index === step ? "border-[#8cff41] bg-white/5 text-white" : "border-white/10 text-zinc-500"}`}><span className="block text-xs">STEP {index + 1}</span><span className="mt-1 block font-bold">{item.title}</span></button>)}</div></aside><section className="p-5 md:p-10"><div className="mx-auto max-w-3xl"><div className="text-sm font-bold uppercase tracking-[0.22em] text-[#8cff41]">Step {step + 1} of {steps.length}</div><h1 className="display-face mt-4 text-3xl uppercase md:text-5xl">{current.title}</h1><p className="mt-6 text-xl leading-9 text-zinc-300">{current.body}</p><div className="mt-8 border-l-2 border-[#8cff41] bg-[#101513] p-5"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[#8cff41]">Your task</div><p className="mt-2 leading-7 text-zinc-300">{current.task}</p></div><label className="mt-6 grid gap-2 text-sm font-bold text-zinc-300">Practice notes<textarea value={answer} onChange={(e) => setAnswer(e.target.value)} onBlur={() => answer && save(false)} className="min-h-40 resize-y border border-white/15 bg-black/30 p-4 font-mono text-sm font-normal text-white outline-none focus:border-[#8cff41]" placeholder="Write what you think here. It is fine not to know yet." /></label>{saveState && <p className="mt-3 text-sm text-[#8cff41]">{saveState}</p>}<div className="mt-6 flex justify-between"><button disabled={step === 0} onClick={() => setStep((value) => value - 1)} className="border border-white/15 px-5 py-3 font-bold disabled:opacity-30">Previous</button><button onClick={() => step === steps.length - 1 ? save(true) : setStep((value) => value + 1)} className="bg-[#8cff41] px-5 py-3 font-black text-black">{step === steps.length - 1 ? "Finish and save" : "Continue"}</button></div></div></section><aside className="border-l border-white/10 bg-[#0b0e0d] p-5"><div className="text-xs font-bold uppercase tracking-[0.22em] text-[#8cff41]">Live guide</div><h2 className="display-face mt-3 text-xl uppercase">Ask Kora</h2><p className="mt-3 leading-7 text-zinc-400">Ask about the current idea in ordinary language. General teaching questions never require a security scope.</p><textarea value={question} onChange={(event) => setQuestion(event.target.value)} className="mt-5 min-h-32 w-full resize-y border border-white/15 bg-black/30 p-3 text-sm outline-none focus:border-[#8cff41]" placeholder={`Ask Kora about ${lesson.title.toLowerCase()}...`} /><button onClick={askTutor} disabled={tutorBusy || !question.trim()} className="mt-3 w-full border border-[#8cff41]/40 px-4 py-3 font-bold text-[#8cff41] disabled:opacity-40">{tutorBusy ? "Kora is thinking..." : "Ask Kora"}</button>{tutorAnswer && <div className="mt-4 whitespace-pre-wrap border-l-2 border-[#8cff41] bg-white/5 p-4 text-sm leading-6 text-zinc-200">{tutorAnswer}</div>}</aside></div>;
}
