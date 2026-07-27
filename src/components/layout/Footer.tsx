import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/icons/SocialIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-cream-100">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.facebook} label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.tiktok} label="TikTok">
                <TikTokIcon className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Explore">
            {navLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            <FooterLink href="/catering">Weddings & Walima</FooterLink>
            <FooterLink href="/catering">Corporate Events</FooterLink>
            <FooterLink href="/catering">Mehndi & Sangeet</FooterLink>
            <FooterLink href="/quote">Request a Quote</FooterLink>
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <li className="flex items-start gap-3 text-sm text-cream-200/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.line2}
                <br />
                {siteConfig.address.city}, {siteConfig.address.postcode}
              </span>
            </li>
            <li className="flex items-center gap-3 text-sm text-cream-200/80">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-gold-300">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-cream-200/80">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-300">
                {siteConfig.email}
              </a>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-8 text-xs text-cream-200/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Crafted with care for lovers of authentic Pakistani cuisine.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-cream-200/80 transition-colors hover:text-gold-300">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-gold-400 hover:text-gold-300"
    >
      {children}
    </a>
  );
}
