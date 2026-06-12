import Link from 'next/link';
import { BRAND, SERVICES, NAV_LINKS } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Heart,
} from 'lucide-react';

// Inline SVG social icons (lucide-react no longer ships brand icons)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Footer() {
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 6);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border relative overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />

      {/* Main Footer */}
      <div className="container-luxury pb-10 pt-14 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24">
        <div className="grid grid-cols-1 gap-10 text-center sm:text-left md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="group mb-5 inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20">
                <span className="text-bg-primary font-heading text-lg font-bold">P</span>
              </div>
              <span className="font-heading text-xl tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                Pro <span className="text-gold-gradient">Shoot</span>
              </span>
            </Link>
            <p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-text-secondary sm:mx-0">
              Premium photography and cinematic storytelling crafted for life&apos;s most meaningful moments.
            </p>
            {/* Social Links */}
            <div className="flex justify-center gap-3 sm:justify-start">
              {[
                { icon: InstagramIcon, href: BRAND.social.instagram, label: 'Instagram' },
                { icon: FacebookIcon, href: BRAND.social.facebook, label: 'Facebook' },
                { icon: YoutubeIcon, href: BRAND.social.youtube, label: 'YouTube' },
                { icon: LinkedinIcon, href: BRAND.social.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/50 hover:-translate-y-1 hover:scale-110 hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm uppercase tracking-widest text-gold sm:mb-6">
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:block sm:space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-center gap-1 text-sm text-text-secondary transition-all duration-300 hover:translate-x-1 hover:text-gold sm:justify-start"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="inline-block text-text-secondary text-sm hover:text-gold transition-all duration-300 hover:translate-x-1"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-heading text-sm uppercase tracking-widest text-gold sm:mb-6">
              Services
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:block sm:space-y-3">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-center gap-1 text-sm text-text-secondary transition-all duration-300 hover:translate-x-1 hover:text-gold sm:justify-start"
                  >
                    {service.shortTitle}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="group inline-flex items-center text-gold text-sm hover:text-gold-light transition-all duration-300 hover:translate-x-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm uppercase tracking-widest text-gold sm:mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                  className="group flex items-start gap-3 text-text-secondary text-sm hover:text-gold transition-all duration-300 hover:translate-x-1"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-gold transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="group flex items-start gap-3 text-text-secondary text-sm hover:text-gold transition-all duration-300 hover:translate-x-1"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-gold transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(BRAND.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-text-secondary text-sm hover:text-gold transition-all duration-300 hover:translate-x-1"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <div className="flex items-start justify-center gap-3 text-sm text-text-secondary sm:justify-start">
                  <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>{BRAND.address.full}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-luxury flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-text-muted">
            © {currentYear} {BRAND.name} Studios. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-text-muted md:justify-end">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors duration-300">
              Terms of Service
            </Link>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-gold animate-pulse-gold" /> in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
