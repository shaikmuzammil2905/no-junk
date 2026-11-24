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
  CheckCircle2,
  Clock
} from 'lucide-react';
import { WHATSAPP_PHONE, BUSINESS_EMAIL, BUSINESS_OWNER, buildWhatsAppUrl } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  const directChatUrl = buildWhatsAppUrl(
    'Hello NOJUNK!\n\nI was reading your story on the website and would love to enquire about your homemade treats.\n\nThank you!'
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12">
      {/* Grand Visual Banner reproducing image copy 9.png with responsive WhatsApp Button */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/40 bg-gradient-to-r from-[#FAF3EA] to-[#F5E7D4]">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[460px]">
          <img
            src="/assets/about-grand-banner.png"
            alt="nojunk squirrel emblem, luxury chocolate gifts, nuts, dates, and WhatsApp contact"
            className="w-full h-full object-cover object-center"
          />

          {/* Interactive clickable WhatsApp button overlaid right on the banner's designated button location */}
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 sm:pb-12 z-10">
            <a
              href={`https://wa.me/91${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2B1507] via-[#4A2610] to-[#2B1507] hover:from-[#3D200B] hover:to-[#3D200B] text-amber-200 border-2 border-amber-400/80 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <Phone className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <MessageCircle className="w-5 h-5 text-emerald-400 animate-pulse" />
              <span className="font-sans tracking-wide text-white font-extrabold">
                {WHATSAPP_PHONE}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Our Story - Parchment Paper Style Card */}
      <div className="rounded-3xl bg-[#FCF8F2] border-2 border-amber-900/15 p-6 sm:p-12 shadow-sm relative">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-nojunk-dark">
            Our Story
          </h2>
          <span className="text-2xl">🌿</span>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-nojunk-dark/85 leading-relaxed">
          <p className="font-medium text-nojunk-goldenBrown text-base sm:text-lg">
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
        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 mt-8 border-t border-amber-900/15 text-center">
          <div className="bg-amber-100/60 p-3 sm:p-5 rounded-2xl border border-amber-300/50 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs flex items-center justify-center text-emerald-700 mb-2">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="font-serif text-sm sm:text-base font-bold text-nojunk-dark">Fresh</span>
            <span className="text-xs text-nojunk-brown/75 mt-0.5 hidden sm:inline">Small Hygienic Batches</span>
          </div>

          <div className="bg-amber-100/60 p-3 sm:p-5 rounded-2xl border border-amber-300/50 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs flex items-center justify-center text-nojunk-goldenBrown mb-2">
              <Gift className="w-6 h-6" />
            </div>
            <span className="font-serif text-sm sm:text-base font-bold text-nojunk-dark">Gift Ready</span>
            <span className="text-xs text-nojunk-brown/75 mt-0.5 hidden sm:inline">Satin Ribbon Packaging</span>
          </div>

          <div className="bg-amber-100/60 p-3 sm:p-5 rounded-2xl border border-amber-300/50 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs flex items-center justify-center text-amber-600 mb-2">
              <Award className="w-6 h-6" />
            </div>
            <span className="font-serif text-sm sm:text-base font-bold text-nojunk-dark">Premium</span>
            <span className="text-xs text-nojunk-brown/75 mt-0.5 hidden sm:inline">Wholesome King Dates</span>
          </div>
        </div>

        {/* Big WhatsApp CTA Button */}
        <div className="pt-8">
          <a
            href={directChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-bold text-base sm:text-lg shadow-md transition-transform duration-200 active:scale-98"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp &gt;</span>
          </a>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="space-y-6">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-nojunk-dark text-center">
          What We Offer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-amber-900/15 shadow-2xs space-y-3">
            <span className="text-3xl">🎁</span>
            <h4 className="font-serif text-lg font-bold text-nojunk-dark">Gift Boxes</h4>
            <p className="text-xs sm:text-sm text-nojunk-dark/80 leading-relaxed">
              "Dry nuts, beautifully packed for festivals, weddings, birthdays, corporate gifting and every occasion in between."
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-amber-900/15 shadow-2xs space-y-3">
            <span className="text-3xl">🍫</span>
            <h4 className="font-serif text-lg font-bold text-nojunk-dark">Chocolate-Dipped Nuts</h4>
            <p className="text-xs sm:text-sm text-nojunk-dark/80 leading-relaxed">
              "Crunchy nuts coated in rich chocolate, perfect for gifting or everyday snacking."
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-amber-900/15 shadow-2xs space-y-3">
            <span className="text-3xl">✨</span>
            <h4 className="font-serif text-lg font-bold text-nojunk-dark">Signature Treat</h4>
            <p className="text-xs sm:text-sm text-nojunk-dark/80 leading-relaxed">
              "Medjool dates stuffed with crunchy nuts and dipped in rich chocolate."
            </p>
          </div>
        </div>
      </div>

      {/* Founder Profile */}
      <div className="bg-gradient-to-r from-amber-100/80 via-amber-50 to-amber-100/60 p-6 sm:p-8 rounded-3xl border-2 border-amber-300/70 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
        <div className="w-24 h-24 rounded-full bg-nojunk-dark text-amber-200 border-2 border-amber-400 flex items-center justify-center font-script text-4xl font-bold shrink-0 shadow-md">
          KN
        </div>
        <div className="space-y-1.5 text-center sm:text-left">
          <h4 className="font-serif text-xl font-bold text-nojunk-dark">
            Curated by K. Neelima
          </h4>
          <p className="text-xs text-nojunk-goldenBrown font-bold">
            Home Artisan & Founder of NOJUNK • Hyderabad
          </p>
          <p className="text-xs sm:text-sm text-nojunk-dark/80 pt-1 leading-relaxed">
            "I started NOJUNK with the singular belief that treats should be unadulterated, wholesome, and pure. Every batch is created with the exact same love and freshness I share with my own family."
          </p>
        </div>
      </div>
    </div>
  );
};
