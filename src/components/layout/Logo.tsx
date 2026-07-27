import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)} aria-label="Tawaa Fresh — Home">
      <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full border border-gold-400/60 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo/tawaa-fresh-icon.png"
          alt="Tawaa Fresh logo mark"
          width={44}
          height={44}
          className="h-full w-full object-cover"
          priority
        />
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
          Pakistani Catering
        </span>
      </span>
    </Link>
  );
}
