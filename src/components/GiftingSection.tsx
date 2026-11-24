import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { GIFTING_OCCASIONS } from '../data/products';
import { buildWhatsAppUrl, getGiftingEnquiryMessage } from '../utils/whatsapp';

export const GiftingSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-nojunk-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-xs font-semibold text-nojunk-brown mb-2">
              <Gift className="w-3.5 h-3.5 text-nojunk-caramel" />
              <span>Bespoke Gifting</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-nojunk-dark">
              Make Every Occasion Sweeter
            </h2>
            <p className="text-xs sm:text-sm text-nojunk-brown/80 mt-1 max-w-xl">
              Thoughtfully packed nuts, dates and chocolate treats for the people who matter most in your life.
            </p>
          </div>

          <Link
            to="/gifting"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-nojunk-dark hover:text-nojunk-caramel"
          >
            <span>Explore All Occasions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GIFTING_OCCASIONS.map((occasion) => {
            const whatsappUrl = buildWhatsAppUrl(getGiftingEnquiryMessage(occasion.title));

            return (
              <div
                key={occasion.id}
                className="group bg-[#FDFBF7] rounded-2xl p-5 border border-nojunk-brown/15 shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="w-full h-44 rounded-xl overflow-hidden bg-amber-50/50 mb-4 flex items-center justify-center p-2 relative">
                    <img
                      src={occasion.image}
                      alt={occasion.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-bold text-nojunk-brown shadow-2xs">
                      {occasion.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-nojunk-dark group-hover:text-nojunk-caramel transition-colors">
                    {occasion.title}
                  </h3>
                  <p className="text-xs font-medium text-nojunk-caramel mt-0.5">
                    {occasion.subtitle}
                  </p>
                  <p className="text-xs text-nojunk-dark/70 mt-2 leading-relaxed">
                    {occasion.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-nojunk-brown/10 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-nojunk-brown/70 font-medium">
                    Custom boxes available
                  </span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-2xs transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
