import { ArrowRight, Flame, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PatternTile } from "@/components/ui/PatternTile";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { menu } from "@/lib/site-config";

const signatureDishes = menu
  .flatMap((category) => category.items.map((item) => ({ ...item, category: category.title })))
  .filter((item) => item.tags?.includes("signature"))
  .slice(0, 6);

const tones = ["gold", "maroon", "brand", "ink", "gold", "maroon"] as const;

export function SignatureMenu() {
  return (
    <section className="bg-cream-100 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Signature Dishes"
            align="left"
            title="A taste of the Tawaa Fresh menu"
            description="A small selection from our full catering menu — every dish can be tailored for your event."
            className="mx-0 text-left"
          />
          <Button href="/menu" variant="outline" className="hidden shrink-0 sm:flex">
            View Full Menu <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish, i) => (
            <RevealItem key={dish.name}>
              <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100 transition-shadow hover:shadow-[var(--shadow-lift)]">
                <div className="aspect-[4/3]">
                  <PatternTile tone={tones[i % tones.length]} patternId={`sig-${i}`} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {dish.tags?.includes("spicy") ? <Flame className="h-3.5 w-3.5" /> : <Leaf className="h-3.5 w-3.5" />}
                    {dish.category}
                  </div>
                  <h3 className="mt-2 font-serif text-xl text-ink-900">{dish.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{dish.description}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button href="/menu" variant="outline">
            View Full Menu <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
