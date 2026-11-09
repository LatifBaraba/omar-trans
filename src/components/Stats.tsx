import Reveal from "./Reveal";
import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pop to-transparent" />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-4 py-10 md:grid-cols-4 md:py-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="text-center">
            <p className="font-serif lining-nums text-3xl leading-tight font-extrabold text-pop drop-shadow-[0_0_14px_rgba(46,230,197,0.45)] sm:text-4xl md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.15em] text-white/80 uppercase sm:text-xs">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
