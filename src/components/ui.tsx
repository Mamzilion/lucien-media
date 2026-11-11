"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Fait apparaître son contenu au défilement. */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/** En-tête de section numérotée : (01) Label + grand titre. */
export function SectionHeader({
  index,
  label,
  title,
  accent,
  className = "",
}: {
  index: string;
  label: string;
  title: string;
  accent?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">({index})</span> {label}
      </p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        {title} {accent && <span className="text-accent">{accent}</span>}
      </h2>
    </Reveal>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-ink hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--accent)]"
      : "border border-ink/20 text-ink hover:border-ink hover:-translate-y-0.5";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
