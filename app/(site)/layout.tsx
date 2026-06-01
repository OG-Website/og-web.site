import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import ScrollReset from "../components/scroll-reset";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--site-bg)] text-white selection:bg-[#8cff41] selection:text-black">
      <ScrollReset />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
