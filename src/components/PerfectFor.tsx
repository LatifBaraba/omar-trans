import Section from "./Section";
import Reveal from "./Reveal";
import { perfectFor } from "@/lib/site";

export default function PerfectFor() {
  return (
    <Section id="perfect-for" eyebrow="Made for every trip" title="Perfect for" tint>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {perfectFor.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100}>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-serif text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
