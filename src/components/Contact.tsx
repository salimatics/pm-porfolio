"use client";

import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/content";
import { GithubIcon } from "./Icons";
import { Reveal, SectionLabel } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — mailto link still works */
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28 lg:py-40">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="06">Contact</SectionLabel>
          <h2 className="text-[clamp(2.6rem,8vw,7rem)] leading-[0.95] font-medium tracking-[-0.04em]">
            Got a product that needs
            <br />
            <span className="font-serif font-normal italic text-accent">code with context?</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted">
            I&apos;m open to developer roles where I can follow the whole project, and to junior
            project / product roles where my technical background makes a difference.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex max-w-full items-center gap-3 rounded-full bg-accent px-5 py-4 text-base font-medium break-all sm:px-7 sm:text-lg text-accent-ink transition-transform hover:scale-[1.03]"
          >
            <Mail size={20} className="shrink-0" />
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copy}
            aria-label="Copy email address"
            className="grid h-14 w-14 place-items-center rounded-full border border-line transition-colors hover:bg-white/5"
          >
            {copied ? <Check size={18} className="text-accent" /> : <Copy size={18} />}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-4 font-medium transition-colors hover:bg-white/5"
          >
            <GithubIcon className="h-5 w-5" />
            {profile.githubHandle}
            <ArrowUpRight size={16} className="text-muted" />
          </a>
        </Reveal>
      </div>

      <footer className="relative mx-auto mt-20 flex md:mt-32 max-w-6xl flex-col justify-between gap-3 border-t border-line px-5 pt-8 text-sm text-muted sm:flex-row md:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Designed &amp; built with Next.js, Tailwind CSS and Framer Motion.</span>
      </footer>
    </section>
  );
}
