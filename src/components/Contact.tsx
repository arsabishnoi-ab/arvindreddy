"use client";

import { useState } from "react";
import { contact, firm, matterTypes } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [matter, setMatter] = useState(matterTypes[0]);
  const [description, setDescription] = useState("");

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const emailBody = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nType of Matter: ${matter}\n\n${description}`,
  );
  const emailHref = `${contact.emailHref}?subject=${encodeURIComponent("Legal Consultation Enquiry")}&body=${emailBody}`;

  const whatsappText = encodeURIComponent(
    `Hello Adv. Arvind, I would like to discuss a legal matter.\n\nName: ${name}\nPhone: ${phone}\nType: ${matter}\n\n${description}`,
  );
  const whatsappHref = `${contact.whatsappHref}?text=${whatsappText}`;

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-heading mt-4 text-3xl text-darkest sm:text-4xl">
            Book Your Free Consultation
          </h2>
          <p className="section-lead mx-auto mt-5 max-w-2xl text-center text-muted">
            Tell me about your matter and I&apos;ll get back to you promptly. For
            urgent matters, call or WhatsApp directly.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ScrollReveal delay={1}>
            <div className="space-y-8">
              <div>
                  <p className="label-caps">
                    Chambers Address
                  </p>
                <address className="mt-3 not-italic text-body">
                  <strong>{firm.fullName}</strong>
                  <br />
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  <span className="text-muted">({contact.address.landmark})</span>
                </address>
              </div>

              <div>
                <p className="label-caps">
                  Phone
                </p>
                <a
                  href={contact.phoneHref}
                  className="mt-3 block text-lg font-medium text-darkest transition-colors hover:text-gold-dark"
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="label-caps">
                  Email
                </p>
                <a
                  href={contact.emailHref}
                  className="mt-3 block text-lg font-medium text-darkest transition-colors hover:text-gold-dark"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="label-caps">
                  Office Hours
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted">
                  <li>{contact.hours.weekday}</li>
                  <li>{contact.hours.saturday}</li>
                  <li>{contact.hours.sunday}</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <form
              className="rounded-[20px] border border-cream-2 bg-cream p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="label-caps">
                    Full Name
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-[12px] border border-cream-2 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="Your full name"
                  />
                </label>
                <label className="block">
                  <span className="label-caps">
                    Phone
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-[12px] border border-cream-2 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="+91"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="label-caps">
                  Type of Matter
                </span>
                <select
                  value={matter}
                  onChange={(e) => setMatter(e.target.value)}
                  className="mt-2 w-full rounded-[12px] border border-cream-2 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                >
                  {matterTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-4 block">
                <span className="label-caps">
                  Briefly describe your matter
                </span>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 w-full resize-none rounded-[12px] border border-cream-2 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                  placeholder="Share a brief overview of your legal matter..."
                />
              </label>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={emailHref} className="btn-primary flex-1 text-center sm:flex-none">
                  Send via Email
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:flex-none"
                >
                  Send via WhatsApp
                </a>
              </div>
            </form>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2} className="mt-12 overflow-hidden rounded-[20px] border border-cream-2">
          <iframe
            title="Arvind B Reddy Law Chambers location"
            src={mapSrc}
            className="h-[400px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
