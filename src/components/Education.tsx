import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";
import { Reveal, SectionLabel } from "./Reveal";

const qualities = [
  "Rigor & logical thinking",
  "Curiosity",
  "Autonomy & ownership",
  "Explaining tech to non-tech teams",
  "Team spirit",
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="05">Education</SectionLabel>
          <h2 className="max-w-3xl text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-6xl">
            Learning the <span className="font-serif font-normal italic text-accent">bigger picture.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <article
                className={`h-full rounded-3xl border p-7 md:p-9 ${
                  i === 0 ? "border-accent/30 bg-accent/[0.06]" : "border-line bg-surface"
                }`}
              >
                <div className="flex items-center justify-between">
                  <GraduationCap size={22} className={i === 0 ? "text-accent" : "text-muted"} />
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
                <h3 className="mt-6 text-xl leading-snug font-medium tracking-tight">{e.title}</h3>
                <p className="mt-1 text-sm text-muted">{e.school}</p>
                <p className="mt-5 leading-relaxed text-ink/80">{e.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink">Qualities</span>
            {qualities.map((q) => (
              <span key={q}>{q}</span>
            ))}
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink md:ml-auto">Languages</span>
            <span>French — fluent</span>
            <span>English — professional</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
