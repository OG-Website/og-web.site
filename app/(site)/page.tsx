import Link from "next/link";
import { ChevronRight } from "lucide-react";

import ProjectCard from "../components/project-card";
import { serviceIcons } from "../components/service-icons";
import { appProducts, processSteps, projects, services } from "../components/site-data";

const featuredProjects = projects.filter((project) => project.homeFeatured);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(72,255,0,0.08),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(72,255,0,0.04),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,13,13,0.2)_24%,rgba(8,9,9,0.94)_78%)]" />
        <div className="site-grid pointer-events-none absolute inset-0 opacity-16" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:px-6 md:py-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10">
            <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Website design / build / hosting</div>

            <h1 className="display-face outlined-heading mt-5 max-w-4xl text-[clamp(2.8rem,6.8vw,6rem)] uppercase leading-[0.86] tracking-[-0.08em]">
              Design that
              <br />
              does not look
              <br />
              borrowed.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
              OG Web.site builds branded websites that hit harder on the first screen, move cleaner through the pages and launch without the usual handoff mess.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#8cff41] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:translate-y-[-1px]"
              >
                Start A Project
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-white/12 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-zinc-100 transition hover:border-[#8cff41]/50 hover:text-[#8cff41]"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Brand-led layout systems",
                "Sharper custom front-end builds",
                "Hosting, forms and launch setup",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/12 bg-[linear-gradient(180deg,rgba(22,25,25,0.92),rgba(10,12,12,0.96))] px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(14,18,18,0.9),rgba(7,8,8,0.98))]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Product apps</div>
              <h2 className="display-face outlined-heading--soft mt-5 max-w-4xl text-[clamp(2.4rem,5vw,4.8rem)] uppercase leading-[0.9] tracking-[-0.06em]">
                Built apps.
                <br />
                Ready on desktop.
              </h2>
            </div>

            <div className="max-w-xl text-sm leading-7 text-zinc-300">
              Every current OG product app is tracked here, with build status and the role it plays in the stack.
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {appProducts.map((app) => (
              <div
                key={app.name}
                className="flex min-h-[15rem] flex-col rounded-[1.4rem] border border-white/12 bg-[linear-gradient(180deg,rgba(23,28,27,0.94),rgba(9,11,11,0.98))] p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-[#8cff41]">{app.status}</div>
                  <div className="h-2.5 w-2.5 rounded-full bg-[#8cff41]" />
                </div>

                <div className="mt-5 flex h-24 items-center justify-center rounded-[1.1rem] border border-white/8 bg-white/[0.04] p-3">
                  <img src={app.logoSrc} alt={app.logoAlt} className="h-full w-full object-contain" />
                </div>

                <div className="display-face mt-5 text-[1.55rem] uppercase leading-[0.94] text-white">{app.name}</div>
                <div className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{app.type}</div>
                <p className="mt-4 flex-1 text-sm leading-7 text-zinc-300">{app.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">What gets handled</div>
            <h2 className="display-face outlined-heading--soft mt-5 max-w-4xl text-[clamp(2.5rem,5vw,4.9rem)] uppercase leading-[0.9] tracking-[-0.06em]">
              One build chain.
              <br />
              No split responsibility.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-zinc-300 transition hover:text-[#8cff41]"
          >
            Full services <ChevronRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.iconId];

            return (
              <div
                key={service.number}
                className="grid gap-5 rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(22,25,25,0.92),rgba(10,12,12,0.96))] p-6 md:grid-cols-[auto_1fr]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8cff41]/20 bg-[#8cff41]/8 text-[#8cff41]">
                  <Icon size={20} />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <div className="display-face text-sm uppercase tracking-[0.32em] text-[#8cff41]">{service.number}</div>
                    <div className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">{service.tag}</div>
                  </div>
                  <div className="display-face outlined-heading--soft mt-4 text-[clamp(1.8rem,3.2vw,2.7rem)] uppercase leading-[0.94] tracking-[-0.05em]">
                    {service.title}
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">{service.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(19,22,22,0.82),rgba(7,8,8,0.98))]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Process</div>
              <h2 className="display-face outlined-heading--soft mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4.8rem)] uppercase leading-[0.9] tracking-[-0.06em]">
                Stronger first screens.
                <br />
                Cleaner page flow.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
                The work stays sharper when the design direction, the code and the launch setup are all solved together instead of being passed around.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {processSteps.map((step) => (
                <div key={step.number} className="border-l border-[#8cff41]/20 pl-5">
                  <div className="display-face text-sm uppercase tracking-[0.32em] text-[#8cff41]">{step.number}</div>
                  <div className="display-face outlined-heading--soft mt-4 text-2xl uppercase leading-[0.94] tracking-[-0.05em]">
                    {step.title}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/8 px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(72,255,0,0.08),transparent_18%),linear-gradient(145deg,rgba(20,23,23,0.94),rgba(9,10,10,0.98))]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Ready when you are</div>
              <div className="display-face outlined-heading--soft mt-5 text-[clamp(2.5rem,5vw,5.1rem)] uppercase leading-[0.9] tracking-[-0.06em]">
                If the current site feels flat,
                <br />
                the fix is a real rebuild.
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#8cff41] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:translate-y-[-1px]"
              >
                Book The Build
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-white/12 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-zinc-100 transition hover:border-[#8cff41]/50 hover:text-[#8cff41]"
              >
                See More Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
