import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

interface Slide {
  id: number;
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  imageAlt: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    badge: 'Homemade Perfection',
    headline: 'only nuts..\nnothing else!!',
    subheadline: 'Wholesome ingredients. Indulgent treats. Beautiful gifts.',
    description: 'Carefully curated Medjool dates, roasted crunchy nuts, and rich artisanal chocolates crafted fresh in small batches.',
    ctaText: 'Explore Our Collection',
    ctaLink: '/shop',
    image: '/assets/hero-banner-main.png',
    imageAlt: 'Medjool dates, wholesome nuts, luxury gift box and artisan chocolate',
  },
  {
    id: 2,
    badge: 'Artisan Confections',
    headline: 'Chocolate Dipped &\nStuffed Treats',
    subheadline: 'Crunchy golden nuts enrobed in velvety smooth chocolate.',
    description: 'Experience the harmonious blend of tender fleshy Medjool dates and rich chocolate crust.',
    ctaText: 'Discover Chocolates',
    ctaLink: '/category/chocolate-specials',
    image: '/assets/cat-chocolate-hq.png',
    imageAlt: 'Chocolate dipped nut balls and studded nut chocolate slabs',
  },
  {
    id: 3,
    badge: 'Celebrations & Gifting',
    headline: 'Make Every Occasion\nSweeter',
    subheadline: 'Festivals, weddings, corporate milestones and return gift pouches.',
    description: 'Elegantly packaged hampers with silk ribbon finishes that speak volumes of your affection and warmth.',
    ctaText: 'View Gift Packs',
    ctaLink: '/gifting',
    image: '/assets/cat-gift-packs-hq.png',
    imageAlt: 'Luxury dry fruit and stuffed date gifting box with gold ribbon',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-nojunk-parchment/80 via-nojunk-cream to-nojunk-cream py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#F6EFE6] border border-amber-900/10 shadow-card p-6 sm:p-10 lg:p-14 overflow-hidden">
          {/* Subtle botanical / leafy embellishments */}
          <div className="absolute top-4 right-4 text-emerald-800/15 pointer-events-none select-none text-4xl">
            🍃
          </div>
          <div className="absolute bottom-4 left-4 text-amber-800/10 pointer-events-none select-none text-5xl">
            🌰
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[420px]">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${slide.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nojunk-caramel/15 border border-nojunk-caramel/30 text-xs sm:text-sm font-semibold text-nojunk-brown">
                    <Sparkles className="w-3.5 h-3.5 text-nojunk-caramel" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-nojunk-dark font-bold leading-tight whitespace-pre-line tracking-tight">
                    {slide.headline}
                  </h1>

                  <p className="font-serif italic text-base sm:text-lg md:text-xl text-nojunk-brown font-medium">
                    {slide.subheadline}
                  </p>

                  <p className="text-sm sm:text-base text-nojunk-dark/80 max-w-lg leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      to={slide.ctaLink}
                      className="inline-flex items-center gap-2.5 bg-nojunk-dark hover:bg-nojunk-chocolate text-white px-6 py-3 rounded-full font-medium text-sm sm:text-base shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-95"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/product/stuffed-studded-chocolate-medjool-dates"
                      className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold text-nojunk-dark hover:bg-amber-100/70 border border-nojunk-brown/20 transition-colors"
                    >
                      <span>Signature Special</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${slide.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-soft border-2 border-nojunk-caramel/25 bg-amber-50/50 flex items-center justify-center p-2"
                >
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-nojunk-dark shadow-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Pure Homemade</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Controls & Indicators (matching 3 dots from mobile mockup) */}
          <div className="mt-8 flex items-center justify-between pt-4 border-t border-nojunk-brown/10">
            <div className="flex items-center gap-2">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'w-8 bg-nojunk-dark'
                      : 'w-2.5 bg-nojunk-brown/30 hover:bg-nojunk-brown/60'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
                aria-label="Previous slide"
                className="p-2 rounded-full bg-nojunk-surface hover:bg-nojunk-parchment text-nojunk-dark border border-nojunk-brown/15 shadow-sm transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
                aria-label="Next slide"
                className="p-2 rounded-full bg-nojunk-surface hover:bg-nojunk-parchment text-nojunk-dark border border-nojunk-brown/15 shadow-sm transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
