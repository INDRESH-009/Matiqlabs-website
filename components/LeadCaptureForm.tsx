"use client";

import { FormEvent, useState } from "react";
import siteCopy from "@/lib/site-copy.json";

type LeadCaptureFormProps = {
  id?: string;
  title: string;
  description: string;
  intent: "discovery" | "access";
  buttonLabel: string;
  dark?: boolean;
  compact?: boolean;
  detailsPlaceholder?: string;
};

const baseInput = "w-full rounded-[22px] border px-4 py-3.5 text-sm outline-none transition-all";

export function LeadCaptureForm({
  id,
  title,
  description,
  intent,
  buttonLabel,
  dark = false,
  compact = false,
  detailsPlaceholder,
}: LeadCaptureFormProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      intent,
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      details: formData.get("details"),
    };

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    if (response.ok) {
      event.currentTarget.reset();
      setSent(true);
    }
  }

  if (compact) {
    return (
      <div
        id={id}
        className={`relative overflow-hidden rounded-[28px] border p-6 shadow-dark-card backdrop-blur-md sm:p-7 ${dark ? "border-white/10 bg-white/[0.045] text-white" : "border-light-border bg-light text-ink"}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(32,214,199,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(91,61,245,0.12),transparent_42%)]" />
        <div className="relative">
          <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${dark ? "!text-white/70" : "text-brand"}`}>
            {title}
          </p>
          <p className={`mt-3 max-w-lg text-sm ${dark ? "!text-white/68" : "text-ink-secondary"}`}>{description}</p>
        </div>
        <form onSubmit={submit} className="relative mt-6 space-y-3">
          <input
            required
            name="name"
            placeholder={siteCopy.forms.namePlaceholder}
            className={`${baseInput} rounded-[18px] py-3 ${dark ? "border-white/10 bg-white/[0.045] !text-white placeholder:!text-white/45 focus:border-teal/40 focus:bg-white/[0.07]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-light"}`}
          />
          <input
            required
            type="email"
            name="email"
            placeholder={siteCopy.forms.emailPlaceholder}
            className={`${baseInput} rounded-[18px] py-3 ${dark ? "border-white/10 bg-white/[0.045] !text-white placeholder:!text-white/45 focus:border-teal/40 focus:bg-white/[0.07]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-light"}`}
          />
          <input
            required
            name="company"
            placeholder={siteCopy.forms.companyPlaceholder}
            className={`${baseInput} rounded-[18px] py-3 ${dark ? "border-white/10 bg-white/[0.045] !text-white placeholder:!text-white/45 focus:border-teal/40 focus:bg-white/[0.07]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-light"}`}
          />
          <textarea
            required
            name="details"
            rows={4}
            placeholder={detailsPlaceholder ?? (intent === "access" ? siteCopy.forms.accessDetailsPlaceholder : siteCopy.forms.discoveryDetailsPlaceholder)}
            className={`${baseInput} resize-none rounded-[18px] py-3 ${dark ? "border-white/10 bg-white/[0.045] !text-white placeholder:!text-white/45 focus:border-teal/40 focus:bg-white/[0.07]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-light"}`}
          />
          <button
            type="submit"
            disabled={loading}
            className={`inline-flex rounded-full px-5 py-3 text-sm font-semibold transition-all ${dark ? "bg-white text-ink hover:bg-brand-light" : "bg-[#3657F6] text-white shadow-[0_18px_44px_rgba(54,87,246,0.22)] hover:bg-[#2544D8]"} disabled:cursor-not-allowed disabled:opacity-70`}
          >
            {loading ? siteCopy.forms.sending : buttonLabel}
          </button>
        </form>
        {sent ? (
          <p className={`relative mt-4 inline-flex rounded-full border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] ${dark ? "border-green/25 bg-green/10 !text-green" : "border-green bg-green text-ink"}`}>
            {siteCopy.forms.success}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      id={id}
      className={`ambient-panel relative overflow-hidden rounded-[32px] border p-7 shadow-card ${dark ? "border-white/10 bg-white/[0.05] text-white" : "luxury-ring border-light-border bg-light text-ink"}`}
    >
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${dark ? "!text-white" : "text-brand"}`}>
              {intent === "access" ? siteCopy.forms.accessLabel : siteCopy.forms.discoveryLabel}
            </p>
            <h3 className={`mt-4 text-[30px] ${dark ? "!text-white" : "text-ink"}`}>{title}</h3>
            <p className={`mt-3 max-w-xl text-sm ${dark ? "!text-white" : "text-ink-secondary"}`}>{description}</p>
          </div>
          <div className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${dark ? "border-teal/30 bg-teal/10 !text-white" : "border-teal/25 bg-teal/10 text-brand"}`}>
            Confidential
          </div>
        </div>
        <div className={`mt-6 grid gap-3 sm:grid-cols-3 ${dark ? "!text-white" : "text-ink-secondary"}`}>
          <div className={`rounded-[22px] border px-4 py-3 ${dark ? "border-white/10 bg-white/[0.05]" : "border-light-border bg-light-surface/80"}`}>
            <p className={dark ? "font-mono text-[10px] uppercase tracking-[0.14em] !text-white" : "font-mono text-[10px] uppercase tracking-[0.14em]"}>Step 01</p>
            <p className={dark ? "mt-2 text-sm font-semibold !text-white" : "mt-2 text-sm font-semibold"}>Share the workflow</p>
          </div>
          <div className={`rounded-[22px] border px-4 py-3 ${dark ? "border-white/10 bg-white/[0.05]" : "border-light-border bg-light-surface/80"}`}>
            <p className={dark ? "font-mono text-[10px] uppercase tracking-[0.14em] !text-white" : "font-mono text-[10px] uppercase tracking-[0.14em]"}>Step 02</p>
            <p className={dark ? "mt-2 text-sm font-semibold !text-white" : "mt-2 text-sm font-semibold"}>We review the fit</p>
          </div>
          <div className={`rounded-[22px] border px-4 py-3 ${dark ? "border-white/10 bg-white/[0.05]" : "border-light-border bg-light-surface/80"}`}>
            <p className={dark ? "font-mono text-[10px] uppercase tracking-[0.14em] !text-white" : "font-mono text-[10px] uppercase tracking-[0.14em]"}>Step 03</p>
            <p className={dark ? "mt-2 text-sm font-semibold !text-white" : "mt-2 text-sm font-semibold"}>You get a clear next step</p>
          </div>
        </div>
      </div>
      <form onSubmit={submit} className="relative mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            required
            name="name"
            placeholder={siteCopy.forms.namePlaceholder}
            className={`${baseInput} ${dark ? "border-white/10 bg-white/[0.05] !text-white placeholder:!text-white focus:border-teal/40 focus:bg-white/[0.08]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-light"}`}
          />
          <input
            required
            name="company"
            placeholder={siteCopy.forms.companyPlaceholder}
            className={`${baseInput} ${dark ? "border-white/10 bg-white/[0.05] !text-white placeholder:!text-white focus:border-teal/40 focus:bg-white/[0.08]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-light"}`}
          />
        </div>
        <input
          required
          type="email"
          name="email"
          placeholder={siteCopy.forms.emailPlaceholder}
          className={`${baseInput} ${dark ? "border-white/10 bg-white/[0.05] !text-white placeholder:!text-white focus:border-teal/40 focus:bg-white/[0.08]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-light"}`}
        />
        <textarea
          required
          name="details"
          rows={5}
          placeholder={intent === "access" ? siteCopy.forms.accessDetailsPlaceholder : siteCopy.forms.discoveryDetailsPlaceholder}
          className={`${baseInput} resize-none ${dark ? "border-white/10 bg-white/[0.05] !text-white placeholder:!text-white focus:border-teal/40 focus:bg-white/[0.08]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-light"}`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${dark ? "bg-light text-ink hover:bg-brand-light" : "bg-[#3657F6] text-white shadow-[0_18px_44px_rgba(54,87,246,0.22)] hover:bg-[#2544D8] hover:shadow-[0_16px_38px_rgba(54,87,246,0.2)]"} disabled:cursor-not-allowed disabled:opacity-70`}
        >
          {loading ? siteCopy.forms.sending : buttonLabel}
        </button>
      </form>
      {sent ? (
        <p className={`mt-4 inline-flex rounded-full border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] ${dark ? "border-green/25 bg-green/10 !text-green" : "border-green bg-green text-ink"}`}>
          {siteCopy.forms.success}
        </p>
      ) : null}
    </div>
  );
}
