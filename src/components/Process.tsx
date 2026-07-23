import { processSteps } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Process() {
  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="section-heading mt-4 text-3xl text-darkest sm:text-4xl">
            Schedule a Free Consultation
          </h2>
          <p className="section-lead mx-auto mt-5 max-w-2xl text-center text-muted">
            A simple, transparent process built around listening to your concerns
            and ensuring a clear understanding of your situation.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.step} delay={(i + 1) as 1 | 2 | 3}>
              <article className="relative rounded-[20px] bg-cream p-8">
                <span className="font-display text-5xl font-bold text-gold/30">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-darkest">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
                {i < processSteps.length - 1 && (
                  <span
                    className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-gold/40 md:block"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
