import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";
import { siteConfig, whatsappLink, defaultWhatsappMessage } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tawaa Fresh — call, WhatsApp or send an enquiry about catering for your wedding, corporate event or private celebration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start planning your event"
        description="Reach us however suits you best — we typically reply within a few hours during business hours."
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <ContactCard
                icon={Phone}
                title="Call us"
                lines={[siteConfig.phoneDisplay]}
                href={`tel:${siteConfig.phoneHref}`}
              />
              <ContactCard
                icon={MessageCircle}
                title="WhatsApp"
                lines={["Fastest way to reach us"]}
                href={whatsappLink(defaultWhatsappMessage)}
              />
              <ContactCard icon={Mail} title="Email" lines={[siteConfig.email]} href={`mailto:${siteConfig.email}`} />
              <ContactCard
                icon={MapPin}
                title="Visit our kitchen"
                lines={[
                  `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
                  `${siteConfig.address.city}, ${siteConfig.address.postcode}`,
                ]}
              />
              <ContactCard
                icon={Clock}
                title="Opening hours"
                lines={siteConfig.hours.map((h) => `${h.day}: ${h.time}`)}
              />
            </div>

            <Reveal as="right" className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10">
              <h2 className="font-serif text-2xl text-ink-900">Send us an enquiry</h2>
              <p className="mt-2 text-sm text-ink-600">
                Prefer a detailed quote instead? Use our{" "}
                <a href="/quote" className="font-semibold text-brand-800 underline">
                  quote request form
                </a>
                .
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Find Us" title="Visit our kitchen in Birmingham" />
          <div className="mt-12">
            <MapPlaceholder />
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-gold-300">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800/5 text-brand-800">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-semibold text-ink-900">{title}</p>
        {lines.map((line) => (
          <p key={line} className="text-sm text-ink-600">
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
