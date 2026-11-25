import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Phone,
  Mail,
  Heart,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight
} from 'lucide-react';
import { WHATSAPP_PHONE, BUSINESS_EMAIL, BUSINESS_OWNER } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#231207] via-[#1F0E04] to-[#170A03] text-amber-100/90 pt-16 pb-28 md:pb-16 border-t-2 border-amber-600/30 relative overflow-hidden">
      {/* Background ambient golden glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info & Large Squirrel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-amber-400 shadow-lg shrink-0 bg-white p-0.5">
                <img
                  src="/assets/nojunk-badge-round.png"
                  alt="nojunk squirrel emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-script text-4xl sm:text-5xl font-bold text-white tracking-wide">
                  nojunk
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-amber-300 font-semibold tracking-wider mt-0.5">
                  Only nuts.. nothing else!!
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed max-w-sm">
              A bespoke homemade treats brand built on one pure promise: only wholesome nuts, fleshy Medjool dates, and artisanal chocolate. No preservatives, no shortcuts.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-700/50 text-xs text-amber-200 font-bold">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>Small Batch Homemade</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-amber-400 uppercase font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400/60" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400/60" />
                  <span>Treats Catalogue</span>
                </Link>
              </li>
              <li>
                <Link to="/gifting" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400/60" />
                  <span>Bespoke Gifting</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400/60" />
                  <span>Our Story</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400/60" />
                  <span>Contact Neelima</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400/60" />
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-amber-400 uppercase font-sans">
              Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/category/gift-packs" className="hover:text-amber-300 transition-colors">
                  Gift Packs & Boxes
                </Link>
              </li>
              <li>
                <Link to="/category/chocolate-specials" className="hover:text-amber-300 transition-colors">
                  Chocolate Specials
                </Link>
              </li>
              <li>
                <Link to="/product/stuffed-studded-chocolate-medjool-dates" className="hover:text-amber-300 transition-colors text-amber-300 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Signature Recipe</span>
                </Link>
              </li>
              <li>
                <Link to="/product/cute-cup-mixed-nuts-honey" className="hover:text-amber-300 transition-colors">
                  Cute Cup Honey Nuts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-amber-400 uppercase font-sans">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <p className="text-white font-bold">Founder & Curator: {BUSINESS_OWNER}</p>
              
              <a
                href={`https://wa.me/91${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {WHATSAPP_PHONE}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="flex items-center gap-2 hover:text-amber-300 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_EMAIL}</span>
              </a>

              <p className="text-xs text-amber-300/70 pt-2 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>Enquiries answered promptly 9 AM - 9 PM IST</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 mt-8 border-t border-amber-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/60">
          <p>© {new Date().getFullYear()} nojunk. All rights reserved. Crafted with care by K. Neelima.</p>
          <p className="flex items-center gap-1.5 font-serif italic text-amber-300">
            <span>Only nuts, dates & chocolate</span>
            <span>•</span>
            <span>No junk added</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
