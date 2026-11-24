import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { buildWhatsAppUrl, getGiftingEnquiryMessage, getProductEnquiryMessage } from '../utils/whatsapp';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { isInWishlist, toggleWishlist } = useWishlist();

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

  // Use the clean background from image copy 30.png for chocolate specials
  const isChocolate = category.id === 'chocolate-specials';
  const cleanBgImage = isChocolate
    ? '/assets/chocolate-specials-clean-bg.png'
    : category.id === 'gift-packs'
      ? '/assets/cat-gift-packs-real.png'
      : '/assets/cat-loose-nuts-real.png';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      {/* Category Banner with Clean Background (Zero Text Clashing) */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/35 bg-gradient-to-r from-[#FAF3EA] to-[#F5E7D4]">
        {isChocolate ? (
          <div className="relative w-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] flex items-center">
            {/* Clean background image with no baked-in text */}
            <img
              src="/assets/chocolate-specials-clean-bg.png"
              alt="Chocolate Specials"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
            {/* Soft gradient to keep left text crystal clear */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF4EC]/95 via-[#FAF4EC]/80 sm:via-[#FAF4EC]/50 to-transparent" />

            {/* Live clean readable text & button */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-12 text-nojunk-dark max-w-xl space-y-3">
              <div className="flex items-center gap-2 text-xs text-nojunk-goldenBrown font-bold">
                <Link to="/" className="hover:underline">Home</Link>
                <span>&gt;</span>
                <span className="text-nojunk-dark">{category.name}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-nojunk-dark drop-shadow-xs">
                {category.name}
              </h1>

              <p className="font-serif italic text-nojunk-goldenBrown text-sm sm:text-base leading-relaxed font-semibold">
                {category.description}
              </p>

              <div className="pt-2">
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs text-nojunk-goldenBrown font-semibold">
                <Link to="/" className="hover:underline">Home</Link>
                <span>&gt;</span>
                <Link to="/shop" className="hover:underline">Shop</Link>
                <span>&gt;</span>
                <span className="text-nojunk-dark">{category.name}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-nojunk-dark">
                {category.name}
              </h1>

              <p className="text-sm sm:text-base text-nojunk-dark/85 max-w-xl leading-relaxed">
                {category.description}
              </p>

              <div className="pt-2">
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-3xl bg-white p-3 border-2 border-amber-500/30 shadow-md flex items-center justify-center overflow-hidden">
                <img
                  src={cleanBgImage}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Treats in this Category Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-nojunk-dark">
            Treats in this Category ({categoryProducts.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => {
            const isFav = isInWishlist(product.id);
            const whatsappMsg = getProductEnquiryMessage(product.name, product.selectedVariant, product.price);
            const whatsappLink = buildWhatsAppUrl(whatsappMsg);

            return (
              <div
                key={product.id}
                className="bg-[#FCF8F2] rounded-3xl p-4 sm:p-5 border-2 border-amber-900/15 shadow-sm hover:shadow-card hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Wishlist toggle"
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm text-nojunk-brown hover:text-rose-600 transition-colors shadow-2xs z-10"
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>

                <Link
                  to={`/product/${product.slug}`}
                  className="w-full aspect-video sm:aspect-square rounded-2xl overflow-hidden bg-white mb-4 p-2 flex items-center justify-center border border-amber-900/10 group-hover:scale-[1.02] transition-transform duration-300"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </Link>

                <div className="space-y-2">
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="font-serif text-lg font-bold text-nojunk-dark group-hover:text-nojunk-goldenBrown transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-nojunk-dark/75 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between gap-2">
                    <Link
                      to={`/product/${product.slug}`}
                      className="inline-flex items-center gap-1.5 bg-nojunk-dark hover:bg-nojunk-chocolate text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs"
                    >
                      <span>View Details &rarr;</span>
                    </Link>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xs transition-transform active:scale-95"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
