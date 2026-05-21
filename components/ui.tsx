"use client";

import type { ComponentProps, ReactNode } from "react";

const colorMap = {
  blue: "bg-brand",
  teal: "bg-teal",
  amber: "bg-amber",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & {
  variant?: "primary" | "ghost" | "ghostDark" | "white";
  size?: "sm" | "md";
}) {
  const variants = {
    primary: "bg-brand text-white shadow-brand-sm hover:bg-brand-dark",
    ghost: "border border-light-border bg-white text-ink hover:border-brand hover:bg-brand-light",
    ghostDark: "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]",
    white: "bg-white text-brand shadow-brand-sm hover:bg-brand-light",
  };

  const sizes = {
    sm: "rounded-xl px-4 py-2.5 text-sm",
    md: "rounded-2xl px-5 py-3.5 text-[15px]",
  };

  return (
    <a
      className={`group inline-flex items-center justify-center gap-2 font-body font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function Arrow() {
  return <span aria-hidden="true">{"->"}</span>;
}

export function SectionLabel({
  children,
  center = false,
  dark = false,
}: {
  children: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className={`h-px w-9 ${dark ? "bg-white/40" : "bg-brand"}`} />
      <span className={`font-mono text-[11px] uppercase tracking-[0.14em] ${dark ? "text-white/70" : "text-brand"}`}>{children}</span>
    </div>
  );
}

export function GradientOrb({
  color = "blue",
  size = 500,
  opacity = 0.35,
  className = "",
  blur = 140,
}: {
  color?: "blue" | "teal" | "amber";
  size?: number;
  opacity?: number;
  className?: string;
  blur?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full ${colorMap[color]} ${className}`}
      style={{ width: size, height: size, opacity, filter: `blur(${blur}px)` }}
    />
  );
}

export function Card({
  variant = "default",
  className = "",
  children,
  ...props
}: ComponentProps<"div"> & {
  variant?: "default" | "dark" | "feature" | "highlight";
}) {
  const variants = {
    default: "border border-light-border bg-white p-8 shadow-card",
    dark: "border border-white/10 bg-dark-elevated p-8 shadow-dark-card",
    feature: "border border-[#dce5ff] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)] p-8 shadow-card",
    highlight: "border border-brand/15 bg-brand-light/55 p-8 shadow-card",
  };

  return <div className={`rounded-[28px] ${variants[variant]} ${className}`} {...props}>{children}</div>;
}

export function Chip({
  children,
  variant = "light",
  dot = false,
  className = "",
}: {
  children: ReactNode;
  variant?: "light" | "dark" | "status";
  dot?: boolean;
  className?: string;
}) {
  const variants = {
    light: "border-light-border bg-white text-ink-secondary",
    dark: "border-white/15 bg-white/[0.08] text-white/75",
    status: "border-green/25 bg-green/10 text-green",
  };

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] ${variants[variant]} ${className}`}>
      {dot ? <span className="h-2 w-2 rounded-full bg-current" /> : null}
      {children}
    </span>
  );
}

export function StatCounter({
  target,
  suffix = "",
  size = "text-5xl",
}: {
  target: number;
  suffix?: string;
  size?: string;
}) {
  return <span className={`font-display font-extrabold leading-none text-brand ${size}`}>{`${target}${suffix}`}</span>;
}

export function Icon({
  name,
}: {
  name: "search" | "layers" | "rocket" | "doc" | "invoice" | "approval" | "report" | "vendor" | "data" | "audit" | "custom";
}) {
  const paths: Record<string, ReactNode> = {
    search: <><circle cx="11" cy="11" r="6" /><path d="m16 16 5 5" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /><path d="m3 18 9 5 9-5" /></>,
    rocket: <><path d="M5 15c4-8 8-11 16-12-1 8-4 12-12 16l-4-4Z" /><path d="M9 19c-2 0-4 1-6 3 1-3 2-5 3-6" /><circle cx="15" cy="9" r="2" /></>,
    doc: <><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h5" /></>,
    invoice: <><path d="M7 3h10v18l-2-1-2 1-2-1-2 1-2-1V3Z" /><path d="M10 8h4M10 12h4M10 16h2" /></>,
    approval: <><path d="M4 12h4l3 7 5-14 3 7h1" /></>,
    report: <><path d="M4 19V5" /><path d="M8 17V9" /><path d="M12 17V7" /><path d="M16 17v-5" /><path d="M20 19H3" /></>,
    vendor: <><path d="M4 7h16v10H4z" /><path d="M4 10h16" /><path d="M8 15h3" /></>,
    data: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v7c0 2 3 3 7 3s7-1 7-3V5" /><path d="M5 12v7c0 2 3 3 7 3s7-1 7-3v-7" /></>,
    audit: <><path d="M9 11l2 2 4-5" /><path d="M5 4h14v17H5z" /></>,
    custom: <><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="8" /></>,
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">{paths[name]}</svg>;
}
