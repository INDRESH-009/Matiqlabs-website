"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import siteCopy from "@/lib/site-copy.json";
import { Button } from "./ui";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const darkHeroRoute = pathname === "/" || pathname === "/cargomatiq";
  const useDarkLogo = darkHeroRoute && heroVisible;
  const headerClass = scrolled ? "border-transparent bg-transparent" : "border-transparent bg-transparent";
  const linkClass = useDarkLogo ? "text-white/66 hover:text-white" : "text-ink-secondary hover:text-ink";
  const pillClass = useDarkLogo
    ? "border-white/10 bg-[#1f1933]/45"
    : "border-brand/10 bg-white/80 shadow-[0_16px_44px_rgba(34,31,47,0.08)]";
  const primaryLinks = siteCopy.nav.links.filter(([label]) => label !== "Services");

  return (
    <>
      <header className={`sticky top-0 z-50 h-[86px] border-b transition-colors duration-200 ${headerClass}`}>
        <div className="section-container grid h-full grid-cols-[auto_1fr_auto] items-start gap-4 px-5 pt-5 sm:px-8 xl:px-0">
          <Link href="/" aria-label="Matiq Labs home">
            <Image
              src={useDarkLogo ? "/dark-mode-logo.png" : "/light-mode-logo.png"}
              alt="Matiq Labs"
              width={112}
              height={36}
              priority
              style={{ width: 112, height: "auto" }}
            />
          </Link>
          <nav className={`mx-auto mt-1 hidden items-center gap-0 rounded-full border px-2 py-1.5 backdrop-blur-xl md:flex ${pillClass}`}>
            {primaryLinks.map(([label, href]) => (
              <div key={label} className="flex items-center">
                <Link href={href} className={`px-4 py-1.5 text-xs font-medium transition-colors ${linkClass}`}>
                  {label}
                </Link>
                <span className={`h-4 w-px ${useDarkLogo ? "bg-white/10" : "bg-brand/10"}`} />
              </div>
            ))}
            <div className="relative">
              <button
                className={`px-4 py-1.5 text-xs font-medium transition-colors ${linkClass}`}
                onClick={() => setProductsOpen((value) => !value)}
                aria-expanded={productsOpen}
                aria-label="Open products menu"
              >
                {siteCopy.nav.productsLabel}
              </button>
              {productsOpen ? (
                <div className="absolute right-0 top-[calc(100%+12px)] min-w-[150px] rounded-[22px] border border-white/10 bg-[#1f1933]/90 p-1.5 shadow-dark-card backdrop-blur-xl">
                  <Link
                    href="/cargomatiq"
                    onClick={() => setProductsOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-white/76 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {siteCopy.nav.productName}
                  </Link>
                </div>
              ) : null}
            </div>
          </nav>
          <div className="mt-1 hidden items-center gap-2 justify-self-end md:flex">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-brand bg-brand px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-brand-sm transition-colors duration-200 hover:border-brand-dark hover:bg-brand-dark"
            >
              {siteCopy.nav.cta}
            </Link>
          </div>
          <button className={`relative z-10 col-start-3 grid h-10 w-10 shrink-0 place-items-center justify-self-end md:hidden ${useDarkLogo ? "text-white" : "text-ink"}`} onClick={() => setOpen(true)} aria-label="Open menu">
            <span>
              <span className="block h-0.5 w-7 bg-current" />
              <span className="mt-2 block h-0.5 w-7 bg-current" />
            </span>
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-[60] bg-[#171326] px-6 py-6">
          <div className="flex items-center justify-between">
            <Image src={useDarkLogo ? "/dark-mode-logo.png" : "/light-mode-logo.png"} alt="Matiq Labs" width={112} height={36} style={{ width: 112, height: "auto" }} />
            <button className="text-3xl text-white" onClick={() => setOpen(false)} aria-label="Close menu">x</button>
          </div>
          <nav className="mt-16 flex flex-col gap-6">
            {primaryLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} className="text-4xl font-bold text-white">
                {label}
              </Link>
            ))}
            <Link href="/cargomatiq" onClick={() => setOpen(false)} className="text-4xl font-bold text-white">
              {siteCopy.nav.productName}
            </Link>
            <div className="pt-4">
              <Button href="/#contact" size="sm">{siteCopy.nav.cta}</Button>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
