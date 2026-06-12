'use client';

import { BRAND } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';


export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Get In Touch</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gold-gradient">Contact</span> Us
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out to start planning your perfect shoot.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl mb-8">Send Us a <span className="text-gold-gradient">Message</span></h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="form-label">Full Name</label>
                    <input type="text" id="contact-name" className="form-input" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="form-label">Phone</label>
                    <input type="tel" id="contact-phone" className="form-input" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input type="email" id="contact-email" className="form-input" placeholder="your@email.com" required />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <input type="text" id="contact-subject" className="form-input" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea id="contact-message" rows={5} className="form-input resize-none" placeholder="Tell us about your project..." required />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-light rounded-2xl p-8">
                <h3 className="font-heading text-xl mb-6 text-gold">Quick Connect</h3>
                <div className="space-y-6">
                  <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Call Us</p>
                      <p className="text-text-secondary text-sm">{BRAND.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email Us</p>
                      <p className="text-text-secondary text-sm">{BRAND.email}</p>
                    </div>
                  </a>
                  <a href={getWhatsAppUrl(BRAND.whatsapp)} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">WhatsApp</p>
                      <p className="text-text-secondary text-sm">Chat with us instantly</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="glass-light rounded-2xl p-8">
                <h3 className="font-heading text-xl mb-6 text-gold">Visit Our Studio</h3>
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-text-secondary text-sm">{BRAND.address.full}</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-text-secondary space-y-1">
                    <p>Mon-Fri: {BRAND.hours.weekdays}</p>
                    <p>Saturday: {BRAND.hours.saturday}</p>
                    <p>Sunday: {BRAND.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border aspect-video bg-bg-card flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-text-muted text-sm">Google Maps</p>
                  <a href={BRAND.address.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gold text-xs hover:text-gold-light">
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
