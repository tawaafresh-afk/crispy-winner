import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cateringOptions } from "@/lib/site-config";
import { iconMap } from "@/lib/icon-map";

export function ServicesPreview() {
  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Catering Options"
          title="Choose the catering option that suits your event"
          description="Freshly prepared Pakistani food, served the way that works for you."
        />

        <RevealGroup className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
          {cateringOptions.map((option) => {
            const Icon = iconMap[option.icon];
            return (
              <RevealItem key={option.slug}>
                <Link
                  href="/catering"
                  className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-800/5 text-brand-800 transition-colors group-hover:bg-gold-400 group-hover:text-brand-950">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-ink-900">{option.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{option.summary}</p>
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
