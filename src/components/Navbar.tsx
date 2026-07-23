"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { firm, navLinks } from "@/lib/data";

function ScalesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v14M6 20h12" />
      <path d="M5 10h4l-2 6M15 10h4l-2 6" />
      <path d="M5 10 3 8M19 10l2-2" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1200px] items-center justify-between px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass-nav px-5 py-2.5 sm:px-6" : ""
        }`}
      >
        <Link
          href="#home"
          className="group flex items-center gap-2.5 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
            <ScalesIcon className="h-4 w-4" />
          </span>
          <span className="hidden max-w-[11rem] font-display text-[0.8125rem] font-semibold leading-tight tracking-wide sm:block lg:max-w-none lg:text-[0.9375rem]">
            {firm.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-gold-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <Link href="#contact" className="btn-primary !py-2.5 !text-sm">
            Free Consultation
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-0.5 w-6 rounded bg-white transition-all ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-white transition-all ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-darkest/98 backdrop-blur-xl transition-all duration-300 xl:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pt-24">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block border-b border-white/8 py-4 font-display text-2xl font-medium text-white/90"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link
              href="#contact"
              className="btn-primary w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
