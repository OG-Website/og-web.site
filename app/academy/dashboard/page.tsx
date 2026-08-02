import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle2, Clock3, Play } from "lucide-react";
import { createClient } from "../../lib/supabase/server";
import { allLessons, courseModules } from "../course-data";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  let email = "Learner";
  let completed = new Set<string>();
  let supabase;
  try {
    supabase = await createClient();
  } catch {
    redirect("/academy/login?reason=setup");
  }
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/academy/login");
  email = data.user.email || email;
  const progress = await supabase
    .from("academy_progress")
    .select("lesson_id,status")
    .eq("status", "completed");
  completed = new Set((progress.data || []).map((row) => row.lesson_id));
  const nextLesson =
    allLessons.find((lesson) => !completed.has(lesson.id)) ||
    allLessons[allLessons.length - 1];
  const progressPercent = Math.round(
    (completed.size / allLessons.length) * 100,
  );
  return (
    <main className="min-h-screen bg-[#070909] text-white">
      <header className="border-b border-white/10 bg-[#0b0e0d]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/academy">
            <img
              src="/assets/branding/og-labs-code-central.png"
              alt="OG Labs Code Central"
              className="h-20 w-20 object-contain"
            />
          </Link>
          <div className="text-right text-sm">
            <div className="font-bold">{email}</div>
            <a href="/academy/logout" className="text-[#20d9ff]">
              Sign out
            </a>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
          <section>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#20d9ff]">
              Your learning path
            </div>
            <h1 className="display-face mt-3 text-4xl uppercase">
              Learn one clear step at a time
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-zinc-400">
              Nothing is assumed. Finish each small lesson, ask questions and
              practise before moving on.
            </p>
            <div className="mt-8 grid gap-4">
              {courseModules.map((module) => {
                const moduleDone = module.lessons.filter((lesson) =>
                  completed.has(lesson.id),
                ).length;
                const available =
                  module.lessons.some(
                    (lesson) => lesson.id === nextLesson.id,
                  ) || moduleDone > 0;
                return (
                  <article
                    key={module.number}
                    className="grid gap-5 border border-white/10 bg-[#09131d] p-5 md:grid-cols-[4rem_1fr_auto] md:items-center"
                  >
                    <div className="display-face text-3xl text-[#20d9ff]">
                      {module.number}
                    </div>
                    <div>
                      <h2 className="display-face text-xl uppercase">
                        {module.title}
                      </h2>
                      <p className="mt-2 text-zinc-400">{module.description}</p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                        <Clock3 size={15} /> {moduleDone} of{" "}
                        {module.lessons.length} lessons complete
                      </div>
                    </div>
                    {available ? (
                      <Link
                        href={`/academy/learn/${nextLesson.id}`}
                        aria-label={`Continue ${module.title}`}
                        className="inline-flex h-11 w-11 items-center justify-center bg-[#20d9ff] text-[#031018]"
                      >
                        <Play size={18} />
                      </Link>
                    ) : (
                      <span className="text-sm font-bold text-zinc-600">
                        LOCKED
                      </span>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
          <aside className="h-fit border-t-2 border-[#20d9ff] bg-[#0b1420] p-6">
            <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Course progress
            </div>
            <div className="display-face mt-3 text-5xl">{progressPercent}%</div>
            <div className="mt-4 h-2 bg-black">
              <div
                className="h-full bg-[#20d9ff]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="mt-6 flex items-start gap-3 text-zinc-400">
              <CheckCircle2
                className="mt-1 shrink-0 text-[#20d9ff]"
                size={18}
              />
              <p>
                {completed.size} of {allLessons.length} lessons complete. Notes
                and results are stored against your learner account.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
