import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Crown, ShieldCheck } from 'lucide-react';
import { buildWhatsAppUrl, getProductEnquiryMessage } from '../utils/whatsapp';

export const FeaturedProduct: React.FC = () => {
  const productName = 'Stuffed and Studded Chocolate Medjool Dates';
  const productDescription =
    'Mixture of crunchiness of nuts stuffed inside, softness of fleshy dates & smoothness of chocolate. A perfect snack & perfect gift for your loved one.';

  const whatsappMessage = getProductEnquiryMessage(
    productName,
    'Luxury Gift Box',
    'Starting from ₹580'
  );
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <section className="py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grand Banner reproducing image copy 14.png */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/40 bg-gradient-to-r from-[#231207] via-[#381C0B] to-[#231207]">
          {/* Main grand graphic banner */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] min-h-[460px] sm:min-h-[500px]">
            <img
              src="/assets/featured-grand-banner.png"
              alt="Stuffed and Studded Chocolate Medjool Dates Crown Jewel"
              className="w-full h-full object-cover object-center"
            />

            {/* Gradient shadow overlay for crystal-clear readability */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/85 via-black/50 sm:via-black/35 to-transparent flex flex-col justify-end sm:justify-center p-6 sm:p-10 lg:p-14" />

            {/* Interactive Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-10 lg:p-14 z-10 max-w-2xl space-y-3.5 sm:space-y-5 text-white">
              {/* Crown Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-400/50 text-xs sm:text-sm font-bold text-amber-300 self-start shadow-md">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>The Crown Jewel of NOJUNK</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-md">
                Stuffed and Studded Chocolate Medjool Dates
              </h2>

              {/* Quote */}
              <p className="font-serif italic text-amber-200 text-xs sm:text-base leading-relaxed drop-shadow">
                "{productDescription}"
              </p>

              {/* 4 Feature Badges (Matching image copy 14.png) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 text-[11px] sm:text-xs text-amber-100">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-500/30">
                  <Crown className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Soft, succulent King Medjool dates</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Stuffed with crunchy roasted nuts</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Artisanal smooth chocolate coating</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Perfect festive & celebration gifting</span>
                </div>
              </div>

              {/* Buttons matching image copy 14.png */}
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-nojunk-dark px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg transition-transform active:scale-95 hover:shadow-gold-glow"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-800" />
                  <span>Enquire on WhatsApp &rarr;</span>
                </a>

                <Link
                  to="/product/stuffed-studded-chocolate-medjool-dates"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold text-amber-200 hover:text-white border border-amber-400/50 hover:bg-white/10 transition-colors"
                >
                  <span>View Product Details &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
