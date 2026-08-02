import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { courseModules } from "./course-data";

export default function AcademyPage() {
  const lessonCount = courseModules.reduce(
    (total, module) => total + module.lessons.length,
    0,
  );

  return (
    <div className="min-h-screen bg-[#070909] text-white">
      <header className="border-b border-white/10 bg-[#0b0e0d]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link href="/academy" aria-label="OG Labs Code Central home">
            <img
              src="/assets/branding/og-labs-code-central.png"
              alt="OG Labs Code Central"
              className="h-20 w-20 object-contain"
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/academy/login"
              className="rounded border border-white/15 px-4 py-2 text-sm font-bold"
            >
              Learner login
            </Link>
            <Link
              href="/academy/login?mode=signup"
              className="rounded bg-[#8cff41] px-4 py-2 text-sm font-black text-black"
            >
              Start learning
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-white/10 bg-[linear-gradient(135deg,#101614_0%,#090b0a_60%,#101310_100%)]">
          <div className="mx-auto grid min-h-[68vh] max-w-7xl items-center gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="display-face text-sm uppercase tracking-[0.28em] text-[#8cff41]">
                OG Cyber Academy
              </div>
              <h1 className="display-face mt-5 max-w-4xl text-[clamp(2.8rem,6vw,5.8rem)] uppercase leading-[0.92]">
                Cybersecurity coding.
                <br />
                <span className="text-[#8cff41]">From the first step.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                A guided online course for people starting from zero. Learn what
                the words mean, see each action explained, write real code and
                progress into safe, authorised security labs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/academy/login?mode=signup"
                  className="inline-flex items-center gap-2 rounded bg-[#8cff41] px-6 py-3 font-black text-black"
                >
                  Create learner account <ArrowRight size={18} />
                </Link>
                <a
                  href="#curriculum"
                  className="rounded border border-white/15 px-6 py-3 font-bold"
                >
                  View curriculum
                </a>
              </div>
            </div>
            <div className="border-l border-[#8cff41]/30 pl-6 md:pl-10">
              <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ["6", "guided modules"],
                  [String(lessonCount), "step-by-step lessons"],
                  ["0", "knowledge assumed"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="display-face text-4xl text-[#8cff41]">
                      {value}
                    </div>
                    <div className="mt-1 uppercase tracking-[0.18em] text-zinc-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                BookOpen,
                "Proper teaching",
                "Every abbreviation, command and result is explained before you use it.",
              ],
              [
                Code2,
                "Learn by building",
                "Short coding tasks become useful defensive security projects.",
              ],
              [
                ShieldCheck,
                "Safe by design",
                "Live tools are reserved for isolated labs or targets with clear written permission.",
              ],
            ].map(([Icon, title, copy]) => {
              const ItemIcon = Icon as typeof Terminal;
              return (
                <article
                  key={String(title)}
                  className="border-t-2 border-[#8cff41] bg-[#111514] p-6"
                >
                  <ItemIcon className="text-[#8cff41]" />
                  <h2 className="display-face mt-5 text-xl uppercase">
                    {String(title)}
                  </h2>
                  <p className="mt-3 leading-7 text-zinc-400">{String(copy)}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="curriculum"
          className="border-y border-white/10 bg-[#0b0e0d]"
        >
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
            <div className="display-face text-sm uppercase tracking-[0.28em] text-[#8cff41]">
              Complete beginner pathway
            </div>
            <h2 className="display-face mt-4 text-4xl uppercase md:text-5xl">
              Start with the machine. Finish with a project.
            </h2>
            <div className="mt-9 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
              {courseModules.map((module) => (
                <article key={module.number} className="bg-[#0d1110] p-6">
                  <div className="text-sm font-bold tracking-[0.25em] text-[#8cff41]">
                    MODULE {module.number}
                  </div>
                  <h3 className="display-face mt-3 text-2xl uppercase">
                    {module.title}
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    {module.description}
                  </p>
                  <div className="mt-5 text-sm font-bold text-zinc-200">
                    {module.lessons.length} guided lessons
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
