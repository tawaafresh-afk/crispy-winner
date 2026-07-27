import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink, defaultWhatsappMessage } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold-300 via-gold-400 to-gold-500 py-20 sm:py-24">
      <div className="absolute inset-0 bg-noise opacity-20" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-brand-950 sm:text-4xl">
            Ready to plan a celebration your guests will still talk about next year?
          </h2>
          <p className="mt-4 text-brand-900/80">
            Tell us your date and guest count — we&apos;ll come back to you with a tailored quote within 24 hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/quote" variant="primary" size="lg">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={whatsappLink(defaultWhatsappMessage)}
              variant="outline"
              size="lg"
              className="border-brand-950/30 text-brand-950 hover:bg-brand-950 hover:text-cream-50"
            >
              <MessageCircle className="h-4 w-4" /> Message Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
