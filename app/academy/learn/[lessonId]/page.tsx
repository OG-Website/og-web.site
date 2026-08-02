import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import { getLesson } from "../../course-data";
import LessonWorkspace from "./lesson-workspace";

export const dynamic = "force-dynamic";

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = getLesson(lessonId);
  if (!lesson) notFound();
  try { const supabase = await createClient(); const { data } = await supabase.auth.getUser(); if (!data.user) redirect("/academy/login"); } catch { redirect("/academy/login?reason=setup"); }
  return <main className="min-h-screen bg-[#070909] text-white"><header className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#0b0e0d] px-4 py-4 md:px-6"><Link href="/academy/dashboard" className="font-bold text-[#8cff41]">← Dashboard</Link><div className="min-w-0 text-right"><div className="truncate text-sm font-bold">{lesson.title}</div><div className="text-xs text-zinc-500">{lesson.minutes} minutes</div></div></header><LessonWorkspace lesson={lesson} /></main>;
}
