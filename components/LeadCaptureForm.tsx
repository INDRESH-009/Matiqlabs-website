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
};

const baseInput = "w-full rounded-[22px] border px-4 py-3.5 text-sm outline-none transition-all";

export function LeadCaptureForm({
  id,
  title,
  description,
  intent,
  buttonLabel,
  dark = false,
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

  return (
    <div
      id={id}
      className={`ambient-panel relative overflow-hidden rounded-[32px] border p-7 shadow-card ${dark ? "border-white/10 bg-white/[0.05] text-white" : "luxury-ring border-light-border bg-white text-ink"}`}
    >
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${dark ? "text-white/60" : "text-brand"}`}>
              {intent === "access" ? siteCopy.forms.accessLabel : siteCopy.forms.discoveryLabel}
            </p>
            <h3 className={`mt-4 text-[30px] ${dark ? "text-white" : "text-ink"}`}>{title}</h3>
            <p className={`mt-3 max-w-xl text-sm ${dark ? "text-white/65" : "text-ink-secondary"}`}>{description}</p>
          </div>
          <div className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${dark ? "border-white/14 bg-white/[0.06] text-white/65" : "border-brand/15 bg-brand-light text-brand"}`}>
            Confidential
          </div>
        </div>
        <div className={`mt-6 grid gap-3 sm:grid-cols-3 ${dark ? "text-white/70" : "text-ink-secondary"}`}>
          <div className={`rounded-[22px] border px-4 py-3 ${dark ? "border-white/10 bg-white/[0.05]" : "border-light-border bg-light-surface/80"}`}>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em]">Step 01</p>
            <p className="mt-2 text-sm font-semibold">Share the workflow</p>
          </div>
          <div className={`rounded-[22px] border px-4 py-3 ${dark ? "border-white/10 bg-white/[0.05]" : "border-light-border bg-light-surface/80"}`}>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em]">Step 02</p>
            <p className="mt-2 text-sm font-semibold">We review the fit</p>
          </div>
          <div className={`rounded-[22px] border px-4 py-3 ${dark ? "border-white/10 bg-white/[0.05]" : "border-light-border bg-light-surface/80"}`}>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em]">Step 03</p>
            <p className="mt-2 text-sm font-semibold">You get a clear next step</p>
          </div>
        </div>
      </div>
      <form onSubmit={submit} className="relative mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            required
            name="name"
            placeholder={siteCopy.forms.namePlaceholder}
            className={`${baseInput} ${dark ? "border-white/10 bg-white/[0.05] text-white placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.08]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-white"}`}
          />
          <input
            required
            name="company"
            placeholder={siteCopy.forms.companyPlaceholder}
            className={`${baseInput} ${dark ? "border-white/10 bg-white/[0.05] text-white placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.08]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-white"}`}
          />
        </div>
        <input
          required
          type="email"
          name="email"
          placeholder={siteCopy.forms.emailPlaceholder}
          className={`${baseInput} ${dark ? "border-white/10 bg-white/[0.05] text-white placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.08]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-white"}`}
        />
        <textarea
          required
          name="details"
          rows={5}
          placeholder={intent === "access" ? siteCopy.forms.accessDetailsPlaceholder : siteCopy.forms.discoveryDetailsPlaceholder}
          className={`${baseInput} resize-none ${dark ? "border-white/10 bg-white/[0.05] text-white placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.08]" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand focus:bg-white"}`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${dark ? "bg-white text-ink hover:bg-brand-light" : "bg-brand text-white shadow-brand-sm hover:bg-brand-dark"} disabled:cursor-not-allowed disabled:opacity-70`}
        >
          {loading ? siteCopy.forms.sending : buttonLabel}
        </button>
      </form>
      {sent ? (
        <p className={`mt-4 font-mono text-[11px] uppercase tracking-[0.12em] ${dark ? "text-white/70" : "text-green"}`}>
          {siteCopy.forms.success}
        </p>
      ) : null}
    </div>
  );
}
