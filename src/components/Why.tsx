import Section from "./Section";
import Reveal from "./Reveal";
import { features } from "@/lib/site";

export default function Why() {
  return (
    <Section id="why" eyebrow="Why Omar Trans" title="Private travel, without the clock" tint>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 100}>
          <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
            <span className="font-serif lining-nums text-3xl font-bold text-gold">0{i + 1}</span>
            <h3 className="mt-2 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{f.desc}</p>
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
