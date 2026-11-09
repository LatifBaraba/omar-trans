"use client";

import { useState } from "react";
import Section from "./Section";
import { site } from "@/lib/site";

const field =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

export default function BookingForm() {
  const [rental, setRental] = useState("Daily");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [
      `Hello ${site.name}, I would like to book a private rental.`,
      `Name: ${d.get("name")}`,
      `Rental type: ${d.get("type")}`,
      d.get("type") === "Custom" ? `Number of days: ${d.get("days")}` : null,
      `Start date: ${d.get("date")}`,
      `Pickup location: ${d.get("pickup")}`,
      `Passengers: ${d.get("pax")}`,
      d.get("notes") ? `Notes: ${d.get("notes")}` : null,
    ].filter(Boolean);
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  }

  return (
    <Section id="book" eyebrow="Book now" title="Request your quote">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-ink/75">
            Fill in the form and it opens WhatsApp with your details ready to send. We usually reply within minutes.
          </p>
          <dl className="mt-6 space-y-3 text-sm">
            <div><dt className="font-semibold text-gold">WhatsApp / Phone</dt><dd>{site.phoneDisplay}</dd></div>
            <div><dt className="font-semibold text-gold">Email</dt><dd>{site.email}</dd></div>
            <div><dt className="font-semibold text-gold">Location</dt><dd>{site.address}</dd></div>
          </dl>
        </div>
        <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2 md:col-span-3">
          <input name="name" required placeholder="Your name" className={field} />
          <select name="type" value={rental} onChange={(e) => setRental(e.target.value)} className={field}>
            <option>Daily</option>
            <option>Monthly</option>
            <option>Custom</option>
          </select>
          {rental === "Custom" && (
            <input name="days" type="number" min={1} required placeholder="Number of days" className={`${field} sm:col-span-2`} />
          )}
          <input name="date" type="date" required className={field} />
          <input name="pax" type="number" min={1} required placeholder="Passengers" className={field} />
          <input name="pickup" required placeholder="Pickup location" className={`${field} sm:col-span-2`} />
          <textarea name="notes" rows={3} placeholder="Destinations or special requests (optional)" className={`${field} sm:col-span-2`} />
          <button className="rounded-full bg-gold px-7 py-3 font-semibold text-white transition hover:bg-gold-dark sm:col-span-2">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </Section>
  );
}
