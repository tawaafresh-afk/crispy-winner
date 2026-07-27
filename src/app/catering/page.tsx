import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CateringOptionCards } from "@/components/catering/CateringOptionCards";
import { CtaBanner } from "@/components/home/CtaBanner";
import { bookingProcess, faqs, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Authentic Pakistani catering across Medway, Maidstone, Gravesend, Dartford and surrounding areas — disposable tray catering or a complete buffet setup.",
  alternates: { canonical: "/catering" },
};

export default function CateringPage() {
  return (
    <>
      <PageHero
        eyebrow="Catering"
        title="Authentic Pakistani catering for your event"
        description={`Serving ${siteConfig.serviceAreas.join(", ")} and surrounding areas.`}
        image={{
          src: "/images/catering-banner.webp",
          alt: "Tawaa Fresh buffet setup with chafing dishes of rice, butter chicken and mutton karahi",
        }}
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Catering Options"
            title="Choose tray catering or a complete buffet setup"
          />
          <div className="mt-16">
            <CateringOptionCards />
          </div>
          <p className="mt-8 text-center text-sm text-ink-400">
            Get in touch for a quote based on your guest numbers and chosen dishes.
          </p>
        </Container>
      </section>

      <section className="bg-cream-100 py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Booking with Tawaa Fresh" />
          <RevealGroup className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bookingProcess.map((step) => (
              <RevealItem key={step.step}>
                <span className="font-serif text-5xl text-gold-300">{step.step}</span>
                <h3 className="mt-3 font-serif text-lg text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Good to Know" title="Frequently asked questions" />
          <div className="mt-14">
            <FaqAccordion items={faqs} />
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="outline">
              Still have questions? Contact us <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
