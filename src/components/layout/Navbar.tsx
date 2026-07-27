"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, whatsappLink, defaultWhatsappMessage } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "bg-cream-50/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
        <Logo dark={!solid} />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors",
                    solid
                      ? cn("text-ink-700 hover:text-brand-800", active && "text-brand-800")
                      : cn("text-cream-100 hover:text-gold-300", active && "text-gold-300")
                  )}
                >
                  {link.label}
                  {active ? (
                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold-500" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={whatsappLink(defaultWhatsappMessage)}
            variant="outline"
            size="sm"
            className={solid ? "border-brand-800/20" : "border-cream-100/30 text-cream-50 hover:bg-cream-50 hover:text-brand-950"}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </Button>
          <Button href="/quote" variant="gold" size="sm">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn("inline-flex items-center justify-center rounded-full p-2 lg:hidden", solid ? "text-ink-800" : "text-cream-50")}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink-100 bg-cream-50 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-brand-800/5",
                      pathname === link.href && "text-brand-800"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 border-t border-ink-100 px-5 py-4">
              <Button href={whatsappLink(defaultWhatsappMessage)} variant="outline" size="sm">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </Button>
              <Button href="/quote" variant="gold" size="sm">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
