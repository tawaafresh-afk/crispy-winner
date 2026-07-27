import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services } from "@/lib/site-config";
import { iconMap } from "@/lib/icon-map";

export function ServicesPreview() {
  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Cater"
          title="Every celebration, catered with the same devotion"
          description="From 40-guest aqeeqahs to 800-guest walimas, our kitchen scales without ever compromising on flavour."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealItem key={service.slug}>
                <Link
                  href="/catering"
                  className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-800/5 text-brand-800 transition-colors group-hover:bg-gold-400 group-hover:text-brand-950">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-ink-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{service.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
