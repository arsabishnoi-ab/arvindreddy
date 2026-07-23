"use client";

import { useState } from "react";
import { reviewFilters, reviews } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < rating ? "fill-gold" : "fill-cream-2"}`}
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-soft text-sm font-semibold text-gold-dark">
      {initial}
    </div>
  );
}

export default function Reviews() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === "All"
      ? reviews
      : reviews.filter((r) => r.category === activeFilter);

  const displayed = showAll ? filtered : filtered.slice(0, 3);
  const avgRating = 5.0;

  return (
    <section id="reviews" className="bg-cream-2 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <ScrollReveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">Client Reviews</p>
            <h2 className="section-heading mt-4 text-3xl text-darkest sm:text-4xl">
              What Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-[12px] border border-cream-2 bg-white px-5 py-3 shadow-sm">
            <span className="font-display text-4xl font-bold text-darkest">
              {avgRating.toFixed(1)}
            </span>
            <div>
              <StarRating rating={5} />
              <p className="text-xs text-muted">
                Based on {reviews.length} client reviews
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {reviewFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-darkest text-white"
                    : "bg-white text-muted hover:text-body"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((review, i) => (
            <ScrollReveal key={review.name} delay={(i % 3) as 0 | 1 | 2}>
              <article className="flex h-full flex-col rounded-[20px] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start gap-3">
                  <Avatar name={review.name} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-darkest">
                      {review.name}
                    </p>
                    <span className="mt-0.5 inline-block rounded-full bg-gold-soft px-2 py-0.5 text-xs font-medium text-gold-dark">
                      {review.category}
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  &ldquo;{review.text}&rdquo;
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length > 3 && !showAll && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn-dark"
            >
              Show more reviews
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-xs text-muted">
          Sample client testimonials. Replace with verified reviews before
          launch.
        </p>
      </div>
    </section>
  );
}
