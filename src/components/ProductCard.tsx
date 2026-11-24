import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { buildWhatsAppUrl, getProductEnquiryMessage } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'horizontal';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, layout = 'grid' }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.selectedVariant || product.variants[0]?.label || ''
  );

  const isFavorited = isInWishlist(product.id);

  // Determine price based on selected variant
  const currentVariantObj = product.variants.find((v) => v.label === selectedVariant);
  const displayPrice = currentVariantObj?.price ?? product.price;

  // WhatsApp enquiry link with dynamically generated prefilled message
  const whatsappMessage = getProductEnquiryMessage(
    product.name,
    selectedVariant,
    displayPrice ? `₹${displayPrice}` : product.priceNote
  );
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  if (layout === 'horizontal') {
    return (
      <div className="group relative bg-[#FDFBF7] rounded-2xl p-4 border border-nojunk-brown/15 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col sm:flex-row items-center gap-4">
        {/* Wishlist toggle */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-nojunk-brown hover:text-rose-600 transition-colors z-10"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Thumbnail */}
        <Link
          to={`/product/${product.slug}`}
          className="w-full sm:w-36 h-36 rounded-xl overflow-hidden bg-amber-50/50 flex items-center justify-center p-2 shrink-0"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-between w-full space-y-2">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-nojunk-caramel">
              {product.categoryLabel}
            </span>
            <Link to={`/product/${product.slug}`}>
              <h3 className="font-serif text-lg font-bold text-nojunk-dark hover:text-nojunk-caramel transition-colors line-clamp-1">
                {product.name}
              </h3>
            </Link>
            <p className="text-xs text-nojunk-dark/70 line-clamp-2 mt-1">
              {product.shortDescription}
            </p>
          </div>

          {/* Variant chips */}
          {product.variants.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {product.variants.map((v) => (
                <button
                  key={v.label}
                  type="button"
                  onClick={() => setSelectedVariant(v.label)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all ${
                    selectedVariant === v.label
                      ? 'bg-nojunk-dark text-white shadow-xs'
                      : 'bg-nojunk-parchment text-nojunk-brown hover:bg-amber-100/60'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          )}

          {/* Price & Actions */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <div>
              {displayPrice ? (
                <span className="text-lg font-bold text-nojunk-dark font-sans">
                  ₹{displayPrice}
                </span>
              ) : (
                <span className="text-xs font-medium text-nojunk-brown">
                  {product.priceNote}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Link
                to={`/product/${product.slug}`}
                className="text-xs font-semibold text-nojunk-dark hover:text-nojunk-caramel px-3 py-2 rounded-xl bg-nojunk-parchment transition-colors"
              >
                View
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid layout matching the reference mobile card!
  return (
    <div className="group relative bg-[#FDFBF7] rounded-2xl p-3 sm:p-4 border border-nojunk-brown/15 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between">
      {/* Top badges: Bestseller / Wishlist */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1">
        {product.isBestSeller && (
          <span className="bg-amber-100 text-nojunk-brown text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-300/40 flex items-center gap-0.5 shadow-2xs">
            <Sparkles className="w-2.5 h-2.5 text-nojunk-caramel" />
            <span>Popular</span>
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={() => toggleWishlist(product.id)}
        aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm text-nojunk-brown hover:text-rose-600 transition-colors z-10 shadow-2xs"
      >
        <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
      </button>

      {/* Image container */}
      <Link
        to={`/product/${product.slug}`}
        className="w-full aspect-square rounded-xl overflow-hidden bg-amber-50/40 flex items-center justify-center p-3 mb-3 relative group"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-300"
          loading="lazy"
        />
      </Link>

      {/* Content */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-nojunk-caramel">
            {product.categoryLabel}
          </span>
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-serif text-base sm:text-lg font-bold text-nojunk-dark hover:text-nojunk-caramel transition-colors line-clamp-1 mt-0.5">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-nojunk-dark/70 line-clamp-2 mt-1">
            {product.shortDescription}
          </p>
        </div>

        {/* Variant selection pills (matching the reference mockup chips!) */}
        {product.variants.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.variants.map((v) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setSelectedVariant(v.label)}
                className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedVariant === v.label
                    ? 'bg-nojunk-dark text-white shadow-2xs'
                    : 'bg-nojunk-parchment text-nojunk-brown hover:bg-amber-100/60'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        {/* Pricing & WhatsApp Enquiry button */}
        <div className="pt-2 border-t border-nojunk-brown/10 flex items-center justify-between gap-2">
          <div>
            {displayPrice ? (
              <div className="flex items-baseline gap-1">
                <span className="text-base sm:text-lg font-bold text-nojunk-dark font-sans">
                  ₹{displayPrice}
                </span>
              </div>
            ) : (
              <span className="text-[11px] font-medium text-nojunk-brown">
                {product.priceNote || 'Enquire for Price'}
              </span>
            )}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-nojunk-dark hover:bg-nojunk-chocolate text-white px-3 py-2 rounded-xl text-xs font-medium shadow-2xs transition-all active:scale-95"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xs:inline">Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
};
