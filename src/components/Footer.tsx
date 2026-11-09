import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm md:flex-row">
        <p className="font-serif text-lg font-bold">
          {site.name} <span className="font-sans text-sm font-normal text-white/60">{site.subtitle}</span>
        </p>
        <p className="tracking-widest text-gold uppercase">{site.tagline}</p>
        <p className="text-white/60">&copy; {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
