import React from 'react';
import { Leaf, Award, Gift, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Carefully Selected Ingredients',
      description: 'Only wholesome king Medjool dates, fresh crunchy nuts, and rich couverture chocolate. No junk, no fillers.',
    },
    {
      icon: Award,
      title: 'Thoughtfully Crafted Treats',
      description: 'Handcrafted in small batches with meticulous attention to crunch, sweetness, and decadent textures.',
    },
    {
      icon: Gift,
      title: 'Beautifully Presented Gifts',
      description: 'Luxury gift boxes and keepsake packaging that express warmth, sophistication, and pure affection.',
    },
    {
      icon: HeartHandshake,
      title: 'Made with Love',
      description: 'Curated by home artisan K. Neelima, ensuring genuine care and heartfelt hospitality in every box.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F6EFE6] border-y border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-nojunk-caramel">
            The NOJUNK Promise
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-nojunk-dark mt-1">
            Why Choose NOJUNK?
          </h2>
          <p className="text-xs sm:text-sm text-nojunk-brown/80 mt-2">
            Only nuts, dates and chocolate. Wholesome ingredients turned into indulgent, unforgettable treats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 rounded-2xl p-6 border border-amber-900/10 shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-100/70 text-nojunk-brown flex items-center justify-center mb-4 group-hover:bg-nojunk-dark group-hover:text-nojunk-gold transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-base font-bold text-nojunk-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-nojunk-dark/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
