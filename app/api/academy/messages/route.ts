import { NextResponse } from "next/server";
import { sendAcademyMessageNotification } from "../../../lib/academy-auth-notifications";
import { createClient } from "../../../lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: authData } = await supabase.auth.getUser();
    if (!authData.user) {
      return NextResponse.json(
        { error: "Sign in to send a message." },
        { status: 401 },
      );
    }

    const payload = await request.json();
    const recipientId = String(payload.recipientId || "");
    const body = String(payload.body || "").trim();
    if (!recipientId || !body || body.length > 2000) {
      return NextResponse.json(
        { error: "Enter a message of up to 2,000 characters." },
        { status: 400 },
      );
    }

    const [senderResult, recipientResult] = await Promise.all([
      supabase
        .from("academy_profiles")
        .select("display_name,email")
        .eq("id", authData.user.id)
        .single(),
      supabase
        .from("academy_profiles")
        .select("display_name,email")
        .eq("id", recipientId)
        .single(),
    ]);
    if (!senderResult.data || !recipientResult.data) {
      return NextResponse.json(
        { error: "That academy contact is unavailable." },
        { status: 404 },
      );
    }

    const { data: message, error } = await supabase
      .from("academy_messages")
      .insert({ sender_id: authData.user.id, recipient_id: recipientId, body })
      .select("id,created_at")
      .single();
    if (error)
      return NextResponse.json(
        { error: "Message was not sent." },
        { status: 400 },
      );

    let emailSent = true;
    try {
      await sendAcademyMessageNotification({
        senderName: senderResult.data.display_name,
        senderEmail: senderResult.data.email,
        recipientName: recipientResult.data.display_name,
        recipientEmail: recipientResult.data.email,
        body,
      });
    } catch (emailError) {
      emailSent = false;
      console.error("Academy message email failed", emailError);
    }

    return NextResponse.json({ ok: true, message, emailSent });
  } catch (error) {
    console.error("Academy message request failed", error);
    return NextResponse.json(
      { error: "Messaging is temporarily unavailable." },
      { status: 500 },
    );
  }
}
