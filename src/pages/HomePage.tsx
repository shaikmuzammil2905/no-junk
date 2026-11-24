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
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE, buildWhatsAppUrl } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  // Best sellers for homepage as featured in mobile reference screen 1
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller && !p.isFeatured).slice(0, 3);

  const directChatUrl = buildWhatsAppUrl(
    'Hello NOJUNK!\n\nI would love to learn more about your homemade treats collection.\n\nThank you!'
  );

  return (
    <div className="space-y-6 sm:space-y-12">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Shop by Category (Matching reference screen 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl">🌿</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-nojunk-dark text-center">
            Shop by Category
          </h2>
          <span className="text-xl">🌿</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 3. Best Sellers Section (Matching reference mockup exactly!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🌿</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-nojunk-dark">
                Best Sellers
              </h2>
              <span className="text-lg">🌿</span>
            </div>
            <p className="text-xs sm:text-sm text-nojunk-brown/80 mt-1">
              Our most-loved stuffed dates, chocolate creations, and crunchy nut varieties.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-nojunk-dark hover:text-nojunk-caramel group"
          >
            <span>View All Treats</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Special Featured Product (Crown Jewel) */}
      <FeaturedProduct />

      {/* 5. Why Choose NOJUNK */}
      <WhyChooseUs />

      {/* 6. Gifting Section */}
      <GiftingSection />

      {/* 7. Interactive FAQ Accordion */}
      <FAQSection />

      {/* 8. Bottom Story Banner with Squirrel Mascot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl bg-gradient-to-r from-amber-100/70 via-amber-50 to-amber-100/60 border border-amber-900/15 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-nojunk-caramel shadow-md shrink-0 bg-white">
              <img
                src="/assets/nojunk-badge-round.png"
                alt="nojunk squirrel brand"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase text-nojunk-caramel tracking-wider">
                Handcrafted with Love
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-nojunk-dark">
                Craving custom gift boxes or bulk hampers?
              </h3>
              <p className="text-xs sm:text-sm text-nojunk-brown/80 max-w-lg">
                Directly connect with founder K. Neelima on WhatsApp to tailor your treat boxes, select custom ribbons, or request personalized notes.
              </p>
            </div>
          </div>

          <a
            href={directChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-md transition-transform duration-200 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp: {WHATSAPP_PHONE}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
