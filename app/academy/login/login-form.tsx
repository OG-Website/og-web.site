"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState(
    searchParams.get("mode") === "signup" ? "signup" : "login",
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/academy/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, email, password }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Authentication failed.");
      if (result.needsEmailConfirmation)
        setMessage(
          "Check your email to confirm your account, then return to learner login.",
        );
      else window.location.href = "/academy/dashboard";
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="mb-6 grid grid-cols-2 border border-white/10 p-1">
        <button
          type="button"
          onClick={() => setMode("login")}
          className={`px-4 py-2 font-bold ${mode === "login" ? "bg-[#20d9ff] text-[#031018]" : "text-zinc-300"}`}
        >
          Log in
        </button>
        <button
          type="button"
          onClick={() => setMode("signup")}
          className={`px-4 py-2 font-bold ${mode === "signup" ? "bg-[#20d9ff] text-[#031018]" : "text-zinc-300"}`}
        >
          Create account
        </button>
      </div>
      <form onSubmit={submit} className="grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-zinc-300">
          Email address
          <input
            className="border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-[#20d9ff]"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-zinc-300">
          Password
          <input
            className="border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-[#20d9ff]"
            type="password"
            minLength={8}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={
              mode === "login" ? "current-password" : "new-password"
            }
          />
        </label>
        {message && (
          <p className="border-l-2 border-[#20d9ff] pl-3 text-sm text-zinc-300">
            {message}
          </p>
        )}
        <button
          disabled={busy}
          className="mt-2 bg-[#20d9ff] px-5 py-3 font-black text-[#031018] disabled:opacity-50"
        >
          {busy
            ? "Please wait..."
            : mode === "login"
              ? "Enter the academy"
              : "Create learner account"}
        </button>
      </form>
    </div>
  );
}
