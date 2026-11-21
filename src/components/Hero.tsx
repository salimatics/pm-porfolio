"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import type { MouseEvent } from "react";
import { profile } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

const words = [
  { text: "I follow a project from the", serif: false },
  { text: "first", serif: true },
  { text: "call", serif: true },
  { text: "to the", serif: false },
  { text: "last", serif: true },
  { text: "bug.", serif: true },
];

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgb(212 255 94 / 0.10), transparent 60%)`;

  function onMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted md:mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to new opportunities
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> {profile.location}
          </span>
        </motion.div>

        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {profile.name} — {profile.role}
        </p>

        <h1 className="max-w-5xl text-[clamp(2.6rem,7vw,6.2rem)] leading-[0.98] font-medium tracking-[-0.035em]">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease }}
              className={`mr-[0.25em] inline-block ${
                w.serif ? "font-serif font-normal italic tracking-[-0.01em] text-accent" : ""
              }`}
            >
              {w.text}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-10"
        >
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Full stack developer with a QA mindset. I join client calls to understand the needs, check what is
            technically feasible, build it, test it, and keep improving the{" "}
            <span className="text-ink">user experience</span>. Now studying{" "}
            <span className="text-ink">Digital Transformation</span> to grow into project management.
          </p>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink transition-transform hover:scale-[1.03]"
            >
              See my projects
              <ArrowDownRight size={18} className="transition-transform group-hover:rotate-[-45deg]" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-medium transition-colors hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 md:mt-20 gap-px overflow-hidden rounded-2xl border border-line bg-line"
        >
          {[
            ["3+ yrs", "building for the web"],
            ["Call → Code → QA", "involved end to end"],
            ["Next: PM", "heading to project management"],
          ].map(([k, v]) => (
            <div key={k} className="bg-bg/90 p-4 sm:p-5">
              <dt className="text-base font-medium tracking-tight sm:text-lg">{k}</dt>
              <dd className="mt-1 text-sm text-muted">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
