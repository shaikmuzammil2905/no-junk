import React from 'react';
import {
  Heart,
  Sparkles,
  Phone,
  MessageCircle,
  Leaf,
  Gift,
  Award,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { WHATSAPP_PHONE, BUSINESS_EMAIL, BUSINESS_OWNER, buildWhatsAppUrl } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  const directChatUrl = buildWhatsAppUrl(
    'Hello NOJUNK!\n\nI was reading your story on the website and would love to enquire about your homemade treats.\n\nThank you!'
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-10">
      {/* Brand Hero Mascot Card matching Reference Screen 3! */}
      <div className="rounded-3xl bg-[#F6EFE6] border border-amber-900/15 p-8 sm:p-12 text-center shadow-card relative overflow-hidden flex flex-col items-center">
        {/* Sunburst background rays or subtle radial warmth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100/50 via-transparent to-transparent pointer-events-none" />

        {/* Mascot badge */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-nojunk-caramel/50 shadow-xl bg-white p-2 mb-4 group hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/nojunk-badge-round.png"
            alt="nojunk squirrel holding hazelnut"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Typography */}
        <h1 className="font-script text-4xl sm:text-5xl font-bold text-nojunk-dark">
          nojunk
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-nojunk-brown font-medium mt-1">
          "only nuts..nothing else!!"
        </p>

        {/* Call Founder Pill Button */}
        <div className="mt-4">
          <a
            href={`tel:${WHATSAPP_PHONE}`}
            className="inline-flex items-center gap-2 bg-nojunk-dark hover:bg-nojunk-chocolate text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm transition-transform active:scale-95"
          >
            <Phone className="w-4 h-4 text-nojunk-caramel" />
            <span>📞 {WHATSAPP_PHONE}</span>
          </a>
        </div>
      </div>

      {/* Our Story - Parchment Paper Style Card matching Reference Screen 3! */}
      <div className="rounded-3xl bg-[#FDFBF7] border border-amber-900/20 p-6 sm:p-10 shadow-sm relative">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-nojunk-dark">
            Our Story
          </h2>
          <span className="text-xl">🌿</span>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-nojunk-dark/85 leading-relaxed">
          <p className="font-medium text-nojunk-brown">
            <strong>nojunk</strong> is a home-made treats brand built on one simple promise: <em>only nuts, dates and chocolate, nothing else.</em>
          </p>
          <p>
            We turn these wholesome ingredients into gifts and snacks that feel indulgent and luxurious.
          </p>
          <p>
            We believe that simple ingredients can create beautiful experiences. From premium nuts to stuffed Medjool dates and chocolate creations, every treat is thoughtfully made for everyday enjoyment and special occasions.
          </p>
        </div>

        {/* 3 Pillar badges matching Screen 3: [Fresh, Gift Ready, Premium Quality] */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 mt-6 border-t border-nojunk-brown/15 text-center">
          <div className="bg-amber-50/70 p-3 sm:p-4 rounded-2xl border border-amber-200/60 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-white shadow-2xs flex items-center justify-center text-emerald-700 mb-2">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-serif text-xs sm:text-sm font-bold text-nojunk-dark">Fresh</span>
            <span className="text-[10px] text-nojunk-brown/70 mt-0.5 hidden sm:inline">Small Batches</span>
          </div>

          <div className="bg-amber-50/70 p-3 sm:p-4 rounded-2xl border border-amber-200/60 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-white shadow-2xs flex items-center justify-center text-nojunk-caramel mb-2">
              <Gift className="w-5 h-5" />
            </div>
            <span className="font-serif text-xs sm:text-sm font-bold text-nojunk-dark">Gift Ready</span>
            <span className="text-[10px] text-nojunk-brown/70 mt-0.5 hidden sm:inline">Elegant Packaging</span>
          </div>

          <div className="bg-amber-50/70 p-3 sm:p-4 rounded-2xl border border-amber-200/60 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-white shadow-2xs flex items-center justify-center text-amber-600 mb-2">
              <Award className="w-5 h-5" />
            </div>
            <span className="font-serif text-xs sm:text-sm font-bold text-nojunk-dark">Premium</span>
            <span className="text-[10px] text-nojunk-brown/70 mt-0.5 hidden sm:inline">Only Quality Nuts</span>
          </div>
        </div>

        {/* Big WhatsApp CTA Button as in Screen 3 */}
        <div className="pt-8">
          <a
            href={directChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-2xl font-bold text-base shadow-md transition-transform duration-200 active:scale-98"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp &gt;</span>
          </a>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="space-y-6">
        <h3 className="font-serif text-2xl font-bold text-nojunk-dark text-center">
          What We Offer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-2xs space-y-2">
            <span className="text-2xl">🎁</span>
            <h4 className="font-serif text-base font-bold text-nojunk-dark">Gift Boxes</h4>
            <p className="text-xs text-nojunk-dark/80 leading-relaxed">
              "Dry nuts, beautifully packed for festivals, weddings, birthdays, corporate gifting and every occasion in between."
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-2xs space-y-2">
            <span className="text-2xl">🍫</span>
            <h4 className="font-serif text-base font-bold text-nojunk-dark">Chocolate-Dipped Nuts</h4>
            <p className="text-xs text-nojunk-dark/80 leading-relaxed">
              "Crunchy nuts coated in rich chocolate, perfect for gifting or everyday snacking."
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-2xs space-y-2">
            <span className="text-2xl">✨</span>
            <h4 className="font-serif text-base font-bold text-nojunk-dark">Signature Treat</h4>
            <p className="text-xs text-nojunk-dark/80 leading-relaxed">
              "Medjool dates stuffed with crunchy nuts and dipped in rich chocolate."
            </p>
          </div>
        </div>
      </div>

      {/* Founder Profile */}
      <div className="bg-amber-100/40 p-6 rounded-2xl border border-amber-200/60 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-nojunk-brown text-amber-200 flex items-center justify-center font-script text-3xl font-bold shrink-0">
          KN
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif text-lg font-bold text-nojunk-dark">
            Curated by K. Neelima
          </h4>
          <p className="text-xs text-nojunk-brown font-medium">
            Home Artisan & Founder of NOJUNK
          </p>
          <p className="text-xs text-nojunk-dark/80 pt-1">
            "I started NOJUNK with the singular belief that treats should be unadulterated, wholesome, and pure. Every batch is created with the exact same love and freshness I share with my own family."
          </p>
        </div>
      </div>
    </div>
  );
};
