import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Packages } from "@/components/catering/Packages";
import { CtaBanner } from "@/components/home/CtaBanner";
import { services, bookingProcess, faqs } from "@/lib/site-config";
import { iconMap } from "@/lib/icon-map";

export const metadata: Metadata = {
  title: "Catering Services",
  description:
    "Luxury Pakistani catering for weddings, walimas, mehndis, corporate events and private parties — live tawaa stations, bespoke menus and full event staffing.",
  alternates: { canonical: "/catering" },
};

export default function CateringPage() {
  return (
    <>
      <PageHero
        eyebrow="Catering Services"
        title="Bespoke catering for every kind of celebration"
        description="Whether you're hosting 40 guests or 800, we build a menu and service style around your event — not the other way around."
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <RevealItem key={service.slug}>
                  <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-800/5 text-brand-800">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-serif text-xl text-ink-900">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{service.summary}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-cream-100 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Packages & Pricing"
            title="Transparent packages, tailored on request"
            description="Every package can be customised — think of these as a starting point for your tasting conversation."
          />
          <div className="mt-16">
            <Packages />
          </div>
          <p className="mt-8 text-center text-sm text-ink-400">
            Prices exclude travel outside a 30-mile radius of Birmingham and premium equipment hire. Final pricing confirmed after your tasting.
          </p>
        </Container>
      </section>

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Booking with Tawaa Fresh, step by step"
          />
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

      <section className="bg-cream-100 py-24 sm:py-28">
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
