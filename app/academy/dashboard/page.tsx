import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle2, Clock3, Play } from "lucide-react";
import { createClient } from "../../lib/supabase/server";
import { allLessons, courseModules } from "../course-data";
import AcademyBrand from "../academy-brand";
import AcademyComms from "./academy-comms";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  let learnerName = "Learner";
  let email = "";
  let completed = new Set<string>();
  let supabase;
  try {
    supabase = await createClient();
  } catch {
    redirect("/academy/login?reason=setup");
  }
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/academy/login");
  email = data.user.email || "";
  learnerName =
    data.user.user_metadata?.display_name || email.split("@")[0] || learnerName;
  const progress = await supabase
    .from("academy_progress")
    .select("lesson_id,status")
    .eq("status", "completed");
  completed = new Set((progress.data || []).map((row) => row.lesson_id));
  const profile = await supabase
    .from("academy_profiles")
    .select("display_name,role")
    .eq("id", data.user.id)
    .single();
  if (profile.data?.display_name) learnerName = profile.data.display_name;
  const role = profile.data?.role === "owner" ? "owner" : "learner";
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
          <AcademyBrand />
          <div className="text-right text-sm">
            <div className="font-bold">{learnerName}</div>
            <div className="text-xs text-zinc-500">{email}</div>
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
              Welcome, {learnerName}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-zinc-400">
              Nothing is assumed. Finish each small lesson, ask questions and
              practise before moving on.
            </p>
            <div className="mt-6 border-l-4 border-[#20d9ff] bg-[#0b1420] px-5 py-4">
              <div className="font-bold text-white">
                Welcome, {learnerName.split(" ")[0]}!
              </div>
              <p className="mt-2 max-w-3xl leading-7 text-zinc-300">
                This is OG Labs, your place to learn coding and cyber security
                one clear step at a time. I&apos;m OG, and I built this space to
                help you experiment, ask questions and grow your skills. Use the
                chat button whenever you need me. There are no silly questions
                here.
              </p>
            </div>
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
          <div className="space-y-5">
            <aside className="h-fit border-t-2 border-[#20d9ff] bg-[#0b1420] p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                Course progress
              </div>
              <div className="display-face mt-3 text-5xl">
                {progressPercent}%
              </div>
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
                  {completed.size} of {allLessons.length} lessons complete.
                  Notes and results are stored against your learner account.
                </p>
              </div>
            </aside>
            <AcademyComms userId={data.user.id} role={role} />
          </div>
        </div>
      </div>
    </main>
  );
}
