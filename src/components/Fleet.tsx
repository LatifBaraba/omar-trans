import Section from "./Section";
import Reveal from "./Reveal";
import { fleet } from "@/lib/site";

export default function Fleet() {
  return (
    <Section id="fleet" eyebrow="Our vehicles" title="Pick the right ride">
      <div className="grid gap-6 md:grid-cols-3">
        {fleet.map((v, i) => (
          <Reveal key={v.name} delay={i * 120}>
          <div className="overflow-hidden rounded-2xl border border-black/10">
            {/* Replace this block with a real vehicle photo in /public */}
            <div className="flex h-40 items-center justify-center bg-ink text-sm uppercase tracking-widest text-gold">
              Photo coming soon
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl font-bold">{v.name}</h3>
              <p className="mt-1 text-sm font-semibold text-gold">{v.seats}</p>
              <p className="mt-2 text-sm text-ink/70">{v.note}</p>
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
