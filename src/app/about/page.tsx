import type { Metadata } from "next";
import { ShieldCheck, Award, Leaf, Heart } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PatternTile } from "@/components/ui/PatternTile";
import { CtaBanner } from "@/components/home/CtaBanner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2011, Tawaa Fresh has grown from a family kitchen into one of the UK's leading luxury Pakistani catering companies.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Heart,
    title: "Hospitality first",
    description: "We cater the way we'd want to be hosted — generously, warmly, without compromise.",
  },
  {
    icon: Leaf,
    title: "Fresh, always",
    description: "Nothing is pre-cooked and reheated. Our kitchen and live stations cook to order.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & certification",
    description: "Halal-certified suppliers, 5-star food hygiene rating, fully insured event staff.",
  },
  {
    icon: Award,
    title: "Never stop refining",
    description: "Every recipe is tasted, tested and refined by our head chef before it reaches your menu.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="From a family kitchen to the UK's weddings and boardrooms"
        description={`Since ${siteConfig.founded}, Tawaa Fresh has been bringing the warmth of a Pakistani home kitchen to events of every size.`}
      />

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal as="left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              How it started
            </span>
            <h2 className="mt-4 font-serif text-3xl text-ink-900 sm:text-4xl">
              A recipe book, a single tawaa, and a wedding for 60 guests
            </h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Tawaa Fresh began in {siteConfig.founded} when our founder started cooking for
                friends&apos; weddings out of a home kitchen in Birmingham — using recipes passed down
                from three generations of home cooks. Word spread quickly: guests kept asking who
                had catered the nihari.
              </p>
              <p>
                Today we run a full commercial kitchen and a team of dedicated chefs and event
                staff, but the standard hasn&apos;t changed — every curry is still tasted by hand,
                every naan still rolled fresh, and every event still treated like it&apos;s the only
                one we&apos;re catering that week.
              </p>
              <p>
                We&apos;ve since catered over 2,400 events across the UK, from 40-guest aqeeqahs to
                800-guest walima receptions, while keeping the same family recipes at the heart of
                every menu.
              </p>
            </div>
          </Reveal>
          <Reveal as="right" className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-xl">
            <PatternTile tone="maroon" patternId="about-1" label="Our Founding Kitchen Team" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-950 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="The values behind every plate we serve"
            tone="dark"
          />
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

      <section className="bg-cream-50 py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <Reveal key={stat.label} as="scale" className="rounded-3xl bg-cream-100 p-8 text-center">
                <p className="font-serif text-4xl text-brand-800">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-ink-500">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
