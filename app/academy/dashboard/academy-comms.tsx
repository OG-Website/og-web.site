"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { createClient } from "../../lib/supabase/client";

type Profile = {
  id: string;
  display_name: string;
  role: "owner" | "learner";
  last_seen_at: string | null;
};
type Message = {
  id: number;
  sender_id: string;
  recipient_id: string;
  body: string;
  created_at: string;
  read_at: string | null;
};
type AuthEvent = {
  id: number;
  user_id: string;
  event_type: string;
  created_at: string;
};

export default function AcademyComms({
  userId,
  role,
}: {
  userId: string;
  role: "owner" | "learner";
}) {
  const supabase = useMemo(() => createClient(), []);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [events, setEvents] = useState<AuthEvent[]>([]);
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(role === "learner");
  const [notice, setNotice] = useState("");
  const previousPeerOnline = useRef(false);

  const refresh = useCallback(async () => {
    const [profilesResult, messagesResult, eventsResult] = await Promise.all([
      supabase
        .from("academy_profiles")
        .select("id,display_name,role,last_seen_at")
        .order("created_at"),
      supabase
        .from("academy_messages")
        .select("id,sender_id,recipient_id,body,created_at,read_at")
        .order("created_at"),
      role === "owner"
        ? supabase
            .from("academy_auth_events")
            .select("id,user_id,event_type,created_at")
            .order("created_at", { ascending: false })
            .limit(8)
        : Promise.resolve({ data: [] as AuthEvent[], error: null }),
    ]);
    if (profilesResult.error || messagesResult.error || eventsResult.error) {
      setError("Live updates are temporarily unavailable.");
      return;
    }
    setProfiles(profilesResult.data || []);
    setMessages(messagesResult.data || []);
    setEvents(eventsResult.data || []);
    setError("");
  }, [role, supabase]);

  useEffect(() => {
    const heartbeat = () =>
      supabase
        .from("academy_profiles")
        .update({
          last_seen_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId);
    void heartbeat();
    void refresh();
    const heartbeatTimer = window.setInterval(heartbeat, 30000);
    const channel = supabase
      .channel(`academy-comms-${userId}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "academy_messages" },
        refresh,
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "academy_profiles" },
        refresh,
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "academy_auth_events" },
        refresh,
      )
      .subscribe();
    return () => {
      window.clearInterval(heartbeatTimer);
      void supabase.removeChannel(channel);
    };
  }, [refresh, supabase, userId]);

  const peer =
    role === "owner"
      ? profiles.find((profile) => profile.role === "learner")
      : profiles.find((profile) => profile.role === "owner");
  const peerOnline = Boolean(
    peer?.last_seen_at &&
    Date.now() - new Date(peer.last_seen_at).getTime() < 90000,
  );

  useEffect(() => {
    if (role === "owner" && peerOnline && !previousPeerOnline.current && peer) {
      setNotice(`${peer.display_name} is online now.`);
      const timer = window.setTimeout(() => setNotice(""), 8000);
      previousPeerOnline.current = peerOnline;
      return () => window.clearTimeout(timer);
    }
    previousPeerOnline.current = peerOnline;
  }, [peer, peerOnline, role]);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();
    const message = body.trim();
    if (!message || !peer) return;
    setBody("");
    const response = await fetch("/api/academy/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipientId: peer.id, body: message }),
    });
    if (!response.ok) {
      setBody(message);
      setError("Message was not sent. Please try again.");
    }
  }

  return (
    <>
      {notice && (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setNotice("");
          }}
          className="fixed right-5 top-5 z-[60] border-l-4 border-emerald-400 bg-[#0b1420] px-5 py-4 text-left font-bold text-white shadow-2xl"
        >
          {notice} Open chat
        </button>
      )}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open chat with ${peer?.display_name || "OG"}`}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#20d9ff] px-4 py-3 font-black text-[#031018] shadow-2xl"
      >
        <MessageCircle size={20} /> Chat with {peer?.display_name || "OG"}
      </button>
      {open && (
        <aside className="fixed bottom-5 right-5 z-50 flex max-h-[min(42rem,calc(100vh-2.5rem))] w-[min(24rem,calc(100vw-2rem))] flex-col border border-[#20d9ff]/50 bg-[#0b1420] p-5 shadow-2xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 font-bold">
                <MessageCircle size={18} className="text-[#20d9ff]" /> Chat with{" "}
                {peer?.display_name || "OG"}
              </div>
              <span
                className={`text-xs font-bold ${peerOnline ? "text-emerald-400" : "text-zinc-500"}`}
              >
                {peerOnline ? "ONLINE NOW" : "OFFLINE · YOUR MESSAGE WILL WAIT"}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-9 w-9 place-items-center text-zinc-400 hover:text-white"
            >
              <X size={19} />
            </button>
          </div>
          {role === "learner" && (
            <p className="mt-3 bg-black/25 p-3 text-sm leading-6 text-zinc-300">
              Hi Hunter. This is your private chat with OG. Ask for help with a
              lesson, share an idea or tell me where you are stuck. Press the
              arrow to send it.
            </p>
          )}
          <div className="mt-4 min-h-32 flex-1 space-y-3 overflow-y-auto pr-1">
            {messages.length === 0 && (
              <p className="text-sm text-zinc-500">
                No messages yet. Start the conversation here.
              </p>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[88%] px-3 py-2 text-sm ${message.sender_id === userId ? "ml-auto bg-[#20d9ff] text-[#031018]" : "bg-black/40 text-zinc-200"}`}
              >
                <p className="whitespace-pre-wrap break-words">
                  {message.body}
                </p>
                <div className="mt-1 text-[10px] opacity-60">
                  {new Date(message.created_at).toLocaleString("en-GB")}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="mt-4 flex gap-2">
            <label className="sr-only" htmlFor="academy-message">
              Message
            </label>
            <input
              id="academy-message"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              maxLength={2000}
              placeholder={`Message ${peer?.display_name || "your contact"}`}
              className="min-w-0 flex-1 border border-white/15 bg-black/30 px-3 py-2 text-sm outline-none focus:border-[#20d9ff]"
            />
            <button
              type="submit"
              disabled={!body.trim() || !peer}
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center bg-[#20d9ff] text-[#031018] disabled:opacity-40"
            >
              <Send size={17} />
            </button>
          </form>
          {error && <p className="mt-3 text-xs text-red-300">{error}</p>}
          {role === "owner" && events.length > 0 && (
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="text-xs font-bold uppercase text-zinc-500">
                Recent account activity
              </div>
              <div className="mt-3 space-y-2 text-xs text-zinc-400">
                {events.map((item) => (
                  <div key={item.id}>
                    {profiles.find((profile) => profile.id === item.user_id)
                      ?.display_name || "Learner"}{" "}
                    {item.event_type === "registration"
                      ? "registered"
                      : "logged in"}{" "}
                    · {new Date(item.created_at).toLocaleString("en-GB")}
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      )}
    </>
  );
}
