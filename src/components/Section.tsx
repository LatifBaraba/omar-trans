import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  tint,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section id={id} className={tint ? "bg-cream" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
          <h2 className="mt-2 mb-8 font-serif text-3xl font-bold md:mb-10 md:text-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
