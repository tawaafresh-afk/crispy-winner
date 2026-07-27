import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewsPlaceholder } from "@/components/reviews/ReviewsPlaceholder";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer reviews for Tawaa Fresh's authentic Pakistani catering.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="Customer reviews" />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <ReviewsPlaceholder />

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-brand-950 p-10 text-center">
            <h3 className="font-serif text-2xl text-cream-50">Recently used our catering?</h3>
            <p className="max-w-md text-sm text-cream-200/70">
              We&apos;d love to hear how it went — get in touch and let us know.
            </p>
            <Button href="/contact" variant="gold">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
