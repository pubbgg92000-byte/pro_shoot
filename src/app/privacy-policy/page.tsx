import type { Metadata } from 'next';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${BRAND.name} Studios. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Legal</p>
          <h1 className="font-heading text-5xl md:text-6xl mb-6">
            Privacy <span className="text-gold-gradient">Policy</span>
          </h1>
          <p className="text-text-muted text-sm">Last updated: January 2024</p>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-luxury max-w-3xl">
          <div className="space-y-12 text-text-secondary text-sm leading-relaxed">
            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">1. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Event details and preferences when booking a session</li>
                <li>Photographs and visual content created during sessions</li>
                <li>Communication records and feedback</li>
                <li>Payment and billing information</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information collected to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our photography services</li>
                <li>Process bookings and communicate about your sessions</li>
                <li>Send you marketing and promotional materials (with consent)</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Showcase our work in our portfolio (with prior permission)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">3. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only with your consent, to comply with laws, or to protect our rights.</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">5. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">6. Contact Us</h2>
              <p>For questions about this Privacy Policy, please contact us at <a href={`mailto:${BRAND.email}`} className="text-gold hover:text-gold-light">{BRAND.email}</a> or call <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="text-gold hover:text-gold-light">{BRAND.phone}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
