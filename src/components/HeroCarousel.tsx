import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const HeroCarousel: React.FC = () => {
  const directWhatsappUrl = buildWhatsAppUrl(
    'Hello NOJUNK!\n\nI am visiting your website and would love to explore your homemade treats and gift packs.\n\nThank you!'
  );

  return (
    <section className="relative overflow-hidden py-2 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-bleed Grand Bright Hero Banner (Using image copy 3.png) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border sm:border-2 border-amber-400/40 bg-gradient-to-r from-[#FAF3EA] to-[#F5E7D4]">
          {/* Main Bright Visual Image with reduced compact slider height */}
          <div className="relative w-full h-[230px] sm:h-[340px] md:h-[400px] lg:h-[460px] overflow-hidden">
            <img
              src="/assets/hero-grand-bright.png"
              alt="nojunk hero squirrel eating chocolate treat with assorted dates, nuts and luxury gift box"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Gradient Overlay for Readable Typography and CTAs */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/45 sm:via-black/30 to-transparent flex flex-col justify-end sm:justify-center p-3.5 sm:p-8 lg:p-12" />

            {/* Hero Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end sm:justify-center p-3.5 sm:p-8 lg:p-12 z-10 max-w-2xl space-y-1.5 sm:space-y-3.5 text-white">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] sm:text-xs font-bold text-amber-200 self-start shadow-sm">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse" />
                <span>Only nuts.. nothing else!!</span>
              </div>

              <h1 className="font-serif text-lg sm:text-3xl lg:text-5xl font-bold leading-tight drop-shadow-md text-white">
                Pure Homemade Luxury Treats
              </h1>

              <p className="font-serif italic text-amber-200 text-xs sm:text-base drop-shadow line-clamp-1">
                Wholesome ingredients. Indulgent treats. Beautiful gifts.
              </p>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg hidden md:block drop-shadow-sm">
                Plump king Medjool dates stuffed with roasted nuts, assorted chocolate gems, honey nut snack cups, and bespoke luxury gift boxes.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-nojunk-dark px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 hover:shadow-gold-glow"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Reference Carousel Slider Indicator Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
              <span className="w-4 h-1.5 rounded-full bg-amber-400 shadow-xs" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
