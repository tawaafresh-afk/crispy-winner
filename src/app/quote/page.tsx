import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a tailored catering quote from Tawaa Fresh — tell us your event date, guest count and menu preferences and we'll respond within 24 hours.",
  alternates: { canonical: "/quote" },
};

const reassurances = [
  "Response within 24 hours",
  "No obligation, no pressure",
  "Free tasting on Gold & Platinum bookings",
  "Fully halal-certified menus",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your event"
        description="The more detail you share, the more accurate your quote — but don't worry if you don't have everything confirmed yet."
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
          <Reveal as="left" className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10">
            <QuoteForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal as="right" className="rounded-3xl bg-brand-950 p-8 text-cream-50">
              <h3 className="font-serif text-xl">Why enquire with Tawaa Fresh?</h3>
              <ul className="mt-5 space-y-3">
                {reassurances.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-cream-200/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="right" delay={0.1} className="rounded-3xl border border-ink-100 bg-white p-8">
              <h3 className="font-serif text-xl text-ink-900">Prefer to talk it through?</h3>
              <p className="mt-2 text-sm text-ink-600">
                Call or message us directly and we&apos;ll talk through your event on the spot.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-2 text-sm font-semibold text-brand-800"
                >
                  <Phone className="h-4 w-4" /> {siteConfig.phoneDisplay}
                </a>
                <a
                  href={whatsappLink("Hi Tawaa Fresh, I'd like to discuss a quote for my event.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-[#25D366]"
                >
                  <MessageCircle className="h-4 w-4" /> Message on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
