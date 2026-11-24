import React, { useState } from 'react';
import { GIFTING_OCCASIONS } from '../data/products';
import { Gift, MessageCircle, Sparkles, Check, Heart, ShieldCheck } from 'lucide-react';
import { buildWhatsAppUrl, getGiftingEnquiryMessage } from '../utils/whatsapp';

export const GiftingPage: React.FC = () => {
  const [selectedOccasion, setSelectedOccasion] = useState(GIFTING_OCCASIONS[0].title);
  const [approxCount, setApproxCount] = useState('10 - 25 boxes');
  const [customNote, setCustomNote] = useState('');

  const handleBuildEnquiry = () => {
    let msg = `Hello NOJUNK!\n\nI would like to enquire about bespoke gifting:\n• Occasion: ${selectedOccasion}\n• Quantity / Boxes: ${approxCount}`;
    if (customNote.trim()) {
      msg += `\n• Special Request: ${customNote.trim()}`;
    }
    msg += `\n\nPlease share the available gift box designs, packaging options, and pricing.\n\nThank you!`;
    return buildWhatsAppUrl(msg);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12">
      {/* Gifting Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-xs font-semibold text-nojunk-brown">
          <Gift className="w-3.5 h-3.5 text-nojunk-caramel" />
          <span>Luxury Homemade Gifting</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-nojunk-dark">
          Make Every Occasion Sweeter
        </h1>
        <p className="text-sm sm:text-base text-nojunk-brown/80 max-w-xl mx-auto">
          Thoughtfully packed nuts, dates and chocolate treats for the people who matter most. Beautiful satin finishes, gold tags, and custom selections.
        </p>
      </div>

      {/* Occasion Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GIFTING_OCCASIONS.map((occasion) => {
          const directUrl = buildWhatsAppUrl(getGiftingEnquiryMessage(occasion.title));

          return (
            <div
              key={occasion.id}
              className="bg-[#FDFBF7] rounded-3xl p-6 border border-nojunk-brown/15 shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-full h-48 rounded-2xl overflow-hidden bg-amber-50/50 p-2 mb-4 flex items-center justify-center relative">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-nojunk-brown shadow-2xs">
                    {occasion.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-nojunk-dark group-hover:text-nojunk-caramel transition-colors">
                  {occasion.title}
                </h3>
                <p className="text-xs font-semibold text-nojunk-caramel mt-0.5">
                  {occasion.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-nojunk-dark/75 mt-2.5 leading-relaxed">
                  {occasion.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-nojunk-brown/10 flex items-center justify-between">
                <span className="text-xs text-nojunk-brown font-medium">
                  Customization ready
                </span>
                <a
                  href={directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-2xs transition-transform active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Gifting Enquiry Builder */}
      <div className="rounded-3xl bg-[#F6EFE6] border border-amber-900/15 p-6 sm:p-10 shadow-card">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-semibold uppercase text-nojunk-caramel tracking-wider">
              Fast Gifting Inquiry
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-nojunk-dark">
              Customize Your Gifting Order
            </h2>
            <p className="text-xs sm:text-sm text-nojunk-brown/80">
              Select your event parameters and send a pre-formatted message straight to K. Neelima.
            </p>
          </div>

          <div className="space-y-4 bg-white p-6 rounded-2xl border border-nojunk-brown/15 shadow-2xs">
            {/* Occasion Selector */}
            <div>
              <label className="text-xs font-semibold text-nojunk-dark block mb-1.5">
                Select Gifting Occasion:
              </label>
              <select
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-nojunk-brown/20 text-xs sm:text-sm bg-nojunk-surface focus:outline-none focus:border-nojunk-caramel"
              >
                {GIFTING_OCCASIONS.map((occ) => (
                  <option key={occ.id} value={occ.title}>
                    {occ.title} ({occ.subtitle})
                  </option>
                ))}
              </select>
            </div>

            {/* Approximate count */}
            <div>
              <label className="text-xs font-semibold text-nojunk-dark block mb-1.5">
                Estimated Number of Boxes / Pouches:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['1 - 5 boxes', '10 - 25 boxes', '25 - 50 boxes', '50+ Bulk'].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setApproxCount(cnt)}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                      approxCount === cnt
                        ? 'bg-nojunk-dark text-white border-nojunk-dark shadow-2xs'
                        : 'bg-nojunk-parchment text-nojunk-dark border-nojunk-brown/15 hover:bg-amber-100/50'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional note */}
            <div>
              <label className="text-xs font-semibold text-nojunk-dark block mb-1.5">
                Special Customization Requests (Optional):
              </label>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="e.g. Include stuffed dates and chocolate dipped nuts, gold ribbon finish..."
                rows={2}
                className="w-full p-2.5 rounded-xl border border-nojunk-brown/20 text-xs sm:text-sm bg-nojunk-surface focus:outline-none focus:border-nojunk-caramel placeholder:text-nojunk-brown/40"
              />
            </div>

            {/* Submit button */}
            <a
              href={handleBuildEnquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-transform active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Gifting Enquiry via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
