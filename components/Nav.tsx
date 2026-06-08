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
  const [heroVisible, setHeroVisible] = useState(true);
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
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), { threshold: 0.08 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const useDarkLogo = heroVisible && !scrolled && (pathname === "/" || pathname === "/cargomatiq");
  const headerClass = scrolled ? "border-light-border bg-[rgba(255,247,232,0.92)] backdrop-blur-md" : "border-transparent bg-transparent";
  const linkClass = pathname === "/" && !scrolled ? "text-white/72 hover:text-white" : "text-ink-secondary hover:text-ink";
  const primaryLinks = siteCopy.nav.links;

  return (
    <>
      <header className={`sticky top-0 z-50 h-[68px] border-b transition-colors duration-200 ${headerClass}`}>
        <div className="section-container flex h-full items-center justify-between">
          <Link href="/" aria-label="Matiq Labs home">
            <Image src={useDarkLogo ? "/dark-mode-logo.png" : "/light-mode-logo.png"} alt="Matiq Labs" width={130} height={36} priority />
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {primaryLinks.map(([label, href]) => (
              <Link key={label} href={href} className={`text-sm font-medium transition-colors ${linkClass}`}>
                {label}
              </Link>
            ))}
            <div className="relative">
              <button
                className={`text-sm font-medium transition-colors ${linkClass}`}
                onClick={() => setProductsOpen((value) => !value)}
                aria-expanded={productsOpen}
                aria-label="Open products menu"
              >
                {siteCopy.nav.productsLabel}
              </button>
              {productsOpen ? (
                <div className="absolute right-0 top-[calc(100%+12px)] min-w-[150px] rounded-[22px] border border-light-border bg-light p-1.5 shadow-card">
                  <Link
                    href="/cargomatiq"
                    onClick={() => setProductsOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-light-surface"
                  >
                    {siteCopy.nav.productName}
                  </Link>
                </div>
              ) : null}
            </div>
          </nav>
          <div className="hidden md:block">
            <Button href="/#contact" size="sm">{siteCopy.nav.cta}</Button>
          </div>
          <button className={`md:hidden ${useDarkLogo ? "text-white" : "text-ink"}`} onClick={() => setOpen(true)} aria-label="Open menu">
            <span className="block h-0.5 w-7 bg-current" />
            <span className="mt-2 block h-0.5 w-7 bg-current" />
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-[60] bg-dark-base px-6 py-6">
          <div className="flex items-center justify-between">
            <Image src="/dark-mode-logo.png" alt="Matiq Labs" width={130} height={36} />
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
