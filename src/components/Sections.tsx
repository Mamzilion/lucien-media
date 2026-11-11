import { config, hero, story, mediaBuying, formation, results, method } from "@/content/site";
import { Reveal, SectionHeader, Chip, Button } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");

/* ---------------------------------- HERO ---------------------------------- */
export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden pt-28 sm:pt-36">
      {/* halo décoratif */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 md:grid-cols-[1.25fr_1fr] md:items-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {hero.kicker}
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            {hero.titleStart} <span className="text-accent">{hero.titleAccent}</span>
            {hero.titleEnd}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#appel">{hero.primaryCta}</Button>
            <Button href="#guide" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-deep">
            {config.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={config.photo} alt={config.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-white/70">
                <span className="font-display text-7xl font-bold text-white/90">LB</span>
                <span className="px-8 text-xs">Photo de Lucien à ajouter dans /public</span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
              <p className="font-display text-xl font-semibold">{config.name}</p>
              <p className="text-sm text-white/75">{config.role}</p>
            </div>
          </div>
          <div className="absolute left-3 top-10 sm:-left-6 rounded-2xl border border-line bg-surface px-4 py-3 shadow-xl">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Régies</p>
            <p className="font-display font-semibold">Meta · Google</p>
          </div>
          <div className="absolute right-3 bottom-24 sm:-right-4 rounded-2xl bg-accent px-4 py-3 text-accent-ink shadow-xl">
            <p className="font-display font-semibold">1er client signé ✓</p>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {hero.stats.map((s) => (
            <div key={s.label} className="bg-surface p-6">
              <p className="font-display text-2xl font-semibold sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 overflow-hidden border-y border-line py-4">
        <div className="marquee flex w-max gap-10">
          {[...hero.tags, ...hero.tags].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl text-muted">
              {t} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- MON HISTOIRE ------------------------------ */
export function Story() {
  return (
    <section id="histoire" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeader index="01" label={story.label} title={story.title} accent={story.accent} />
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {story.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {story.values.map((v, i) => (
            <Reveal key={v.code} delay={i * 80}>
              <div className="h-full rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent">
                <p className="font-mono text-xs text-accent">{v.code}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- LE MÉTIER -------------------------------- */
export function MediaBuying() {
  return (
    <section className="bg-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            <span className="text-accent">(02)</span> {mediaBuying.label}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {mediaBuying.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{mediaBuying.intro}</p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {mediaBuying.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="h-full">
              <div className="h-full bg-deep p-7">
                <p className="font-mono text-xs text-accent">{pad(i + 1)}</p>
                <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FORMATION -------------------------------- */
export function Formation() {
  const total = formation.modules.length;
  return (
    <section id="formation" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeader index="03" label={formation.label} title={formation.title} accent={formation.accent} />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {formation.modules.map((m, i) => (
          <Reveal key={m.title} delay={(i % 3) * 80}>
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition hover:-translate-y-1 hover:border-accent">
              <p className="font-mono text-xs text-muted">
                <span className="text-accent">{pad(i + 1)}</span>/{pad(total)}
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold">{m.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{m.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-4 lg:grid-cols-3">
        {formation.offers.map((o, i) => (
          <Reveal key={o.name} delay={i * 100}>
            <div
              className={`relative flex h-full flex-col rounded-3xl p-8 ${
                o.highlight ? "bg-ink text-bg" : "border border-line bg-surface"
              }`}
            >
              {o.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">
                  Le plus choisi
                </span>
              )}
              <p className="font-display text-lg font-semibold">{o.name}</p>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight">{o.price}</p>
              <p className={`mt-1 text-sm ${o.highlight ? "text-bg/60" : "text-muted"}`}>{o.note}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {o.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="text-accent">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={o.href}
                className={`mt-8 rounded-full py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 ${
                  o.highlight ? "bg-accent text-accent-ink" : "border border-ink/20 hover:border-ink"
                }`}
              >
                {o.cta} →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- RÉSULTATS -------------------------------- */
export function Results() {
  return (
    <section id="resultats" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader index="04" label={results.label} title={results.title} accent={results.accent} />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {results.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-line bg-bg p-7">
                {results.isExample && (
                  <span className="absolute right-5 top-5 rounded-full border border-dashed border-accent px-2 py-0.5 font-mono text-[10px] uppercase text-accent">
                    Exemple
                  </span>
                )}
                <span className="font-display text-5xl leading-none text-accent">“</span>
                <blockquote className="mt-2 flex-1 leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-bg">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
                <p className="mt-4 rounded-xl bg-accent/10 px-3 py-2 text-sm font-semibold text-accent">{t.result}</p>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {results.screenshots.map((s, i) => (
            <Reveal key={s} delay={i * 60}>
              <div className="grid aspect-[3/4] place-items-center rounded-2xl border border-dashed border-line bg-bg p-4 text-center text-xs text-muted">
                {s}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- MÉTHODE --------------------------------- */
export function Method() {
  return (
    <section id="methode" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeader index="05" label={method.label} title={method.title} accent={method.accent} />
      <ol className="mt-14 grid gap-8 md:grid-cols-4">
        {method.steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <li className="relative border-t-2 border-ink pt-6">
              <span className="absolute -top-[9px] left-0 h-4 w-4 rounded-full border-2 border-ink bg-accent" />
              <p className="font-mono text-xs text-muted">Étape {pad(i + 1)}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ---------------------------------- FOOTER ---------------------------------- */
export function Footer() {
  return (
    <footer className="bg-ink text-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight">
            Ton premier client <span className="text-accent">commence ici.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-bg/60">{config.role}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-bg/50">Explorer</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#histoire" className="hover:text-accent">Mon histoire</a></li>
            <li><a href="#formation" className="hover:text-accent">Formation</a></li>
            <li><a href="#resultats" className="hover:text-accent">Résultats</a></li>
            <li><a href="#guide" className="hover:text-accent">Guide gratuit</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-bg/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`https://wa.me/${config.whatsappNumber}`} className="hover:text-accent">WhatsApp</a></li>
            <li><a href={config.instagram} className="hover:text-accent">Instagram</a></li>
            <li><a href={`mailto:${config.email}`} className="hover:text-accent">{config.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bg/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-bg/50">
          © {new Date().getFullYear()} {config.name}. Les résultats présentés dépendent de l&apos;implication de chacun et ne sont pas garantis.
        </p>
      </div>
    </footer>
  );
}
