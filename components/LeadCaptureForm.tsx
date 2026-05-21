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

const baseInput = "w-full rounded-2xl border px-4 py-3.5 text-sm outline-none transition-colors";

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
      className={`rounded-[30px] border p-7 shadow-card ${dark ? "border-white/10 bg-white/[0.05] text-white" : "border-light-border bg-white text-ink"}`}
    >
      <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${dark ? "text-white/60" : "text-brand"}`}>
        {intent === "access" ? siteCopy.forms.accessLabel : siteCopy.forms.discoveryLabel}
      </p>
      <h3 className={`mt-4 text-[30px] ${dark ? "text-white" : "text-ink"}`}>{title}</h3>
      <p className={`mt-3 text-sm ${dark ? "text-white/65" : "text-ink-secondary"}`}>{description}</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            required
            name="name"
            placeholder={siteCopy.forms.namePlaceholder}
            className={`${baseInput} ${dark ? "border-white/10 bg-white/[0.05] text-white placeholder:text-white/35 focus:border-white/25" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand"}`}
          />
          <input
            required
            name="company"
            placeholder={siteCopy.forms.companyPlaceholder}
            className={`${baseInput} ${dark ? "border-white/10 bg-white/[0.05] text-white placeholder:text-white/35 focus:border-white/25" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand"}`}
          />
        </div>
        <input
          required
          type="email"
          name="email"
          placeholder={siteCopy.forms.emailPlaceholder}
          className={`${baseInput} ${dark ? "border-white/10 bg-white/[0.05] text-white placeholder:text-white/35 focus:border-white/25" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand"}`}
        />
        <textarea
          required
          name="details"
          rows={5}
          placeholder={intent === "access" ? siteCopy.forms.accessDetailsPlaceholder : siteCopy.forms.discoveryDetailsPlaceholder}
          className={`${baseInput} resize-none ${dark ? "border-white/10 bg-white/[0.05] text-white placeholder:text-white/35 focus:border-white/25" : "border-light-border bg-light-surface text-ink placeholder:text-ink-muted focus:border-brand"}`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex rounded-2xl px-5 py-3.5 text-sm font-semibold transition-colors ${dark ? "bg-white text-ink hover:bg-brand-light" : "bg-brand text-white hover:bg-brand-dark"} disabled:cursor-not-allowed disabled:opacity-70`}
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
