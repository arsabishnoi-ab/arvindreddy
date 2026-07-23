import Image from "next/image";
import { contact, officeGallery } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function OfficeGallery() {
  return (
    <section id="chambers" className="bg-darkest py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <ScrollReveal className="max-w-2xl">
          <p className="section-eyebrow text-gold-light">Our Chambers</p>
          <h2 className="section-heading mt-4 text-3xl text-white sm:text-4xl">
            A professional environment built for counsel, clarity, and client
            comfort
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Visit us at {contact.address.full}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {officeGallery.map((item, i) => (
            <ScrollReveal key={item.title} delay={(i % 2) as 0 | 1}>
              <figure className="group relative aspect-[16/10] overflow-hidden rounded-[20px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.objectPosition }}
                  sizes="560px"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkest/90 to-transparent p-5">
                  <p className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
