import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { buildWhatsAppUrl, getProductEnquiryMessage } from '../utils/whatsapp';

export const FeaturedProduct: React.FC = () => {
  const productName = 'Stuffed and Studded Chocolate Medjool Dates';
  const productDescription =
    'Mixture of crunchiness of nuts stuffed inside, softness of fleshy dates & smoothness of chocolate. A perfect snack & perfect gift for your loved one.';

  const whatsappMessage = getProductEnquiryMessage(
    productName,
    'Signature Box',
    'Enquire for Current Pricing'
  );
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-nojunk-cream via-amber-50/40 to-nojunk-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-nojunk-dark text-white p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl border border-amber-900/30">
          {/* Subtle amber ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-nojunk-caramel/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Visual Treat Photography */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-2 border-nojunk-caramel/40 shadow-xl bg-amber-950/40 p-3 group">
                <img
                  src="/assets/feat-date-bowl.png"
                  alt="Stuffed and Studded Chocolate Medjool Dates"
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-nojunk-caramel text-nojunk-dark text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Signature Creation</span>
                </div>
              </div>
            </div>

            {/* Product Details & Story */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-xs font-semibold text-nojunk-gold">
                <span>The Crown Jewel of NOJUNK</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {productName}
              </h2>

              <p className="font-serif italic text-amber-200 text-base sm:text-lg leading-relaxed">
                "{productDescription}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-amber-100/90">
                <div className="flex items-center gap-2 bg-amber-950/40 p-2.5 rounded-xl border border-amber-800/30">
                  <ShieldCheck className="w-4 h-4 text-nojunk-gold shrink-0" />
                  <span>Soft, succulent king Medjool dates</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-950/40 p-2.5 rounded-xl border border-amber-800/30">
                  <ShieldCheck className="w-4 h-4 text-nojunk-gold shrink-0" />
                  <span>Stuffed with crunchy roasted nuts</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-950/40 p-2.5 rounded-xl border border-amber-800/30">
                  <ShieldCheck className="w-4 h-4 text-nojunk-gold shrink-0" />
                  <span>Artisanal smooth chocolate coating</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-950/40 p-2.5 rounded-xl border border-amber-800/30">
                  <ShieldCheck className="w-4 h-4 text-nojunk-gold shrink-0" />
                  <span>Perfect festive & celebration gifting</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <Link
                  to="/product/stuffed-studded-chocolate-medjool-dates"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-amber-200 hover:text-white border border-amber-700/50 hover:bg-white/5 transition-colors"
                >
                  <span>View Product Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
