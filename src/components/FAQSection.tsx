import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const generalEnquiryUrl = buildWhatsAppUrl(
    'Hello NOJUNK!\n\nI have a question regarding your products and gifting options.\n\nThank you!'
  );

  return (
    <section className="py-12 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-xs font-semibold text-nojunk-brown mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-nojunk-caramel" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-nojunk-dark">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-nojunk-brown/80 mt-1">
            Confirmed business information about our treats, gifting, and ordering process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-nojunk-brown/15 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-nojunk-dark hover:text-nojunk-caramel transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`p-1 rounded-full bg-nojunk-parchment transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-amber-100' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-nojunk-brown" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-nojunk-dark/80 leading-relaxed border-t border-nojunk-brown/10 pt-3 bg-amber-50/20">
                    <p>{faq.answer}</p>
                    {faq.answer.includes('WhatsApp') && (
                      <div className="mt-3">
                        <a
                          href={generalEnquiryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Ask Neelima on WhatsApp &rarr;</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
