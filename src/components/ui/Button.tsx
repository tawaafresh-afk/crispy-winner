import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-800 text-cream-50 hover:bg-brand-700 shadow-[var(--shadow-lift)] focus-visible:outline-brand-800",
  gold:
    "bg-gold-400 text-brand-950 hover:bg-gold-300 shadow-[var(--shadow-gold)] focus-visible:outline-gold-500",
  outline:
    "border border-brand-800/30 text-brand-900 hover:bg-brand-800 hover:text-cream-50 focus-visible:outline-brand-800",
  ghost: "text-brand-900 hover:bg-brand-800/10 focus-visible:outline-brand-800",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap disabled:opacity-60 disabled:pointer-events-none";

type LinkButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ variant = "primary", size = "md", className, children, ...rest }: ButtonProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (rest.href) {
    const { href, target, ...anchorRest } = rest as LinkButtonProps;
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={classes}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as NativeButtonProps)}>
      {children}
    </button>
  );
}
