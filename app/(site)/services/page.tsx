import { serviceIcons } from "../../components/service-icons";
import { services } from "../../components/site-data";

export default function ServicesPage() {
  const includedItems = [
    "Custom header and first-screen direction",
    "Separate home, services, portfolio, hosting and contact pages",
    "Responsive build for desktop and mobile",
    "Domain, hosting, forms and email routing",
    "Direct edits and aftercare once live",
  ];

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
            <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Services</div>
            <h1 className="display-face outlined-heading mt-5 text-[clamp(2.4rem,5.8vw,5rem)] uppercase leading-[0.9] tracking-[-0.08em]">
              Design.
              <br />
              Build.
              <br />
              Launch.
              <br />
              Support.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              This is the actual offer: custom design direction, a proper multi-page build, domain and hosting setup, contact handling and the follow-on edits once the site is live.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(21,24,24,0.88),rgba(10,12,12,0.95))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
            <div className="display-face text-xs uppercase tracking-[0.34em] text-[#8cff41]">Included in the build</div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-200">
              {includedItems.map((item, index) => (
                <div
                  key={item}
                  className={[
                    "flex items-center justify-between gap-4 text-left",
                    index < includedItems.length - 1 ? "border-b border-white/10 pb-3" : "",
                  ].join(" ")}
                >
                  <span>{item}</span>
                  <span className="text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
        <div className="space-y-8">
          {services.map((service) => {
            const Icon = serviceIcons[service.iconId];

            return (
              <div
                key={service.number}
                className="grid gap-6 border-t border-white/12 pt-8 md:grid-cols-[auto_1fr_auto] md:items-start"
              >
                <div className="display-face text-5xl text-[#8cff41]/40">{service.number}</div>

                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8cff41]/22 bg-[#8cff41]/8 text-[#8cff41]">
                      <Icon size={18} />
                    </div>
                    <div className="display-face outlined-heading--soft text-[clamp(1.9rem,4vw,3.3rem)] uppercase tracking-[-0.05em]">
                      {service.title}
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">{service.text}</p>
                  <ul className="mt-5 grid gap-3 text-sm font-medium text-zinc-200 md:grid-cols-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 leading-6"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-1 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500 md:text-right">
                  / {service.tag}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
