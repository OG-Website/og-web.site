"use client";

import { useState } from "react";

import { contactEmail } from "./site-data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);
    setStatusMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          project: formData.get("project"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        if (data.mailto) {
          window.location.href = data.mailto;
          setSent(true);
          setStatusMessage("Email draft opened with your enquiry.");
          form.reset();
          return;
        }

        throw new Error(data.error || `Failed to send. Email ${contactEmail} directly.`);
      }

      setSent(true);
      setStatusMessage("Message sent successfully.");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : `Failed to send. Email ${contactEmail} directly.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Your name"
          className="rounded-[1.4rem] border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#8cff41]"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          className="rounded-[1.4rem] border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#8cff41]"
        />
      </div>

      <input
        name="project"
        type="text"
        placeholder="Business / project"
        className="rounded-[1.4rem] border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#8cff41]"
      />

      <textarea
        name="message"
        rows={7}
        placeholder="Tell me what you need"
        className="rounded-[1.4rem] border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#8cff41]"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={sending}
          className="rounded-full bg-[#8cff41] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:scale-[1.02] disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send Enquiry"}
        </button>

        {sent && <div className="text-sm font-semibold text-[#8cff41]">{statusMessage}</div>}
        {error && <div className="text-sm font-semibold text-red-400">{error}</div>}
      </div>

      <p className="text-sm text-zinc-500">
        If the form is unavailable, email{" "}
        <a href={`mailto:${contactEmail}`} className="font-semibold text-[#8cff41]">
          {contactEmail}
        </a>{" "}
        directly.
      </p>
    </form>
  );
}
