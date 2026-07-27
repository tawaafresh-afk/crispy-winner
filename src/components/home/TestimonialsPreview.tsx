import { ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site-config";

export function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-cream-100 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by families across the country"
          description="Real feedback from the weddings, launches and celebrations we've had the honour of catering."
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {featured.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink-100">
                <Quote className="h-7 w-7 text-gold-300" />
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

        <div className="mt-12 flex justify-center">
          <Button href="/reviews" variant="outline">
            Read All Reviews <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
