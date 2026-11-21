"use client";

import { motion } from "framer-motion";
import { Bug, Code2, Compass, Ear, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { journey } from "@/data/content";
import { Reveal, SectionLabel } from "./Reveal";

const icons = [Ear, ShieldCheck, Code2, Bug, Sparkles];

export function Approach() {
  const [active, setActive] = useState(0);

  return (
    <section id="approach" className="relative py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="01">How I work</SectionLabel>
          <h2 className="max-w-4xl text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-6xl">
            Not just the code —{" "}
            <span className="font-serif font-normal italic text-accent">the whole project.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            I like being part of every step: understanding what people need, deciding what is realistic,
            building it, and making sure it actually works for the person on the other side of the screen.
          </p>
        </Reveal>

        {/* Journey */}
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-[1fr_1.15fr]">
          <ol className="relative">
            <span className="absolute top-6 bottom-6 left-[27px] w-px bg-line" aria-hidden />
            {journey.map((j, i) => {
              const Icon = icons[i];
              const on = active === i;
              return (
                <li key={j.step}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className="group relative flex w-full items-center gap-5 rounded-2xl px-2 py-3 text-left"
                  >
                    <span
                      className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        on
                          ? "scale-110 border-accent bg-accent text-accent-ink"
                          : "border-line bg-bg text-muted group-hover:text-ink"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="flex flex-1 items-baseline gap-3">
                      <span className="font-mono text-xs text-accent">0{i + 1}</span>
                      <span
                        className={`text-2xl font-medium tracking-tight transition-colors md:text-3xl ${
                          on ? "text-ink" : "text-muted group-hover:text-ink"
                        }`}
                      >
                        {j.step}
                      </span>
                    </span>
                  </button>
                  <p
                    className={`ml-[4.25rem] overflow-hidden text-[15px] leading-relaxed text-muted transition-all duration-300 md:hidden ${
                      on ? "max-h-40 pb-3 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <span className="block font-medium text-ink">{j.title}</span>
                    {j.text}
                  </p>
                </li>
              );
            })}
          </ol>

          <div className="relative hidden min-h-[18rem] overflow-hidden rounded-3xl border border-line bg-surface p-8 md:block md:p-10">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col"
            >
              <span className="font-serif text-[5rem] md:text-[7rem] leading-none text-accent/15 italic select-none">
                0{active + 1}
              </span>
              <h3 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">{journey[active].title}</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{journey[active].text}</p>
              <div className="mt-auto flex gap-1.5 pt-8">
                {journey.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i <= active ? "w-10 bg-accent" : "w-4 bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Toward project management */}
        <Reveal className="mt-4">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface-2 to-surface p-6 sm:p-8 md:p-12">
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <Compass size={14} /> Where I&apos;m heading
                </span>
                <h3 className="mt-5 text-3xl leading-tight font-medium tracking-tight md:text-4xl">
                  From building the project to{" "}
                  <span className="font-serif font-normal italic">leading it.</span>
                </h3>
                <p className="mt-5 leading-relaxed text-muted">
                  The moments I enjoy most are the ones where decisions are made: understanding the need,
                  choosing what to build, keeping the team aligned. That&apos;s where I feel I have the
                  most impact. I chose a Master&apos;s in Governance &amp; Digital Transformation to grow
                  in that direction, toward project management.
                </p>
              </div>
              <ul className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-1">
                {[
                  ["Project management", "Planning, priorities, follow-up"],
                  ["IT governance", "Aligning tech with goals"],
                  ["Digital transformation", "Changing how teams work"],
                  ["Developer background", "Speaking the team's language"],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    className="flex flex-col gap-1 rounded-2xl border border-line bg-bg/60 px-5 py-4 backdrop-blur lg:flex-row lg:items-center lg:justify-between lg:gap-4"
                  >
                    <span className="font-medium">{k}</span>
                    <span className="text-muted lg:text-right">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
