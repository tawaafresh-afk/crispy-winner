import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, ChefHat, MapPinned, UtensilsCrossed } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: "Tawaa Fresh provides authentic Pakistani catering from Walderslade, Medway, Kent.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ChefHat,
    title: "Freshly prepared",
    description: "Our Pakistani dishes are freshly prepared for your event.",
  },
  {
    icon: ShieldCheck,
    title: "5★ food hygiene rating",
    description: "Tawaa Fresh holds the top food hygiene rating.",
  },
  {
    icon: UtensilsCrossed,
    title: "Two catering options",
    description: "Disposable tray catering, or a complete buffet setup with chafing dishes, warming equipment, utensils and food labels.",
  },
  {
    icon: MapPinned,
    title: "Serving Kent",
    description: `Based in ${siteConfig.location.display}, covering ${siteConfig.serviceAreas.join(", ")} and surrounding areas.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Authentic Pakistani catering from Walderslade, Medway"
        description="Tawaa Fresh serves Medway, Maidstone, Gravesend, Dartford and surrounding areas in Kent."
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal as="left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              What we do
            </span>
            <h2 className="mt-4 font-serif text-3xl text-ink-900 sm:text-4xl">
              Authentic Pakistani food, catered your way
            </h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Tawaa Fresh provides authentic Pakistani catering from Walderslade,
                Medway, Kent — serving Medway, Maidstone, Gravesend, Dartford and
                surrounding areas.
              </p>
              <p>
                We offer disposable tray catering for simple, easy serving, or a
                complete buffet setup with chafing dishes, warming equipment,
                serving utensils and food labels.
              </p>
              <p>Tawaa Fresh holds a 5-star food hygiene rating.</p>
            </div>
          </Reveal>
          <Reveal as="right" className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-xl">
            <Image
              src="/images/serving-action.webp"
              alt="Rice being served from a chafing dish at a Tawaa Fresh buffet"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-950 py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What We Offer" title="What to expect from Tawaa Fresh" tone="dark" />
          <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <RevealItem key={value.title}>
                <div className="rounded-3xl border border-cream-100/10 bg-cream-50/5 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-cream-50">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-200/70">{value.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
