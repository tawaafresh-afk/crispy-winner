import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { packages } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <RevealGroup className="grid gap-6 lg:grid-cols-3">
      {packages.map((pkg) => (
        <RevealItem key={pkg.tier} as="scale">
          <div
            className={cn(
              "flex h-full flex-col rounded-3xl p-8",
              pkg.highlight
                ? "bg-brand-950 text-cream-50 ring-2 ring-gold-400 shadow-[var(--shadow-lift)] lg:-translate-y-4"
                : "bg-white text-ink-900 ring-1 ring-ink-100"
            )}
          >
            {pkg.highlight ? (
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-950">
                Most Popular
              </span>
            ) : null}
            <h3 className="font-serif text-2xl">{pkg.tier}</h3>
            <p className={cn("mt-1 text-sm", pkg.highlight ? "text-cream-200/70" : "text-ink-600")}>
              {pkg.description}
            </p>
            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="font-serif text-4xl">{pkg.price}</span>
              <span className={cn("text-sm", pkg.highlight ? "text-cream-200/60" : "text-ink-400")}>
                {pkg.unit}
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    className={cn("mt-0.5 h-4 w-4 shrink-0", pkg.highlight ? "text-gold-300" : "text-brand-700")}
                  />
                  <span className={pkg.highlight ? "text-cream-100/90" : "text-ink-700"}>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/quote"
              variant={pkg.highlight ? "gold" : "primary"}
              className="mt-8 w-full"
            >
              Choose {pkg.tier}
            </Button>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
