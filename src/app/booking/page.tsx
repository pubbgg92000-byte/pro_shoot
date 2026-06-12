'use client';

import { useState } from 'react';
import { SERVICES, BRAND } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';
import { MessageCircle, Upload, CheckCircle } from 'lucide-react';

const BUDGET_RANGES = [
  'Under ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹2,50,000',
  '₹2,50,000 – ₹5,00,000',
  '₹5,00,000+',
  'Flexible / Discuss',
];

const CONTACT_METHODS = ['Phone', 'Email', 'WhatsApp'];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="pt-32 pb-32 bg-bg-primary min-h-screen flex items-center">
        <div className="container-luxury text-center max-w-2xl">
          <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Thank You!</h1>
          <p className="text-text-secondary text-lg mb-8">
            Your booking inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <a
            href={getWhatsAppUrl(BRAND.whatsapp, 'Hi! I just submitted a booking inquiry on your website.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 rounded-full text-gold text-sm uppercase tracking-wider hover:bg-gold/5 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Follow Up on WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Book Your Session</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Let&apos;s <span className="text-gold-gradient">Begin</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            Tell us about your vision and we&apos;ll craft the perfect photography experience
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-luxury max-w-3xl">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  step >= s ? 'bg-gold text-bg-primary' : 'border border-border text-text-muted'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`flex-1 h-px transition-colors duration-300 ${step > s ? 'bg-gold' : 'bg-border'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); if (step < 3) setStep(step + 1); else setSubmitted(true); }}>
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl mb-6">Personal <span className="text-gold-gradient">Details</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="booking-name" className="form-label">Full Name *</label>
                    <input type="text" id="booking-name" className="form-input" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="booking-phone" className="form-label">Phone *</label>
                    <input type="tel" id="booking-phone" className="form-input" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="booking-email" className="form-label">Email *</label>
                  <input type="email" id="booking-email" className="form-input" placeholder="your@email.com" required />
                </div>
                <div>
                  <label htmlFor="booking-location" className="form-label">Event Location</label>
                  <input type="text" id="booking-location" className="form-input" placeholder="City, Venue, or Destination" />
                </div>
              </div>
            )}

            {/* Step 2: Service Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl mb-6">Service <span className="text-gold-gradient">Details</span></h2>
                <div>
                  <label htmlFor="booking-service" className="form-label">Service Type *</label>
                  <select id="booking-service" className="form-input" required>
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="booking-date" className="form-label">Event Date</label>
                  <input type="date" id="booking-date" className="form-input" />
                </div>
                <div>
                  <label htmlFor="booking-budget" className="form-label">Budget Range</label>
                  <select id="booking-budget" className="form-input">
                    <option value="">Select budget range</option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label">Preferred Contact Method</label>
                  <div className="flex gap-3">
                    {CONTACT_METHODS.map((method) => (
                      <label key={method} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-text-secondary hover:border-gold/30 cursor-pointer transition-colors">
                        <input type="radio" name="contact-method" value={method} className="accent-[#D4AF37]" />
                        {method}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Requirements */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl mb-6">Your <span className="text-gold-gradient">Vision</span></h2>
                <div>
                  <label htmlFor="booking-requirements" className="form-label">Requirements & Expectations</label>
                  <textarea id="booking-requirements" rows={5} className="form-input resize-none" placeholder="Tell us about your vision, preferences, and any special requests..." />
                </div>
                <div>
                  <label htmlFor="booking-special" className="form-label">Special Requests</label>
                  <textarea id="booking-special" rows={3} className="form-input resize-none" placeholder="Any specific requests or notes..." />
                </div>
                <div>
                  <label className="form-label">Reference Images (Optional)</label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-gold/30 transition-colors duration-300 cursor-pointer">
                    <Upload className="w-8 h-8 text-text-muted mx-auto mb-3" />
                    <p className="text-text-secondary text-sm">Drag & drop or click to upload reference images</p>
                    <p className="text-text-muted text-xs mt-1">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-border rounded-full text-sm text-text-secondary hover:border-gold/30 hover:text-gold transition-all duration-300"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              <button
                type="submit"
                className="px-10 py-4 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
              >
                {step < 3 ? 'Continue' : 'Submit Inquiry'}
              </button>
            </div>
          </form>

          {/* WhatsApp Alternative */}
          <div className="mt-16 text-center border-t border-border pt-12">
            <p className="text-text-muted text-sm mb-4">Prefer a quicker conversation?</p>
            <a
              href={getWhatsAppUrl(BRAND.whatsapp, 'Hi! I\'d like to book a photography session.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 rounded-full text-gold text-sm uppercase tracking-wider hover:bg-gold/5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
