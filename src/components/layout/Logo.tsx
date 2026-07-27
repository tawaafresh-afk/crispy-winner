import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)} aria-label="Tawaa Fresh — Home">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-400/60 bg-gradient-to-br from-brand-800 to-brand-950 text-gold-300 transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none" aria-hidden>
          <path
            d="M20 5c6 0 8 7 4 11-3 3-9 2-9-2 0 4 4 8 9 7 6-2 7-10 1-14-7-4-16 0-16 9 0 8 7 13 15 12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-lg font-semibold tracking-wide",
            dark ? "text-cream-50" : "text-ink-900"
          )}
        >
          Tawaa Fresh
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.3em]",
            dark ? "text-gold-300" : "text-gold-600"
          )}
        >
          Luxury Catering
        </span>
      </span>
    </Link>
  );
}
