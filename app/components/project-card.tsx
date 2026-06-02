import { ExternalLink } from "lucide-react";

import type { ProjectItem } from "./site-data";

type ProjectCardProps = {
  project: ProjectItem;
  compact?: boolean;
};

const projectThemes = {
  tradeathem: {
    border: "border-[#ff982d]/22",
    glow: "shadow-[0_0_22px_rgba(255,152,45,0.06)]",
    surface:
      "bg-[radial-gradient(circle_at_16%_14%,rgba(255,152,45,0.1),transparent_24%),linear-gradient(180deg,rgba(34,28,24,0.96),rgba(20,16,14,0.96))]",
    kicker: "text-[#ffbd78]",
  },
  melksham: {
    border: "border-[#ff8a1e]/22",
    glow: "shadow-[0_0_22px_rgba(255,138,30,0.06)]",
    surface:
      "bg-[radial-gradient(circle_at_18%_18%,rgba(255,138,30,0.1),transparent_24%),linear-gradient(180deg,rgba(36,28,22,0.96),rgba(21,16,12,0.96))]",
    kicker: "text-[#ffb767]",
  },
  wobbob: {
    border: "border-[#8dff48]/22",
    glow: "shadow-[0_0_22px_rgba(141,255,72,0.06)]",
    surface:
      "bg-[radial-gradient(circle_at_82%_16%,rgba(141,255,72,0.1),transparent_22%),linear-gradient(180deg,rgba(24,31,27,0.96),rgba(14,19,17,0.96))]",
    kicker: "text-[#bfff89]",
  },
  "business-energy": {
    border: "border-[#4aa2ff]/22",
    glow: "shadow-[0_0_22px_rgba(74,162,255,0.06)]",
    surface:
      "bg-[radial-gradient(circle_at_82%_16%,rgba(74,162,255,0.1),transparent_22%),linear-gradient(180deg,rgba(25,31,38,0.96),rgba(16,21,28,0.96))]",
    kicker: "text-[#89c3ff]",
  },
  naomi: {
    border: "border-[#e8c77b]/22",
    glow: "shadow-[0_0_22px_rgba(232,199,123,0.06)]",
    surface:
      "bg-[radial-gradient(circle_at_18%_18%,rgba(232,199,123,0.1),transparent_24%),linear-gradient(180deg,rgba(32,28,22,0.96),rgba(18,16,13,0.96))]",
    kicker: "text-[#f0d895]",
  },
  "maid-right": {
    border: "border-[#91f3ff]/22",
    glow: "shadow-[0_0_22px_rgba(145,243,255,0.06)]",
    surface:
      "bg-[radial-gradient(circle_at_18%_18%,rgba(145,243,255,0.1),transparent_24%),linear-gradient(180deg,rgba(22,31,32,0.96),rgba(14,20,21,0.96))]",
    kicker: "text-[#aef7ff]",
  },
  shhwingers: {
    border: "border-[#ff7fcb]/22",
    glow: "shadow-[0_0_22px_rgba(255,127,203,0.06)]",
    surface:
      "bg-[radial-gradient(circle_at_82%_16%,rgba(255,127,203,0.1),transparent_22%),linear-gradient(180deg,rgba(33,24,29,0.96),rgba(20,14,18,0.96))]",
    kicker: "text-[#ff9dd8]",
  },
} as const;

export function ProjectBrand({ project, compact = false }: ProjectCardProps) {
  const panelHeight = compact ? "h-[6rem]" : "h-[7.2rem] md:h-[8rem]";

  return (
    <div className={`flex ${panelHeight} items-center justify-center overflow-hidden rounded-[1.3rem] border border-white/8 bg-black/24 px-4 py-3`}>
      <img src={project.logoSrc} alt={project.logoAlt} className="h-full w-full object-contain drop-shadow-[0_0_18px_rgba(0,0,0,0.45)]" />
    </div>
  );
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const theme = projectThemes[project.id];

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={[
        "group flex h-full flex-col rounded-[2rem] border transition-transform duration-200 hover:-translate-y-1",
        theme.border,
        theme.glow,
        theme.surface,
        compact ? "gap-4 p-4" : "gap-5 p-5",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4">
        <div className={`display-face text-sm uppercase tracking-[0.32em] ${theme.kicker}`}>{project.type}</div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 transition group-hover:text-white">
          Open <ExternalLink size={14} />
        </div>
      </div>

      <ProjectBrand project={project} compact={compact} />

      <div className="flex flex-1 flex-col gap-3">
        {!compact && (
          <div className="display-face text-[clamp(1.6rem,3vw,2.4rem)] uppercase leading-[0.94] tracking-[-0.05em] text-white">
            {project.name}
          </div>
        )}
        <p className="max-w-xl text-sm leading-7 text-zinc-300">{project.summary}</p>
      </div>
    </a>
  );
}
