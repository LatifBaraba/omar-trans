import Image from "next/image";
import { site } from "@/lib/site";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      {/* decorative background */}
      <div className="anim-spin-slow pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full border-[3px] border-dashed border-gold/30" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold/10 blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 pb-14 md:grid-cols-2 md:py-24">
        <div className="text-center md:text-left">
          <p className="anim-fade-up mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs" style={delay(1500)}>
            {site.tagline}
          </p>
          <h1 className="anim-fade-up font-serif text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl" style={delay(1650)}>
            Your private ride, <span className="text-gold">on your own time.</span>
          </h1>
          <p className="anim-fade-up mx-auto mt-4 max-w-lg text-base text-ink/75 sm:text-lg md:mx-0" style={delay(1800)}>
            Rent a vehicle with driver by the day, by the month, or for any number of days. No fixed hours to leave,
            no deadline to arrive. The trip follows you.
          </p>
          <div className="anim-fade-up mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start" style={delay(1950)}>
            <a href="#book" className="rounded-full bg-gold px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-gold/30 transition hover:bg-gold-dark active:scale-95">
              Get a Free Quote
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-ink px-7 py-3.5 text-center font-semibold transition hover:bg-ink hover:text-white active:scale-95">
              Chat on WhatsApp
            </a>
          </div>
          <ul className="anim-fade-up mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs font-medium text-ink/70 md:justify-start" style={delay(2100)}>
            <li><span className="font-bold text-pop-dark">✓</span> Private vehicle</li>
            <li><span className="font-bold text-pop-dark">✓</span> Driver included</li>
            <li><span className="font-bold text-pop-dark">✓</span> No fixed schedule</li>
          </ul>
        </div>

        <div className="anim-drive-in order-first flex justify-center md:order-none" style={delay(1400)}>
          <div className="anim-float">
            <Image
              src="/logo.webp"
              alt="Omar Trans Tour & Travel"
              width={480}
              height={480}
              className="w-44 rounded-3xl bg-white p-3 shadow-xl sm:w-60 md:w-96 md:p-4"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
