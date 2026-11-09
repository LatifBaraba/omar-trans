import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="bg-gold">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center text-white md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Ready to go beyond the road?</h2>
          <p className="mt-1 text-white/90">Tell us your dates and we&apos;ll send a quote on WhatsApp.</p>
        </div>
        <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-8 py-3.5 font-semibold text-pop transition hover:bg-white hover:text-ink active:scale-95">
          Chat Now
        </a>
      </Reveal>
    </section>
  );
}
