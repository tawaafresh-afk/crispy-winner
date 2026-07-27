import { ChefHat, ShieldCheck, MapPinned, UtensilsCrossed } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PatternTile } from "@/components/ui/PatternTile";

const points = [
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
    title: "Tray or buffet catering",
    description: "Choose disposable tray catering, or a complete buffet setup with chafing dishes, warming equipment, utensils and food labels.",
  },
  {
    icon: MapPinned,
    title: "Local to Kent",
    description: "Based in Walderslade, Medway — serving Medway, Maidstone, Gravesend, Dartford and surrounding areas.",
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
            <PatternTile tone="gold" patternId="whyus-1" label="Complete Buffet Setup" />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Why Tawaa Fresh"
            align="left"
            tone="dark"
            title="Authentic Pakistani catering, done properly"
            description="Freshly prepared food and a catering option that fits your event, from Walderslade, Medway."
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
