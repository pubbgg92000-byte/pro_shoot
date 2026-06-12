'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
          <div className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    'children' in link && link.children
                      ? setActiveDropdown(link.label)
                      : undefined
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`relative px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm tracking-wide transition-colors duration-300 flex items-center gap-1 whitespace-nowrap ${
                      active
                        ? 'text-gold font-medium'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                    {'children' in link && link.children && (
                      <ChevronDown className="w-3 h-3" />
                    )}
                    {/* Active underline indicator */}
                    {active && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {'children' in link &&
                    link.children &&
                    activeDropdown === link.label && (
                      <div className="absolute top-full left-0 pt-2 min-w-[280px]">
                        <div className="bg-bg-primary/95 backdrop-blur-xl rounded-xl p-2 shadow-2xl shadow-black/40 border border-white/8">
                          {link.children.map((child) => {
                            const childActive = isActive(child.href);
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                                  childActive
                                    ? 'text-gold bg-gold/10'
                                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                                }`}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
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
              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block border-b border-border py-3 font-heading text-[1.65rem] ${
                      active ? 'text-gold' : 'text-text-primary'
                    }`}
                  >
                    {link.label}
                    {active && <span className="inline-block w-2 h-2 rounded-full bg-gold ml-3 mb-1" />}
                  </Link>
                  {'children' in link && link.children && (
                    <div className="space-y-1 py-2 pl-5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2.5 text-base ${
                            isActive(child.href) ? 'text-gold' : 'text-text-secondary'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
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
