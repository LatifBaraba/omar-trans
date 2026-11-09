import Section from "./Section";
import Reveal from "./Reveal";
import { comparison } from "@/lib/site";

export default function Comparison() {
  return (
    <Section id="compare" eyebrow="The difference" title="Private rental vs. shared tour">
      <Reveal>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-black/10">
          <div className="grid grid-cols-[1fr_5rem_5rem] bg-ink px-4 py-3 text-xs font-semibold text-white uppercase sm:grid-cols-[1fr_8rem_8rem]">
            <span />
            <span className="text-center text-pop">Omar Trans</span>
            <span className="text-center text-white/60">Shared</span>
          </div>
          {comparison.map((r) => (
            <div key={r.feature} className="grid grid-cols-[1fr_5rem_5rem] items-center border-t border-black/10 px-4 py-3 text-sm sm:grid-cols-[1fr_8rem_8rem]">
              <span>{r.feature}</span>
              <span className="text-center text-xl font-extrabold text-pop-dark">{r.us ? "✓" : "✕"}</span>
              <span className={`text-center text-lg ${r.other ? "font-bold text-ink/60" : "text-ink/30"}`}>{r.other ? "✓" : "✕"}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
