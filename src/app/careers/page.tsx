import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import { MapPin, Briefcase, Heart, Zap, Coffee, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: `Join the ${BRAND.name} team. We're looking for passionate photographers, editors, and creatives to help us craft extraordinary visual stories.`,
};

const ROLES = [
  { title: 'Senior Photographer', type: 'Full-time', location: 'Bangalore', description: 'Lead photography assignments for weddings, events, and commercial projects.' },
  { title: 'Photo Editor / Retoucher', type: 'Full-time', location: 'Bangalore', description: 'Expert-level post-production and color grading for premium deliverables.' },
  { title: 'Videographer / Cinematographer', type: 'Full-time', location: 'Bangalore', description: 'Cinematic video production for weddings and brand films.' },
  { title: 'Studio Assistant', type: 'Full-time', location: 'Bangalore', description: 'Support studio operations, lighting setup, and client management.' },
  { title: 'Social Media Manager', type: 'Part-time', location: 'Remote', description: 'Manage brand presence across Instagram, YouTube, and other platforms.' },
];

const BENEFITS = [
  { icon: Heart, title: 'Creative Freedom', desc: 'Express your artistic vision on every project.' },
  { icon: TrendingUp, title: 'Growth Path', desc: 'Clear career progression and skill development.' },
  { icon: Coffee, title: 'Premium Equipment', desc: 'Work with the best cameras, lenses, and gear.' },
  { icon: Zap, title: 'Exciting Projects', desc: 'Travel to stunning destinations for shoots.' },
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Join Our Team</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gold-gradient">Careers</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            Help us craft extraordinary visual stories. We&apos;re always looking for passionate creatives.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why Pro Shoot</p>
            <h2 className="font-heading text-4xl md:text-5xl">The <span className="text-gold-gradient">Perks</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="glass-light rounded-2xl p-6 text-center hover-lift">
                  <Icon className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h3 className="font-heading text-lg mb-2">{b.title}</h3>
                  <p className="text-text-secondary text-sm">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Open Positions</p>
            <h2 className="font-heading text-4xl md:text-5xl">Current <span className="text-gold-gradient">Openings</span></h2>
          </div>
          <div className="space-y-4">
            {ROLES.map((role) => (
              <div key={role.title} className="border border-border rounded-xl p-6 hover:border-border-gold transition-colors duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl mb-1 group-hover:text-gold transition-colors">{role.title}</h3>
                    <p className="text-text-secondary text-sm mb-2">{role.description}</p>
                    <div className="flex items-center gap-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{role.type}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{role.location}</span>
                    </div>
                  </div>
                  <Link
                    href={`mailto:${BRAND.email}?subject=Application: ${role.title}`}
                    className="px-6 py-3 border border-gold/30 rounded-full text-gold text-sm uppercase tracking-wider hover:bg-gold/5 transition-all duration-300 flex-shrink-0"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury text-center max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Don&apos;t See Your <span className="text-gold-gradient">Role</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            We&apos;re always interested in hearing from talented individuals. Send us your portfolio and let&apos;s connect.
          </p>
          <Link
            href={`mailto:${BRAND.email}?subject=General Application`}
            className="inline-flex px-10 py-5 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
          >
            Send Your Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
