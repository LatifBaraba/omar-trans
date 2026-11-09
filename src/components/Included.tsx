import Section from "./Section";
import Reveal from "./Reveal";
import { included } from "@/lib/site";

export default function Included() {
  return (
    <Section id="included" eyebrow="Everything you need" title="What's included in every rental">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {included.map((item, i) => (
          <Reveal key={item} delay={(i % 4) * 80}>
            <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pop text-sm font-bold text-ink">✓</span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
