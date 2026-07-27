import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const options = [
  {
    title: "Disposable Tray Catering",
    description: "Freshly prepared food delivered in disposable trays.",
    features: ["Simple to serve", "No washing up", "Easy to transport"],
  },
  {
    title: "Complete Buffet Setup",
    description: "A full buffet spread, ready to serve.",
    features: ["Chafing dishes", "Warming equipment", "Serving utensils", "Food labels"],
    highlight: true,
  },
];

export function CateringOptionCards() {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2">
      {options.map((option) => (
        <RevealItem key={option.title}>
          <div
            className={
              option.highlight
                ? "flex h-full flex-col rounded-3xl bg-brand-950 p-8 text-cream-50 shadow-[var(--shadow-lift)] ring-2 ring-gold-400"
                : "flex h-full flex-col rounded-3xl bg-white p-8 text-ink-900 ring-1 ring-ink-100"
            }
          >
            <h3 className="font-serif text-2xl">{option.title}</h3>
            <p className={option.highlight ? "mt-2 text-sm text-cream-200/70" : "mt-2 text-sm text-ink-600"}>
              {option.description}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {option.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check className={option.highlight ? "mt-0.5 h-4 w-4 shrink-0 text-gold-300" : "mt-0.5 h-4 w-4 shrink-0 text-brand-700"} />
                  <span className={option.highlight ? "text-cream-100/90" : "text-ink-700"}>{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="/quote" variant={option.highlight ? "gold" : "primary"} className="mt-8 w-full">
              Request a Quote
            </Button>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
