import Image from "next/image";
import Link from "next/link";
import { practiceAreas } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Practice Areas</p>
          <h2 className="section-heading mt-4 text-3xl text-darkest sm:text-4xl">
            Legal Services You Can Trust
          </h2>
          <p className="section-lead mx-auto mt-5 max-w-2xl text-center text-muted">
            Focused expertise across the matters that affect families,
            individuals and businesses in Bengaluru — handled with clarity and
            transparency.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, i) => (
            <ScrollReveal key={area.id} delay={(i % 3) as 0 | 1 | 2}>
              <article className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-[20px]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: area.objectPosition }}
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkest via-darkest/60 to-darkest/20" />
                <div className="relative p-6">
                  <span className="text-2xl" aria-hidden>
                    {area.emoji}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {area.description}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-light transition-colors hover:text-gold"
                  >
                    Enquire
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={2}>
            <article className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-gold/40 bg-gold-soft/50 p-8 text-center">
              <p className="font-display text-xl font-semibold text-darkest">
                Not sure where your matter fits?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Get a clear, no-obligation assessment of your legal options.
              </p>
              <Link href="#contact" className="btn-primary mt-6">
                Ask Adv. Arvind
              </Link>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="#contact" className="btn-primary">
            Get a Free Quote
          </Link>
          <Link href="#contact" className="btn-dark">
            Start Your Case
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
