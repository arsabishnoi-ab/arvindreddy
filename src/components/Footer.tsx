import Link from "next/link";
import { contact, firm, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-darkest pb-24 text-white/65 lg:pb-16">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              {firm.name}
            </p>
            <p className="mt-1 text-sm text-gold-light">{firm.title}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              B.E. · LL.B. · {firm.yearsExperience} years&apos; experience
              serving Bengaluru.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks
                .filter((l) => l.href !== "#home")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={contact.phoneHref} className="hover:text-gold-light">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="hover:text-gold-light">
                  {contact.email}
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-8">
          <p className="text-center text-xs leading-relaxed text-white/45">
            As per the rules of the Bar Council of India, advocates are not
            permitted to solicit work or advertise. This website is for
            informational purposes only and does not constitute legal advice or
            create an advocate-client relationship.
          </p>
          <p className="mt-4 text-center text-xs text-white/35">
            © {year} {firm.name}. All rights reserved. · Enrolment{" "}
            {firm.enrolment}
          </p>
        </div>
      </div>
    </footer>
  );
}
