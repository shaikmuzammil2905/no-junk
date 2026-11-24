import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_PHONE, buildWhatsAppUrl } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

export const FloatingWhatsApp: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const defaultMessage = `Hello NOJUNK!\n\nI am visiting your website and would love to enquire about your homemade treats and gift packs.\n\nThank you!`;
  const whatsappUrl = buildWhatsAppUrl(defaultMessage);

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Interactive Welcoming Popup */}
      {popupOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-amber-900/15 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Popup Header with Squirrel Badge */}
          <div className="bg-nojunk-dark p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-300/40 bg-nojunk-brown">
                <img
                  src="/assets/nojunk-badge-round.png"
                  alt="nojunk squirrel logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-sm">NOJUNK Support</p>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>K. Neelima is Online</span>
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              aria-label="Close WhatsApp popup"
              className="text-amber-200/80 hover:text-white p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Popup Message Body */}
          <div className="p-4 space-y-3 bg-[#FDFBF7]">
            <div className="bg-amber-100/60 p-3 rounded-xl border border-amber-200/60 text-xs text-nojunk-dark space-y-1">
              <p className="font-semibold flex items-center gap-1 text-nojunk-brown">
                <Sparkles className="w-3.5 h-3.5 text-nojunk-caramel" />
                <span>Hello! Welcome to NOJUNK.</span>
              </p>
              <p className="text-nojunk-dark/80">
                Looking for something delicious? We're here to help you select the freshest nuts, stuffed Medjool dates, and festive gift boxes.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setPopupOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl text-xs font-semibold shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Us on WhatsApp</span>
              </a>

              <Link
                to="/shop"
                onClick={() => setPopupOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 bg-nojunk-parchment hover:bg-nojunk-card text-nojunk-dark border border-nojunk-brown/15 py-2 px-3 rounded-xl text-xs font-semibold transition-colors"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5 text-nojunk-caramel" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <button
        type="button"
        onClick={() => setPopupOpen((prev) => !prev)}
        aria-label="Contact us on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
        
        {popupOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}

        {/* Hover Tooltip */}
        <span className="hidden md:group-hover:block absolute right-16 top-1/2 -translate-y-1/2 bg-nojunk-dark text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
          Enquire on WhatsApp
        </span>
      </button>
    </div>
  );
};
