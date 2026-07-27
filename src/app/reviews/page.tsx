import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/home/CtaBanner";
import { testimonials } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what families and businesses say about Tawaa Fresh's luxury Pakistani catering — real reviews from weddings, corporate events and private parties.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const average =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const breakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: testimonials.filter((t) => t.rating === star).length,
  }));

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our guests are saying"
        description="Every review shared here comes from a real Tawaa Fresh booking — thank you to every family and team who trusted us with their day."
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <div className="grid gap-10 rounded-3xl bg-cream-100 p-8 sm:p-12 lg:grid-cols-[0.6fr_1fr]">
            <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
              <span className="font-serif text-6xl text-ink-900">{average.toFixed(1)}</span>
              <StarRating rating={average} className="mt-3 scale-125" />
              <p className="mt-3 text-sm text-ink-500">Based on {testimonials.length}+ verified reviews</p>
            </div>
            <div className="flex flex-col gap-2.5 justify-center">
              {breakdown.map(({ star, count }) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="flex w-14 items-center gap-1 text-sm text-ink-600">
                    {star} <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100">
                    <div
                      className="h-full rounded-full bg-gold-400"
                      style={{ width: `${(count / testimonials.length) * 100}%` }}
                    />
                  </div>
                  <span className="w-6 text-right text-sm text-ink-400">{count}</span>
                </div>
              ))}
            </div>
          </div>

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <RevealItem key={t.name}>
                <figure className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8">
                  <Quote className="h-6 w-6 text-gold-300" />
                  <StarRating rating={t.rating} className="mt-4" />
                  <blockquote className="mt-4 flex-1 font-accent text-lg italic leading-relaxed text-ink-700">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ink-100 pt-4">
                    <p className="font-semibold text-ink-900">{t.name}</p>
                    <p className="text-sm text-ink-400">
                      {t.event} · {t.location}
                    </p>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-brand-950 p-10 text-center">
            <h3 className="font-serif text-2xl text-cream-50">Recently celebrated with us?</h3>
            <p className="max-w-md text-sm text-cream-200/70">
              We&apos;d love to hear how your event went — your feedback helps us keep improving every menu.
            </p>
            <Button href="/contact" variant="gold">
              Share Your Experience
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
