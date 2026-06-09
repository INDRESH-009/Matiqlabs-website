import Image from "next/image";
import Link from "next/link";
import siteCopy from "@/lib/site-copy.json";
import { Arrow } from "./ui";

export function Footer() {
  const links = [
    ...siteCopy.nav.links.filter(([label]) => label !== "About"),
    [siteCopy.nav.productName, "/cargomatiq"],
  ];

  return (
    <footer className="relative bg-[#171326] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="section-container grid gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] xl:px-0">
        <div className="max-w-sm">
          <Image src="/dark-mode-logo.png" alt={siteCopy.meta.siteName} width={120} height={33} style={{ width: 120, height: "auto" }} />
          <p className="mt-5 max-w-xs text-sm text-white/50">{siteCopy.meta.tagline}</p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/35">{siteCopy.footer.companyStamp}</p>
          <div className="mt-6 flex gap-3">
            {siteCopy.footer.socials.map((s) => <a key={s} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-sm text-white/60 transition-all duration-300 hover:border-brand hover:text-white">{s}</a>)}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">{siteCopy.footer.companyLabel}</p>
          <div className="mt-5 flex flex-col gap-3">
            {siteCopy.nav.links.map(([label, href]) => <Link key={label} href={href} className="text-sm text-white/60 transition-all duration-300 hover:text-white">{label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">{siteCopy.footer.productsLabel}</p>
          <div className="mt-5 flex flex-col gap-3">
            {links.filter(([label]) => label === siteCopy.nav.productName).map(([label, href]) => (
              <Link key={label} href={href} className="text-sm text-white/60 transition-all duration-300 hover:text-white">{label}</Link>
            ))}
            <span className="text-sm text-white/30">{siteCopy.footer.productNote}</span>
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">{siteCopy.footer.contactLabel}</p>
          <div className="mt-5 flex flex-col gap-4">
            <a href={`mailto:${siteCopy.company.email}`} className="font-mono text-sm text-teal">{siteCopy.company.email}</a>
            <Link href="/#contact" className="group text-sm text-white transition-all duration-300">{siteCopy.nav.cta} <Arrow /></Link>
          </div>
        </div>
      </div>
      <div className="section-container flex flex-col justify-between gap-3 border-t border-white/10 px-5 py-6 font-mono text-[12px] text-white/35 sm:flex-row sm:px-8 xl:px-0">
        <span>{siteCopy.company.copyright}</span>
        <span>{siteCopy.footer.bottomNote}</span>
      </div>
    </footer>
  );
}
