import { experience, skills } from "@/data/content";
import { Reveal, SectionLabel } from "./Reveal";

export function Experience() {
  const marquee = skills.flatMap((s) => s.items);

  return (
    <section id="experience" className="py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="03">Experience</SectionLabel>
          <h2 className="max-w-3xl text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-6xl">
            Agency pace, <span className="font-serif font-normal italic text-accent">product depth.</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4 md:mt-16">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.1}>
              <article className="grid gap-8 rounded-3xl border border-line bg-surface p-7 md:grid-cols-[1fr_2fr] md:p-10">
                <div>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight">{e.company}</h3>
                  <p className="mt-1 text-accent">{e.role}</p>
                  <p className="mt-1 text-sm text-muted">{e.type}</p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3 leading-relaxed text-ink/85">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {e.stack.map((s) => (
                      <li key={s} className="rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* skills marquee */}
      <div className="relative mt-16 overflow-hidden border-y md:mt-24 border-line py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-10">
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i} className="flex items-center gap-10 font-serif text-3xl whitespace-nowrap text-ink/70 italic">
              {s}
              <span className="text-accent not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl md:mt-24 px-5 md:px-8">
        <Reveal>
          <SectionLabel index="04">Skills</SectionLabel>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 0.08} className="bg-bg">
              <div className="h-full p-7">
                <h3 className="font-medium">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
