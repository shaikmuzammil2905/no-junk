import React from 'react';
import { FAQSection } from '../components/FAQSection';
import { MessageCircle, HelpCircle } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_PHONE } from '../utils/whatsapp';

export const FAQPage: React.FC = () => {
  const directHelpUrl = buildWhatsAppUrl(
    'Hello NOJUNK!\n\nI have a question that is not covered in the FAQ section.\n\nThank you!'
  );

  return (
    <div className="space-y-8 py-6 sm:py-10">
      <FAQSection />

      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200/60 space-y-3">
          <HelpCircle className="w-8 h-8 text-nojunk-caramel mx-auto" />
          <h3 className="font-serif text-lg font-bold text-nojunk-dark">
            Have a different question?
          </h3>
          <p className="text-xs text-nojunk-brown/80 max-w-md mx-auto">
            Curator K. Neelima will gladly clarify any details regarding pack weights, freshness batches, and custom gift notes.
          </p>
          <a
            href={directHelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us on WhatsApp: {WHATSAPP_PHONE}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
