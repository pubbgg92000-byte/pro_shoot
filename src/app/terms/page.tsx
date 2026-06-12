import type { Metadata } from 'next';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${BRAND.name} Studios. Please read these terms carefully before using our services.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Legal</p>
          <h1 className="font-heading text-5xl md:text-6xl mb-6">
            Terms of <span className="text-gold-gradient">Service</span>
          </h1>
          <p className="text-text-muted text-sm">Last updated: January 2024</p>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-luxury max-w-3xl">
          <div className="space-y-12 text-text-secondary text-sm leading-relaxed">
            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">1. Services</h2>
              <p>{BRAND.name} Studios provides professional photography, videography, and related creative services. All services are subject to availability and mutual agreement on scope, timeline, and pricing.</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">2. Booking & Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A non-refundable booking fee of 30% is required to confirm your session date.</li>
                <li>Final payment is due 7 days before the event/session date.</li>
                <li>Additional services requested after booking will be billed separately.</li>
                <li>Payments can be made via bank transfer, UPI, or credit card.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">3. Cancellation & Rescheduling</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations made 30+ days before the event: full refund minus booking fee.</li>
                <li>Cancellations within 14–30 days: 50% refund.</li>
                <li>Cancellations within 14 days: no refund.</li>
                <li>Rescheduling is free if done 14+ days in advance, subject to availability.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">4. Copyright & Usage</h2>
              <p className="mb-3">All photographs and videos created by {BRAND.name} Studios remain our intellectual property. Clients receive a license to use the images for personal, non-commercial purposes.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We reserve the right to use images in our portfolio, website, and marketing materials.</li>
                <li>Commercial usage rights can be negotiated separately.</li>
                <li>Editing or altering delivered images without consent is prohibited.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">5. Delivery</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard delivery timeline is 3–6 weeks from the event date.</li>
                <li>Express delivery options are available at additional cost.</li>
                <li>Images are delivered via secure online gallery with download access.</li>
                <li>Physical albums: additional 4–6 weeks after design approval.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">6. Limitation of Liability</h2>
              <p>{BRAND.name} Studios shall not be liable for any failure to perform due to unforeseen circumstances including equipment failure, natural disasters, illness, or other force majeure events. In such cases, we will make every reasonable effort to provide a substitute or reschedule.</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">7. Contact</h2>
              <p>For any questions regarding these terms, please contact us at <a href={`mailto:${BRAND.email}`} className="text-gold hover:text-gold-light">{BRAND.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
