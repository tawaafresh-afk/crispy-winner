import { cn } from "@/lib/utils";

const toneStyles = {
  brand: "from-brand-700 via-brand-800 to-brand-950",
  gold: "from-gold-300 via-gold-500 to-gold-700",
  maroon: "from-maroon-500 via-maroon-600 to-maroon-800",
  ink: "from-ink-600 via-ink-800 to-ink-900",
} as const;

const textTone = {
  brand: "text-cream-50",
  gold: "text-brand-950",
  maroon: "text-cream-50",
  ink: "text-cream-50",
} as const;

/**
 * Decorative stand-in for a real photograph. Swap for a <Image> tag
 * pointing at /public/images/* once real event photography is available.
 */
export function PatternTile({
  tone = "brand",
  label,
  className,
  patternId,
}: {
  tone?: keyof typeof toneStyles;
  label?: string;
  className?: string;
  patternId: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate flex h-full w-full items-end overflow-hidden rounded-[inherit] bg-gradient-to-br",
        toneStyles[tone],
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-25 mix-blend-soft-light"
        aria-hidden
      >
        <defs>
          <pattern id={patternId} width="72" height="72" patternUnits="userSpaceOnUse">
            <path
              d="M36 6c9 0 12 10 6 16-5 5-13 3-14-4-1 6 6 12 13 10 9-3 10-15 1-21-10-6-24 0-24 14 0 12 11 20 23 18"
              fill="none"
              stroke="white"
              strokeWidth="1.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      {label ? (
        <span
          className={cn(
            "relative z-10 m-4 font-serif text-sm leading-snug drop-shadow-sm sm:text-base",
            textTone[tone]
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
