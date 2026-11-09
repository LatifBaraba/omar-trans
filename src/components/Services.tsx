import Section from "./Section";
import Reveal from "./Reveal";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <Section id="services" eyebrow="What we offer" title="Rent for as long as you need">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 120}>
          <article className="h-full rounded-2xl border border-black/10 p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="font-serif text-xl font-bold">{s.title}</h3>
            <p className="mt-3 text-ink/70">{s.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
