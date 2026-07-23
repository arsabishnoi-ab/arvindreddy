import Image from "next/image";
import Link from "next/link";
import {
  about,
  aboutGallery,
  courts,
  firm,
  languages,
  qualifications,
} from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <ScrollReveal>
          <p className="section-eyebrow">About the Advocate</p>
        </ScrollReveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <ScrollReveal delay={1}>
              <span className="inline-block rounded-full bg-gold-soft px-4 py-2 text-xs font-semibold tracking-wide text-gold-dark">
                {firm.qualificationsBadge}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2 className="section-heading mt-6 text-3xl text-darkest sm:text-4xl">
                {about.statement}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="body-text mt-6">
                {about.body}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <ul className="mt-8 space-y-4">
                {about.credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary">
                  Discuss Your Case
                </Link>
                <Link
                  href="#services"
                  className="btn-dark !bg-transparent !text-body ring-1 ring-cream-2 hover:!bg-cream"
                >
                  View Practice Areas
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutGallery.map((photo, i) => (
                <ScrollReveal key={photo.src} delay={(i + 1) as 1 | 2}>
                  <figure className="group relative aspect-[4/5] overflow-hidden rounded-[20px]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: photo.objectPosition }}
                      sizes="280px"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkest/80 to-transparent p-4 text-xs font-medium text-white">
                      {photo.caption}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={2}>
              <div className="grid gap-4 rounded-[20px] bg-cream p-6 sm:grid-cols-2">
                <div>
                  <p className="label-caps">
                    Qualifications
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {qualifications.map((q) => (
                      <li key={q} className="text-sm text-body">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label-caps">
                    Languages
                  </p>
                  <p className="mt-3 text-sm text-body">
                    {languages.join(" · ")}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="rounded-[20px] border border-cream-2 p-6">
                <p className="label-caps">
                  Courts & Forums
                </p>
                <ul className="mt-4 space-y-2">
                  {courts.map((court) => (
                    <li
                      key={court}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {court}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
