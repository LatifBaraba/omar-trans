import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#fleet", label: "Fleet" },
  { href: "#how", label: "How It Works" },
  { href: "#book", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <a href="#top" className="flex items-center gap-2">
          <Image src="/logo.webp" alt={`${site.name} logo`} width={48} height={48} className="h-12 w-12 object-contain" priority />
          <span className="font-serif text-lg font-bold leading-none">{site.name}</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-gold"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
