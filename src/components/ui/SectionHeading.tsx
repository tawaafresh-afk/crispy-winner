import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]",
            tone === "light" ? "text-gold-600" : "text-gold-300"
          )}
        >
          <span className="h-px w-6 bg-gold-500" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-serif text-3xl leading-tight text-balance sm:text-4xl md:text-5xl",
          tone === "light" ? "text-ink-900" : "text-cream-50"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-ink-600" : "text-cream-200/80"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
