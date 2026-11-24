import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { WHATSAPP_PHONE, buildWhatsAppUrl } from '../utils/whatsapp';

export const HeroCarousel: React.FC = () => {
  const directWhatsappUrl = buildWhatsAppUrl(
    'Hello NOJUNK!\n\nI am visiting your website and would love to explore your homemade treats and gift packs.\n\nThank you!'
  );

  return (
    <section className="relative overflow-hidden py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-bleed Grand Bright Hero Banner (Using image copy 3.png) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/40 bg-gradient-to-r from-[#FAF3EA] to-[#F5E7D4]">
          {/* Main Bright Visual Image covering the whole Hero Section */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] overflow-hidden">
            <img
              src="/assets/hero-grand-bright.png"
              alt="nojunk hero squirrel eating chocolate treat with assorted dates, nuts and luxury gift box"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Gradient Overlay for Readable Typography and CTAs */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/75 via-black/40 sm:via-black/25 to-transparent flex flex-col justify-end sm:justify-center p-6 sm:p-10 lg:p-14" />

            {/* Hero Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-10 lg:p-14 z-10 max-w-2xl space-y-3 sm:space-y-4 text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-bold text-amber-200 self-start shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>Only nuts.. nothing else!!</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md text-white">
                Pure Homemade Luxury Treats
              </h1>

              <p className="font-serif italic text-amber-200 text-sm sm:text-lg drop-shadow">
                Wholesome ingredients. Indulgent treats. Beautiful gifts.
              </p>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg hidden xs:block drop-shadow-sm">
                Plump king Medjool dates stuffed with roasted nuts, assorted chocolate gems, honey nut snack cups, and bespoke luxury gift boxes.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-nojunk-dark px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg transition-transform active:scale-95 hover:shadow-gold-glow"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
