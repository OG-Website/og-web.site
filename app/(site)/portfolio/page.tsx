import { ExternalLink } from "lucide-react";

import ProjectCard, { ProjectBrand } from "../../components/project-card";
import { projects } from "../../components/site-data";

export default function PortfolioPage() {
  const frontPageProjects = projects.filter((project) => project.homeFeatured);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(140,255,65,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_32%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-[-9rem] hidden w-[44rem] lg:block">
          <img
              src="/assets/branding/logo-transparent.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-[-3rem] h-[135%] w-auto max-w-none object-contain opacity-[0.07]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 42%, rgba(0,0,0,1) 100%)",
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 42%, rgba(0,0,0,1) 100%)",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-14 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Portfolio</div>
            <h1 className="display-face outlined-heading mt-5 text-[clamp(2.4rem,5.8vw,5rem)] uppercase leading-[0.9] tracking-[-0.08em]">
              Real brands.
              <br />
              Real identity.
              <br />
              Real variety.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              Different businesses need different energy. This page proves the work by showing the brands first instead of burying them in plain text.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(21,24,24,0.88),rgba(10,12,12,0.95))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
            <div className="display-face text-xs uppercase tracking-[0.34em] text-[#8cff41]">Front page set</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {frontPageProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.5rem] border border-white/8 bg-black/20 p-3 transition hover:border-white/16"
                >
                  <ProjectBrand project={project} compact />
                  <div className="mt-3 flex items-center justify-between gap-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-zinc-300 transition group-hover:text-white">
                    <span className="truncate">{project.name}</span>
                    <ExternalLink size={13} className="shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
