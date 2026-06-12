import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, BRAND } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Explore Pro Shoot\'s premium photography packages. Custom pricing tailored to your vision — from intimate portraits to grand celebrations.',
};

const TIERS = [
  {
    name: 'Essential',
    tagline: 'Perfect Start',
    description: 'Ideal for intimate sessions and personal portraits',
    features: ['4-hour coverage', 'Single photographer', '100+ edited images', 'Online gallery', 'Digital downloads', 'Social media files'],
    cta: 'Inquire Now',
    popular: false,
  },
  {
    name: 'Premium',
    tagline: 'Most Popular',
    description: 'Our most-requested package for weddings and events',
    features: ['Full-day coverage', 'Lead + assistant photographer', '300+ edited images', 'Online gallery', 'Premium retouching', 'Highlight reel', 'USB delivery', 'Pre-event consultation'],
    cta: 'Get Custom Quote',
    popular: true,
  },
  {
    name: 'Luxury',
    tagline: 'Bespoke Excellence',
    description: 'The ultimate photography experience for discerning clients',
    features: ['Multi-day coverage', 'Team of 3+ photographers', '500+ edited images', 'Cinematic film', 'Luxury album', 'Same-day edits', 'Drone coverage', 'Dedicated project manager', 'Priority delivery', 'Engagement session included'],
    cta: 'Schedule Consultation',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Investment</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gold-gradient">Pricing</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            Every project is unique. Our packages serve as starting points — each one is tailored to your specific vision and requirements.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 relative ${
                  tier.popular
                    ? 'border-2 border-gold bg-bg-card scale-105'
                    : 'border border-border bg-bg-card hover:border-border-gold transition-colors duration-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-gradient rounded-full text-bg-primary text-xs font-semibold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{tier.tagline}</p>
                  <h3 className="font-heading text-3xl mb-3">{tier.name}</h3>
                  <p className="text-text-secondary text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className={`block text-center py-4 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gold-gradient text-bg-primary hover:shadow-xl hover:shadow-gold/20'
                      : 'border border-gold/30 text-gold hover:bg-gold/5'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Pricing */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">By Service</p>
            <h2 className="font-heading text-4xl md:text-5xl">Starting <span className="text-gold-gradient">Ranges</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {SERVICES.filter(s => s.featured).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="glass-light rounded-xl p-6 hover-lift group text-center"
              >
                <h4 className="font-heading text-lg mb-2 group-hover:text-gold transition-colors">{s.shortTitle}</h4>
                <p className="text-gold text-2xl font-heading mb-2">{s.price}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-text-muted group-hover:text-gold transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury text-center max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Need a <span className="text-gold-gradient">Custom Package</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Every project is different. Let&apos;s create a package that perfectly fits your vision, timeline, and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="px-10 py-5 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
            >
              Get Custom Quote
            </Link>
            <a
              href={getWhatsAppUrl(BRAND.whatsapp, 'Hi! I\'d like to discuss pricing for my project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-white/20 rounded-full text-sm uppercase tracking-wider flex items-center gap-2 hover:border-gold/50 hover:text-gold transition-all duration-500"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
