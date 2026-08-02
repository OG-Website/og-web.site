import Link from "next/link";

export default function AcademyBrand({ large = false }: { large?: boolean }) {
  return (
    <Link
      href="/academy"
      aria-label="OG Labs Code Central home"
      className="inline-flex items-center gap-4"
    >
      <img
        src="/assets/branding/og-labs-logo.png"
        alt=""
        className={`${large ? "h-28 w-28" : "h-20 w-20"} shrink-0 object-contain`}
      />
      <span className="leading-none">
        <span
          className={`${large ? "text-3xl" : "text-2xl"} display-face block uppercase text-white`}
        >
          OG Labs
        </span>
        <span
          className={`${large ? "text-xl" : "text-base"} mt-2 block font-bold uppercase tracking-[0.18em] text-[#20d9ff]`}
        >
          Code Central
        </span>
      </span>
    </Link>
  );
}
