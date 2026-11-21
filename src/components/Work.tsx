"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Target, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { type Lens, type Project, projects } from "@/data/content";
import { Reveal, SectionLabel } from "./Reveal";

const lensMeta: Record<Lens, { label: string; short: string; Icon: typeof Target }> = {
  needs: { label: "The need", short: "Need", Icon: Target },
  ux: { label: "User experience", short: "UX", Icon: Users },
  tech: { label: "The build", short: "Build", Icon: Code2 },
};

function Mockup({ p }: { p: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2.5 sm:px-4 sm:py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-muted">
          {p.domain}
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> live
        </span>
      </div>
      <div className="relative aspect-[1600/739] overflow-hidden">
        {p.image ? (
          <Image
            src={p.image}
            alt={`${p.name} website`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col justify-between p-6 transition-transform duration-700 group-hover:scale-[1.03] md:p-8"
            style={{
              background: `radial-gradient(120% 120% at 100% 0%, ${p.palette.to} 0%, ${p.palette.from} 55%)`,
              color: p.palette.text,
            }}
          >
            <div className="flex items-center justify-between text-[11px] opacity-70">
              <span className="font-mono uppercase tracking-[0.2em]">{p.sector.split("·")[0]}</span>
              {p.languages && <span className="font-mono">{p.languages}</span>}
            </div>
            <div>
              <p className="font-serif text-4xl leading-none italic md:text-5xl">{p.name.split("–")[0]}</p>
              <div className="mt-5 flex gap-2">
                <span className="h-1.5 w-16 rounded-full bg-current opacity-80" />
                <span className="h-1.5 w-8 rounded-full bg-current opacity-30" />
                <span className="h-1.5 w-8 rounded-full bg-current opacity-30" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ p, i }: { p: Project; i: number }) {
  const [lens, setLens] = useState<Lens>("needs");
  const flip = i % 2 === 1;

  return (
    <Reveal>
      <article className="group grid items-center gap-8 border-t border-line py-12 md:gap-10 md:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block ${flip ? "lg:order-2" : ""}`}
          aria-label={`Visit ${p.name}`}
        >
          <Mockup p={p} />
        </a>

        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
            <span className="text-accent">0{i + 1}</span>
            <span>{p.sector}</span>
            {p.languages && (
              <span className="ml-auto inline-flex items-center gap-1.5">
                <Globe size={12} /> {p.languages}
              </span>
            )}
          </div>

          <h3 className="mt-4 text-[1.75rem] leading-tight font-medium tracking-tight md:text-4xl">{p.name}</h3>
          <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {p.features.map((f) => (
              <li key={f} className="rounded-full border border-line px-3 py-1 text-xs text-ink/80">
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">My role</p>
            <p className="mt-2 text-sm text-ink/90">{p.role.join("  ·  ")}</p>
          </div>

          {/* Lens switcher */}
          <div className="mt-8 rounded-2xl border border-line bg-surface p-2">
            <div role="tablist" aria-label="Project perspective" className="grid grid-cols-3 gap-1">
              {(Object.keys(lensMeta) as Lens[]).map((k) => {
                const { label, short, Icon } = lensMeta[k];
                const active = lens === k;
                return (
                  <button
                    key={k}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setLens(k)}
                    className={`relative flex items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-xs font-medium transition-colors sm:text-sm ${
                      active ? "text-accent-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId={`lens-${p.slug}`}
                        className="absolute inset-0 rounded-xl bg-accent"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <Icon size={14} className="relative" />
                    <span className="relative truncate sm:hidden">{short}</span>
                    <span className="relative hidden truncate sm:inline">{label}</span>
                  </button>
                );
              })}
            </div>
            <div className="relative min-h-[6.5rem] px-3 pt-4 pb-3">
              <AnimatePresence mode="wait">
                <motion.p
                  key={lens}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-[15px] leading-relaxed"
                >
                  {p.lenses[lens]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted">{p.stack.join("  ·  ")}</p>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium"
            >
              <span className="border-b border-accent/50 pb-0.5 transition-colors group-hover/link:border-accent">
                Visit site
              </span>
              <ArrowUpRight
                size={16}
                className="text-accent transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="02">Selected work</SectionLabel>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-6xl">
              Projects I <span className="font-serif font-normal italic text-accent">worked on.</span>
            </h2>
            <p className="max-w-sm text-muted">
              Live websites I took part in at Eliott &amp; Markus, from the first call to QA. Switch the tabs
              to see the need, the user experience and how it was built.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
