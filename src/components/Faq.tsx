import Section from "./Section";
import Reveal from "./Reveal";
import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <Section id="faq" eyebrow="Good to know" title="Frequently asked questions" tint>
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <details className="group rounded-xl bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="text-xl text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/70">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
