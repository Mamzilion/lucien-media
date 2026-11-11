"use client";

import { useState, type FormEvent } from "react";
import { config, leadMagnet, faq, booking } from "@/content/site";
import { waLink } from "@/lib/wa";
import { Reveal, SectionHeader } from "./ui";

const inputCls =
  "w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-sm text-ink placeholder:text-muted/70 outline-none transition focus:border-accent";

/* ------------------------------- GUIDE GRATUIT ------------------------------ */
export function LeadMagnet() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "guide-gratuit" }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="guide" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grain relative overflow-hidden rounded-[2.5rem] bg-accent p-8 text-accent-ink sm:p-14">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full border-[40px] border-white/15" />
        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">(06) {leadMagnet.label}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              {leadMagnet.title} <span className="italic">{leadMagnet.accent}</span>
            </h2>
            <p className="mt-5 leading-relaxed opacity-85">{leadMagnet.text}</p>
            <ul className="mt-6 space-y-2 text-sm font-medium">
              {leadMagnet.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span>✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-surface p-6 text-ink shadow-2xl sm:p-8">
              {status === "done" ? (
                <div className="py-6 text-center">
                  <p className="text-4xl">🎉</p>
                  <p className="mt-3 font-display text-2xl font-semibold">C&apos;est envoyé !</p>
                  <p className="mt-2 text-sm text-muted">Merci, le guide arrive très vite.</p>
                  {config.guideUrl && (
                    <a
                      href={config.guideUrl}
                      className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
                    >
                      Télécharger le guide →
                    </a>
                  )}
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-3">
                  <p className="font-display text-xl font-semibold">Reçois le guide gratuitement</p>
                  <input name="name" required placeholder="Ton prénom" className={inputCls} />
                  <input name="email" type="email" required placeholder="Ton adresse e-mail" className={inputCls} />
                  <input name="whatsapp" type="tel" placeholder="Ton WhatsApp (facultatif)" className={inputCls} />
                  <button
                    disabled={status === "loading"}
                    className="w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-bg transition hover:opacity-90 disabled:opacity-60"
                  >
                    {status === "loading" ? "Envoi…" : "Recevoir le guide →"}
                  </button>
                  {status === "error" && (
                    <p className="text-center text-sm text-red-600">Oups, réessaie dans un instant.</p>
                  )}
                  <p className="text-center text-xs text-muted">Pas de spam. Désinscription en un clic.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ FAQ ----------------------------------- */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <SectionHeader index="07" label={faq.label} title={faq.title} />
        <div className="divide-y divide-line border-y border-line">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-semibold">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition ${
                      isOpen ? "rotate-45 bg-accent text-accent-ink" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                >
                  <p className="overflow-hidden leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ APPEL DÉCOUVERTE ---------------------------- */
export function Booking() {
  const [situation, setSituation] = useState(booking.situations[0]);
  const [slot, setSlot] = useState(booking.slots[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg =
      `Bonjour Lucien, je souhaite réserver un appel découverte.\n\n` +
      `Prénom : ${f.get("name")}\n` +
      `Situation : ${situation}\n` +
      `Objectif : ${f.get("goal") || "—"}\n` +
      `Disponibilités : ${slot}`;
    // Enregistre aussi le contact (sans bloquer l'ouverture de WhatsApp)
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: f.get("name"), situation, goal: f.get("goal"), slot, source: "appel-decouverte" }),
    }).catch(() => {});
    window.open(waLink(config.whatsappNumber, msg), "_blank");
  }

  const pill = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition ${
      active ? "border-accent bg-accent text-accent-ink" : "border-line text-muted hover:border-ink hover:text-ink"
    }`;

  return (
    <section id="appel" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeader index="08" label={booking.label} title={booking.title} accent={booking.accent} />
          <Reveal>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{booking.text}</p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={waLink(config.whatsappNumber, "Bonjour Lucien, j'ai une question sur ta formation.")}
                target="_blank"
                className="flex items-center gap-3 font-semibold hover:text-accent"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                Écrire directement sur WhatsApp
              </a>
              <a href={config.instagram} target="_blank" className="flex items-center gap-3 font-semibold hover:text-accent">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-line">IG</span>
                @lucienbillong
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          {config.bookingUrl ? (
            <iframe
              src={config.bookingUrl}
              title="Réserver un appel"
              className="h-[680px] w-full rounded-3xl border border-line bg-bg"
            />
          ) : (
            <form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-line bg-bg p-6 sm:p-8">
              <div>
                <label className="text-sm font-semibold">Ton prénom</label>
                <input name="name" required placeholder="Ex. Kevin" className={`${inputCls} mt-2 bg-surface`} />
              </div>
              <div>
                <p className="text-sm font-semibold">Ta situation actuelle</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {booking.situations.map((s) => (
                    <button type="button" key={s} onClick={() => setSituation(s)} className={pill(situation === s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold">Ton objectif</label>
                <textarea
                  name="goal"
                  rows={3}
                  placeholder="Ex. générer 1 000 € par mois en plus de mon salaire"
                  className={`${inputCls} mt-2 resize-none bg-surface`}
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Quand es-tu disponible ?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {booking.slots.map((s) => (
                    <button type="button" key={s} onClick={() => setSlot(s)} className={pill(slot === s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-sm font-semibold text-accent-ink transition hover:-translate-y-0.5">
                <WhatsAppIcon className="h-4 w-4" />
                Réserver mon appel sur WhatsApp
              </button>
              <p className="text-center text-xs text-muted">Gratuit · 30 minutes · Sans engagement</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ BOUTON FLOTTANT ----------------------------- */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink(config.whatsappNumber, "Bonjour Lucien, je viens de ton site et j'aimerais en savoir plus.")}
      target="_blank"
      aria-label="Contacter Lucien sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}
