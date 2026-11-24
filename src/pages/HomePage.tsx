import React from 'react';
import { Link } from 'react-router-dom';
import { HeroCarousel } from '../components/HeroCarousel';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { FeaturedProduct } from '../components/FeaturedProduct';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { GiftingSection } from '../components/GiftingSection';
import { FAQSection } from '../components/FAQSection';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles, MessageCircle, Star, Heart, Phone, ShieldCheck, Clock } from 'lucide-react';
import { WHATSAPP_PHONE, buildWhatsAppUrl } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  // Select top bestsellers
  const bestSellers = PRODUCTS.slice(0, 4);

  const directChatUrl = buildWhatsAppUrl(
    'Hello NOJUNK!\n\nI would love to learn more about your homemade treats collection.\n\nThank you!'
  );

  return (
    <div className="space-y-10 sm:space-y-16">
      {/* 1. Grand Bright Hero Section (Using image copy 3.png) */}
      <HeroCarousel />

      {/* 2. Shop by Category (Using real images copy 5, 6, 7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <span className="text-2xl">🌿</span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-nojunk-dark text-center">
            Shop by Category
          </h2>
          <span className="text-2xl">🌿</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 3. Best Sellers Section with Customer's Exact Treats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-nojunk-dark">
                Best Sellers & Signature Treats
              </h2>
              <span className="text-xl">🌿</span>
            </div>
            <p className="text-xs sm:text-sm text-nojunk-brown/85 mt-1 font-medium">
              Handmade fresh with 100% Medjool dates, wholesome nuts, and rich couverture chocolate.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-nojunk-dark hover:text-nojunk-goldenBrown group bg-white px-4 py-2 rounded-full border border-amber-900/15 shadow-2xs"
          >
            <span>View All Treats</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. The Crown Jewel (Grand Featured Banner from image copy 14.png) */}
      <FeaturedProduct />

      {/* 5. Grand About Us Banner (Reproducing image copy 9.png with responsive WhatsApp Button) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/40 bg-gradient-to-r from-[#FAF3EA] to-[#F5E7D4]">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[460px]">
            <img
              src="/assets/about-grand-banner.png"
              alt="nojunk squirrel emblem, luxury chocolate gifts, nuts, dates, and WhatsApp contact"
              className="w-full h-full object-cover object-center"
            />

            {/* Interactive WhatsApp and call button overlaid on the banner */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 sm:pb-12 z-10">
              <a
                href={`https://wa.me/91${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2B1507] via-[#4A2610] to-[#2B1507] hover:from-[#3D200B] hover:to-[#3D200B] text-amber-200 border-2 border-amber-400/80 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <Phone className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
                <MessageCircle className="w-5 h-5 text-emerald-400 animate-pulse" />
                <span className="font-sans tracking-wide text-white font-extrabold">
                  {WHATSAPP_PHONE}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose NOJUNK? (4 Premium Cards from image copy 15.png) */}
      <WhyChooseUs />

      {/* 7. Bespoke Gifting Experience (image copy 15.png) */}
      <GiftingSection />

      {/* 8. Customer Love & Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-xs font-semibold text-nojunk-goldenBrown">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Loved by Families</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-nojunk-dark">
            What Our Customers Say
          </h2>
          <p className="text-xs sm:text-sm text-nojunk-brown/80">
            Real feedback from our cherished clients across festivals, weddings, and everyday snacking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FCF8F2] p-6 rounded-3xl border-2 border-amber-900/15 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-nojunk-dark/85 italic leading-relaxed">
              "The Stuffed Chocolate Medjool Dates were the highlight of our Diwali hampers! The crunch of roasted nuts inside the fleshy date with rich chocolate was pure bliss."
            </p>
            <div className="pt-2 border-t border-amber-900/10">
              <p className="font-serif text-sm font-bold text-nojunk-dark">Pooja Sharma</p>
              <p className="text-[11px] text-nojunk-goldenBrown">Festive Gifting Order</p>
            </div>
          </div>

          <div className="bg-[#FCF8F2] p-6 rounded-3xl border-2 border-amber-900/15 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-nojunk-dark/85 italic leading-relaxed">
              "The cute honey nut cups at ₹40 are the smartest return gifts ever! Parents loved them for my daughter's birthday return favors. So neat and wholesome."
            </p>
            <div className="pt-2 border-t border-amber-900/10">
              <p className="font-serif text-sm font-bold text-nojunk-dark">Sunitha Reddy</p>
              <p className="text-[11px] text-nojunk-goldenBrown">Birthday Return Favors (40 cups)</p>
            </div>
          </div>

          <div className="bg-[#FCF8F2] p-6 rounded-3xl border-2 border-amber-900/15 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-nojunk-dark/85 italic leading-relaxed">
              "You can literally taste the freshness. No fake sugar, no artificial smell—just genuine dates, whole almonds, and cashews. Neelima is super helpful on WhatsApp!"
            </p>
            <div className="pt-2 border-t border-amber-900/10">
              <p className="font-serif text-sm font-bold text-nojunk-dark">Dr. Arvind Menon</p>
              <p className="text-[11px] text-nojunk-goldenBrown">Repeat Nutty Dates Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Interactive FAQ Accordion */}
      <FAQSection />

      {/* 10. Fresh Batch WhatsApp Booking Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#231207] via-[#381C0B] to-[#231207] border-2 border-amber-500/40 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-white">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-400 shadow-lg shrink-0 bg-white p-0.5">
              <img
                src="/assets/nojunk-badge-round.png"
                alt="nojunk squirrel brand"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-amber-300 tracking-wider">
                Fresh Batch Booking
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
                Ordering for a celebration or family treat?
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/80 max-w-lg">
                Directly connect with founder K. Neelima on WhatsApp to tailor your treat boxes, select custom ribbons, or request personalized notes.
              </p>
            </div>
          </div>

          <a
            href={directChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg transition-transform duration-200 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp: {WHATSAPP_PHONE}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
