import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewsPlaceholder } from "@/components/reviews/ReviewsPlaceholder";

export function TestimonialsPreview() {
  return (
    <section className="bg-cream-100 py-24 sm:py-32">
      <Container>
        <ReviewsPlaceholder />
        <div className="mt-12 flex justify-center">
          <Button href="/reviews" variant="outline">
            Visit Our Reviews Page <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
