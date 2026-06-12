import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, TESTIMONIALS, FAQ_DATA } from '@/lib/constants';
import { BRAND } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

const PROCESS_STEPS = [
  { step: '01', title: 'Consultation', desc: 'We begin with a detailed conversation to understand your vision, preferences, and expectations.' },
  { step: '02', title: 'Planning', desc: 'Our team meticulously plans every detail — locations, lighting, timeline, and creative direction.' },
  { step: '03', title: 'The Shoot', desc: 'On the day, our professionals create magic with artistry, patience, and technical excellence.' },
  { step: '04', title: 'Post Production', desc: 'Each image is carefully curated and expertly retouched to gallery-worthy perfection.' },
  { step: '05', title: 'Delivery', desc: 'Receive your final images in premium digital formats, with optional luxury album design.' },
];

const DELIVERABLES = [
  'Professionally edited high-resolution images',
  'Online private gallery access',
  'Premium digital downloads',
  'Print-ready files',
  'Social media optimized versions',
  'Optional luxury album design',
  'Cinematic highlight reel (video packages)',
  'RAW files available in premium packages',
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = SERVICES.filter((s) => s.slug !== slug && s.featured).slice(0, 3);
  const testimonials = TESTIMONIALS.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <Image src={service.image} alt={service.title} fill className="object-cover" priority sizes="100vw" />
          {/* Dark base overlay */}
          <div className="absolute inset-0 bg-black/75" />
          {/* Bottom fade for content area */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-black/40" />
          {/* Vignette edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
        </div>
        <div className="relative z-10 text-center container-luxury">
          <p
            className="text-xs uppercase tracking-[0.3em] text-gold mb-6"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
          >
            Starting from {service.price}
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7)' }}
          >
            {service.title}
          </h1>
          <p
            className="font-subheading text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
          >
            {service.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="px-8 py-4 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
            >
              Book This Service
            </Link>
            <a
              href={getWhatsAppUrl(BRAND.whatsapp, `Hi! I'm interested in ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 rounded-full text-sm uppercase tracking-wider flex items-center gap-2 hover:border-gold/50 hover:text-gold transition-all duration-500 backdrop-blur-sm bg-black/20 text-white"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury max-w-4xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Overview</p>
            <h2 className="font-heading text-3xl md:text-4xl mb-8">{service.tagline}</h2>
            <p className="text-text-secondary text-lg leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury max-w-5xl">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">How It Works</p>
            <h2 className="font-heading text-4xl md:text-5xl">Our <span className="text-gold-gradient">Process</span></h2>
          </div>
          <div className="space-y-12">
            {PROCESS_STEPS.map((item, i) => (
              <div key={item.step} className={`flex items-start gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="font-heading text-xl text-gold">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What You Receive</p>
            <h2 className="font-heading text-4xl md:text-5xl">
              <span className="text-gold-gradient">Deliverables</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DELIVERABLES.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-border-gold transition-colors duration-300">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Client Love</p>
            <h2 className="font-heading text-4xl md:text-5xl">What Clients <span className="text-gold-gradient">Say</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="glass-light rounded-2xl p-8">
                <p className="text-text-secondary text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-text-muted text-xs">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Investment</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Starting From <span className="text-gold-gradient">{service.price}</span>
          </h2>
          <p className="text-text-secondary text-lg mb-4">Custom packages available. Every project is tailored to your vision.</p>
          <p className="text-text-muted text-sm mb-8">All packages include consultation, planning, professional editing, and premium delivery.</p>
          <Link href="/booking" className="inline-flex px-10 py-5 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105">
            Get Custom Quote
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">You May Also Like</p>
            <h2 className="font-heading text-4xl md:text-5xl">Related <span className="text-gold-gradient">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group relative aspect-[3/4] rounded-2xl overflow-hidden hover-lift">
                <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl mb-2">{s.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gold">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
