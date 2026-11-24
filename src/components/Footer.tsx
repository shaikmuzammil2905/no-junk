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
    <footer className="bg-nojunk-dark text-amber-100/90 pt-16 pb-28 md:pb-16 border-t border-amber-900/40 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nojunk-caramel/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nojunk-caramel/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info & Squirrel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-nojunk-caramel shadow-md shrink-0 bg-nojunk-brown">
                <img
                  src="/assets/nojunk-badge-round.png"
                  alt="nojunk squirrel emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-script text-3xl font-bold text-white tracking-wide">
                  nojunk
                </h3>
                <p className="text-xs text-nojunk-caramel font-semibold uppercase tracking-wider">
                  Only nuts.. nothing else!!
                </p>
              </div>
            </div>

            <p className="text-sm text-amber-200/80 leading-relaxed max-w-sm">
              A bespoke homemade treats brand built on one pure promise: only wholesome nuts, fleshy Medjool dates, and artisanal chocolate. No preservatives, no shortcuts.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800/40 text-xs text-amber-200 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-nojunk-caramel" />
                <span>GST Applied / In Progress</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800/40 text-xs text-amber-200 font-medium">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>Small Batch Homemade</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-nojunk-caramel uppercase font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-nojunk-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-nojunk-caramel/60" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-nojunk-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-nojunk-caramel/60" />
                  <span>Shop Catalogue</span>
                </Link>
              </li>
              <li>
                <Link to="/gifting" className="hover:text-nojunk-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-nojunk-caramel/60" />
                  <span>Gift Collection</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-nojunk-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-nojunk-caramel/60" />
                  <span>Our Story</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-nojunk-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-nojunk-caramel/60" />
                  <span>Contact Neelima</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-nojunk-gold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-nojunk-caramel/60" />
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-nojunk-caramel uppercase font-sans">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/loose-nuts" className="hover:text-nojunk-gold transition-colors">
                  Loose Nuts
                </Link>
              </li>
              <li>
                <Link to="/category/gift-packs" className="hover:text-nojunk-gold transition-colors">
                  Gift Packs & Boxes
                </Link>
              </li>
              <li>
                <Link to="/category/chocolate-specials" className="hover:text-nojunk-gold transition-colors">
                  Chocolate Specials
                </Link>
              </li>
              <li>
                <Link to="/product/stuffed-studded-chocolate-medjool-dates" className="hover:text-nojunk-gold transition-colors text-amber-300 font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-nojunk-caramel" />
                  <span>Signature Treat</span>
                </Link>
              </li>
              <li>
                <Link to="/product/assorted-nuts-honey" className="hover:text-nojunk-gold transition-colors">
                  Nuts with Honey (₹40)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-nojunk-caramel uppercase font-sans">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <p className="text-white font-medium">Founder: {BUSINESS_OWNER}</p>
              
              <a
                href={`https://wa.me/91${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {WHATSAPP_PHONE}</span>
              </a>

              <a
                href={`tel:${WHATSAPP_PHONE}`}
                className="flex items-center gap-2 hover:text-nojunk-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-nojunk-caramel shrink-0" />
                <span>Call: {WHATSAPP_PHONE}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="flex items-center gap-2 hover:text-nojunk-gold transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-nojunk-caramel shrink-0" />
                <span>{BUSINESS_EMAIL}</span>
              </a>

              <p className="text-xs text-amber-200/60 pt-2 flex items-center gap-1">
                <Clock className="w-3 h-3 text-nojunk-caramel" />
                <span>Enquiries answered promptly 9 AM - 9 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 mt-8 border-t border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60">
          <p>© {new Date().getFullYear()} nojunk. All rights reserved. Crafted with care by K. Neelima.</p>
          <p className="flex items-center gap-1.5">
            <span>Only nuts, dates & chocolate</span>
            <span className="text-nojunk-caramel">•</span>
            <span>No junk added</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
