import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for reaching out to Pro Shoot Studios. We will get back to you shortly.',
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="container-luxury text-center max-w-2xl">
        <CheckCircle className="w-20 h-20 text-gold mx-auto mb-8" />
        <h1 className="font-heading text-5xl md:text-6xl mb-4">
          Thank <span className="text-gold-gradient">You</span>!
        </h1>
        <p className="text-text-secondary text-lg mb-4">
          Your inquiry has been submitted successfully.
        </p>
        <p className="text-text-muted mb-12">
          Our team will review your requirements and get back to you within 24 hours.
          We can&apos;t wait to start planning your shoot!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
          >
            Return Home
          </Link>
          <a
            href={getWhatsAppUrl(BRAND.whatsapp, 'Hi! I just submitted an inquiry on your website.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-wider flex items-center gap-2 hover:border-gold/50 hover:text-gold transition-all duration-500"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
