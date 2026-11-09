import Section from "./Section";
import Reveal from "./Reveal";
import { steps } from "@/lib/site";

export default function HowItWorks() {
  return (
    <Section id="how" eyebrow="Simple process" title="Three steps to your trip" tint>
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 120} className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink font-serif text-xl font-bold text-pop">
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-ink/70">{s.desc}</p>
            </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
