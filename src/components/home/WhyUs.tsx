import { ChefHat, ShieldCheck, Clock, Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PatternTile } from "@/components/ui/PatternTile";

const points = [
  {
    icon: ChefHat,
    title: "Cooked fresh, on site",
    description: "No chafing-dish reheats. Our chefs cook curries, breads and grills live at your venue.",
  },
  {
    icon: ShieldCheck,
    title: "100% halal & certified",
    description: "Every supplier is halal-certified and our kitchen holds a 5-star food hygiene rating.",
  },
  {
    icon: Clock,
    title: "Punctual, always",
    description: "We arrive hours early to set up, and stay until the very last plate is cleared away.",
  },
  {
    icon: Users2,
    title: "A dedicated event manager",
    description: "One point of contact from your first enquiry through to the final course served.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(203,153,40,0.08),_transparent_60%)]" />
      <Container className="relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-4 rounded-full border border-gold-400/20" />
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
            <PatternTile tone="gold" patternId="whyus-1" label="Chef's Live Grill" />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Why Tawaa Fresh"
            align="left"
            tone="dark"
            title="Hospitality passed down, cooked up to a five-star standard"
            description="Founded on a family recipe book and a belief that catering should feel as generous as a home-cooked meal — just executed with hotel-grade precision."
          />

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {points.map((point) => (
              <RevealItem key={point.title}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-cream-50">{point.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream-200/70">{point.description}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
