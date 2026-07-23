import Link from "next/link";
import { contact, firm, heroImage, stats } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import { StatCounter } from "./StatCounter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-darkest"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-darkest via-primary to-darkest" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(190,148,86,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-4 pb-28 pt-28 sm:px-6 lg:pb-20 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ScrollReveal>
              <p className="section-eyebrow text-gold-light">{firm.eyebrow}</p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h1 className="section-heading mt-5 text-[2.625rem] text-white sm:text-5xl lg:text-[3.5rem]">
                {firm.tagline}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="section-lead mt-6 max-w-xl text-white/70">
                {firm.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="#contact" className="btn-primary">
                  Book a Consultation
                </Link>
                <a href={contact.phoneHref} className="btn-outline">
                  Call {contact.phone}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
                {stats.map((stat) => (
                  <StatCounter
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="flex justify-center lg:justify-end">
            <figure className="w-full max-w-[420px] shrink-0 overflow-hidden rounded-[28px] border border-gold/25 shadow-2xl shadow-black/50">
              <img
                src={heroImage.src}
                srcSet={heroImage.srcSet}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                decoding="async"
                fetchPriority="high"
                className="block w-full rounded-t-[27px]"
              />
              <figcaption className="rounded-b-[27px] border-t border-gold/15 bg-darkest px-5 py-4 text-left">
                <p className="font-display text-xl font-semibold text-white">
                  {firm.name}
                </p>
                <p className="mt-1 text-sm font-normal tracking-wide text-gold-light">
                  {firm.advocateName} · {firm.title}
                </p>
                <p className="mt-0.5 text-xs text-white/50">
                  Bar Council of {firm.barCouncil}
                </p>
                <p className="mt-1.5 text-xs text-white/40">
                  Enrolment {firm.enrolment} · Practising since {firm.since}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
