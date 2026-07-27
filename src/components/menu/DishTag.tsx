import { Leaf, Sprout, Flame, WheatOff, Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/lib/site-config";

const tagConfig: Record<
  NonNullable<MenuItem["tags"]>[number],
  { label: string; icon: typeof Leaf; className: string }
> = {
  veg: { label: "Vegetarian", icon: Leaf, className: "bg-brand-50 text-brand-700" },
  vegan: { label: "Vegan", icon: Sprout, className: "bg-brand-50 text-brand-700" },
  spicy: { label: "Spicy", icon: Flame, className: "bg-maroon-500/10 text-maroon-600" },
  gf: { label: "Gluten-Free", icon: WheatOff, className: "bg-ink-100 text-ink-600" },
  signature: { label: "Signature", icon: Sparkle, className: "bg-gold-100 text-gold-700" },
};

export function DishTag({ tag }: { tag: NonNullable<MenuItem["tags"]>[number] }) {
  const config = tagConfig[tag];
  const Icon = config.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold",
        config.className
      )}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </span>
  );
}
