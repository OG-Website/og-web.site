import { NextResponse } from "next/server";
import { sendAcademyAuthNotification } from "../../../lib/academy-auth-notifications";
import { createClient } from "../../../lib/supabase/server";

type AuthMode = "login" | "signup";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const mode: AuthMode = body.mode === "signup" ? "signup" : "login";
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!email || password.length < 8) {
      return NextResponse.json(
        { error: "Enter a valid email address and a password of at least 8 characters." },
        { status: 400 },
      );
    }

    const supabase = await createClient();
    const result =
      mode === "signup"
        ? await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: new URL(
                "/academy/dashboard",
                request.url,
              ).toString(),
            },
          })
        : await supabase.auth.signInWithPassword({ email, password });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 400 });
    }

    const user = result.data.user;
    if (!user?.email) {
      return NextResponse.json(
        { error: "Authentication completed without a verified user account." },
        { status: 500 },
      );
    }

    let notificationSent = true;
    try {
      await sendAcademyAuthNotification({
        event: mode === "signup" ? "registration" : "login",
        email: user.email,
        userId: user.id,
        ipAddress: getClientIp(request),
        userAgent: request.headers.get("user-agent") || "Not supplied",
        occurredAt: new Date(),
      });
    } catch (error) {
      notificationSent = false;
      console.error("Academy auth notification failed", error);
    }

    return NextResponse.json({
      ok: true,
      needsEmailConfirmation: mode === "signup" && !result.data.session,
      notificationSent,
    });
  } catch (error) {
    console.error("Academy authentication failed", error);
    return NextResponse.json(
      { error: "Authentication is temporarily unavailable. Please try again." },
      { status: 500 },
    );
  }
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return (
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "Not supplied"
  );
}
