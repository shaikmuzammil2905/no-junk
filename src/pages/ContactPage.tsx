import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import {
  WHATSAPP_PHONE,
  BUSINESS_EMAIL,
  BUSINESS_OWNER,
  buildWhatsAppUrl,
  getContactFormMessage
} from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please provide your name and enquiry message.');
      return;
    }

    const prefilledMessage = getContactFormMessage({
      name: formData.name,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });

    const url = buildWhatsAppUrl(prefilledMessage);
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-xs font-semibold text-nojunk-brown">
          <Sparkles className="w-3.5 h-3.5 text-nojunk-caramel" />
          <span>Personal Hospitality</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-nojunk-dark">
          Contact NOJUNK
        </h1>
        <p className="text-xs sm:text-sm text-nojunk-brown/80">
          Connect directly with business owner K. Neelima for product queries, fresh batch bookings, or bespoke gifting orders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* WhatsApp Direct Card */}
          <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-nojunk-dark">
                  WhatsApp Support
                </h3>
                <p className="text-xs text-emerald-800 font-medium">
                  Primary Customer Channel
                </p>
              </div>
            </div>
            <p className="text-xs text-nojunk-dark/80">
              Instant responses directly from K. Neelima. Ask for photos of the current fresh batch or discuss pack configurations.
            </p>
            <a
              href={`https://wa.me/91${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl font-semibold text-xs shadow-sm transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat: {WHATSAPP_PHONE}</span>
            </a>
          </div>

          {/* Phone Call Card */}
          <div className="bg-[#FDFBF7] border border-nojunk-brown/15 rounded-3xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-nojunk-dark text-amber-200 flex items-center justify-center shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-nojunk-dark">
                  Direct Phone Call
                </h3>
                <p className="text-xs text-nojunk-brown font-medium">
                  Voice Enquiry & Orders
                </p>
              </div>
            </div>
            <p className="text-xs text-nojunk-dark/80">
              Call us directly during business hours (9:00 AM – 9:00 PM IST).
            </p>
            <a
              href={`tel:${WHATSAPP_PHONE}`}
              className="inline-flex items-center gap-2 bg-nojunk-surface hover:bg-nojunk-parchment text-nojunk-dark border border-nojunk-brown/20 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-nojunk-caramel" />
              <span>Call: {WHATSAPP_PHONE}</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-[#FDFBF7] border border-nojunk-brown/15 rounded-3xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-nojunk-brown flex items-center justify-center">
                <Mail className="w-5 h-5 text-nojunk-caramel" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-nojunk-dark">
                  Email
                </h3>
                <p className="text-xs text-nojunk-brown font-medium">
                  Corporate & Official Enquiries
                </p>
              </div>
            </div>
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="text-xs font-semibold text-nojunk-dark hover:text-nojunk-caramel underline break-all block"
            >
              {BUSINESS_EMAIL}
            </a>
          </div>

          {/* Business & Address Note */}
          <div className="bg-amber-50/70 border border-amber-200/60 rounded-3xl p-6 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-nojunk-caramel" />
              <h4 className="font-serif text-sm font-bold text-nojunk-dark">
                Kitchen & Workshop
              </h4>
            </div>
            <p className="text-xs text-nojunk-dark/80 leading-relaxed">
              Homemade boutique kitchen operating from Hyderabad. Physical store address will be published upon launch. GST registration is applied and currently in progress.
            </p>
          </div>
        </div>

        {/* Right Column: Customer Enquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-nojunk-brown/15 p-6 sm:p-10 shadow-card">
          <div className="space-y-2 mb-6">
            <h2 className="font-serif text-2xl font-bold text-nojunk-dark">
              Send an Enquiry
            </h2>
            <p className="text-xs text-nojunk-brown/80">
              Fill in your details below and click Send. Your message will be automatically prepared and sent directly to our official WhatsApp!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-nojunk-dark block mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-4 py-2.5 rounded-xl border border-nojunk-brown/20 text-xs sm:text-sm bg-nojunk-surface focus:outline-none focus:border-nojunk-caramel"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-nojunk-dark block mb-1">
                  Your Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className="w-full px-4 py-2.5 rounded-xl border border-nojunk-brown/20 text-xs sm:text-sm bg-nojunk-surface focus:outline-none focus:border-nojunk-caramel"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-nojunk-dark block mb-1">
                  Enquiry Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-nojunk-brown/20 text-xs sm:text-sm bg-nojunk-surface focus:outline-none focus:border-nojunk-caramel"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Product Pack Sizes & Pricing">Product Pack Sizes & Pricing</option>
                  <option value="Festive or Wedding Gifting">Festive or Wedding Gifting</option>
                  <option value="Corporate Hampers">Corporate Hampers</option>
                  <option value="Bulk Return Gift Pouches">Bulk Return Gift Pouches</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-nojunk-dark block mb-1">
                Your Message / Treats of Interest *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your requirements, desired quantity, occasion or questions..."
                className="w-full px-4 py-2.5 rounded-xl border border-nojunk-brown/20 text-xs sm:text-sm bg-nojunk-surface focus:outline-none focus:border-nojunk-caramel placeholder:text-nojunk-brown/40"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-transform duration-200 active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Submit & Open WhatsApp Enquiry</span>
            </button>

            {submitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Redirecting to WhatsApp with your details. Thank you!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
