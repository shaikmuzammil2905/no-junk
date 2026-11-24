import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, getGiftingEnquiryMessage } from '../utils/whatsapp';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const category = CATEGORIES.find((c) => c.id === categorySlug);
  const categoryProducts = PRODUCTS.filter((p) => p.category === categorySlug);

  const enquiryUrl = buildWhatsAppUrl(
    category ? getGiftingEnquiryMessage(category.name) : 'Hello NOJUNK!'
  );

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-2xl font-bold text-nojunk-dark">Category Not Found</h1>
        <p className="text-sm text-nojunk-brown/70">
          We could not find the specified treats category.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-nojunk-dark text-white px-5 py-2.5 rounded-full text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View All Products</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Category Hero Banner */}
      <div className="rounded-3xl bg-[#F6EFE6] border border-amber-900/15 p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-nojunk-brown hover:text-nojunk-dark"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Categories</span>
            </Link>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-nojunk-dark">
              {category.name}
            </h1>

            <p className="text-sm sm:text-base text-nojunk-dark/80 max-w-xl leading-relaxed">
              {category.description}
            </p>

            <div className="pt-2">
              <a
                href={enquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire about {category.name} on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-white p-3 border border-amber-900/10 shadow-soft flex items-center justify-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-nojunk-dark">
            Treats in this Category ({categoryProducts.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
