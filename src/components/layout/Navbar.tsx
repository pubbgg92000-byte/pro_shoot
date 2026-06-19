'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import {
  BadgeIndianRupee,
  Baby,
  BookOpen,
  Briefcase,
  Building2,
  Camera,
  ChevronDown,
  Flower2,
  Heart,
  Menu,
  Package,
  Phone,
  Plane,
  Shirt,
  Sparkles,
  Video,
  X,
  type LucideIcon,
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NAV_ICON_MAP: Record<string, LucideIcon> = {
  BadgeIndianRupee,
  Baby,
  BookOpen,
  Briefcase,
  Building2,
  Camera,
  Flower2,
  Heart,
  Package,
  Plane,
  Shirt,
  Sparkles,
  Video,
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Check if a nav link is active
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, { dependencies: [isOpen] });

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? 'glass shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
              <span className="text-bg-primary font-heading text-lg font-bold">P</span>
            </div>
            <div>
              <span className="font-heading text-xl tracking-tight text-text-primary">
                Pro <span className="text-gold-gradient">Shoot</span>
              </span>
              <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-text-muted mt-[-2px]">
                Premium Photography
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              const hasChildren = 'children' in link && link.children;
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => hasChildren ? setActiveDropdown(link.label) : undefined}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveDropdown(null);
                      setIsOpen(false);
                    }}
                    className={`relative px-3 xl:px-4 py-2 text-[13px] xl:text-sm tracking-wide transition-colors duration-300 flex items-center gap-1 whitespace-nowrap ${
                      active
                        ? 'text-gold font-medium'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                    {hasChildren && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    )}
                    {/* Active underline indicator */}
                    {active && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {hasChildren && activeDropdown === link.label && (
                    <div className="absolute left-1/2 top-full w-[560px] max-w-[calc(100vw-3rem)] -translate-x-1/2 pt-2">
                      <div className="max-h-[500px] overflow-y-auto rounded-xl border border-white/8 bg-bg-primary/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        <div className="grid grid-cols-2 gap-2">
                        {link.children.map((child) => {
                          const childActive = isActive(child.href);
                          const Icon = NAV_ICON_MAP[child.icon] ?? Camera;
                          return (
                            <Link
                              key={`${child.label}-${child.href}`}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all duration-200 ${
                                childActive
                                  ? 'text-gold bg-gold/10'
                                  : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                              }`}
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 text-gold">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="leading-tight">{child.label}</span>
                            </Link>
                          );
                        })}
                        </div>
                        <div className="border-t border-border mt-1 pt-1">
                          <Link
                            href="/services"
                            className="block px-4 py-3 rounded-lg text-sm text-gold hover:bg-white/5 transition-all duration-200"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl(BRAND.whatsapp, 'Hi, I\'d like to inquire about your photography services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-full border border-border hover:border-[#25D366]/60 hover:bg-[#25D366]/10 text-text-secondary hover:text-[#25D366] transition-all duration-300"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
              className="p-2.5 rounded-full border border-border hover:border-gold/50 text-text-secondary hover:text-gold transition-all duration-300"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              href="/booking"
              className="px-5 xl:px-6 py-2.5 bg-gold-gradient text-bg-primary text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Book Session
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-primary z-10"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-bg-primary/98 backdrop-blur-xl lg:hidden"
        >
          <div className="container-luxury flex min-h-[calc(100svh-4rem)] flex-col gap-0 py-5 pb-[max(2rem,env(safe-area-inset-bottom))]">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              const hasChildren = 'children' in link && link.children;
              const isExpanded = mobileExpanded === link.label;
              return (
                <div key={link.href}>
                  <div className="flex items-center border-b border-border">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex-1 block py-3 font-heading text-[1.65rem] ${
                        active ? 'text-gold' : 'text-text-primary'
                      }`}
                    >
                      {link.label}
                      {active && <span className="inline-block w-2 h-2 rounded-full bg-gold ml-3 mb-1" />}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                        className="p-3 text-text-muted hover:text-gold transition-colors"
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {/* Accordion children */}
                  {hasChildren && isExpanded && (
                    <div className="max-h-[58svh] space-y-1 overflow-y-auto border-b border-border/50 bg-white/[0.02] py-2 pl-3 pr-1">
                      {link.children.map((child) => {
                        const Icon = NAV_ICON_MAP[child.icon] ?? Camera;
                        return (
                          <Link
                            key={`${child.label}-${child.href}`}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 rounded-lg px-2 py-2.5 text-base transition-colors ${
                              isActive(child.href) ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
                            }`}
                          >
                            <Icon className="h-4 w-4 shrink-0 text-gold" />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-6 flex gap-3">
              <a
                href={getWhatsAppUrl(BRAND.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 border border-gold/30 rounded-xl text-center text-gold font-medium"
              >
                WhatsApp
              </a>
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-4 bg-gold-gradient rounded-xl text-center text-bg-primary font-semibold"
              >
                Book Session
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
