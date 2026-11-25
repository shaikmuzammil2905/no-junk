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

  const whatsappMessage = getProductEnquiryMessage(product.name);
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  if (layout === 'horizontal') {
    return (
      <div className="group relative bg-[#FCF8F2] rounded-3xl p-5 border-2 border-amber-900/15 shadow-sm hover:shadow-hover hover:border-amber-500/50 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5">
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-nojunk-brown hover:text-rose-600 transition-colors z-10 shadow-2xs"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        <Link
          to={`/product/${product.slug}`}
          className="w-full sm:w-44 h-44 rounded-2xl overflow-hidden bg-white flex items-center justify-center p-2 shrink-0 border border-amber-900/10 group-hover:scale-105 transition-transform duration-300"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </Link>

        <div className="flex-1 flex flex-col justify-between w-full space-y-2.5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-nojunk-goldenBrown">
              {product.categoryLabel}
            </span>
            <Link to={`/product/${product.slug}`}>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-nojunk-dark hover:text-nojunk-goldenBrown transition-colors line-clamp-1 mt-0.5">
                {product.name}
              </h3>
            </Link>
            <p className="text-xs sm:text-sm text-nojunk-dark/75 line-clamp-2 mt-1">
              {product.shortDescription}
            </p>
            <p className="text-xs text-nojunk-goldenBrown font-medium italic mt-2">
              For Enquiry & Orders, please WhatsApp
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 pt-3 border-t border-amber-900/10">
            <span className="text-xs font-bold text-nojunk-goldenBrown">
              Custom Homemade Batch
            </span>

            <div className="flex items-center gap-2">
              <Link
                to={`/product/${product.slug}`}
                className="text-xs font-bold text-nojunk-dark hover:text-white hover:bg-nojunk-dark px-4 py-2 rounded-xl bg-amber-100/70 border border-amber-900/15 transition-colors"
              >
                Select Product &rarr;
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xs transition-transform active:scale-95"
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

  // Grid layout
  return (
    <div className="group relative bg-[#FCF8F2] rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-amber-900/15 sm:border-2 shadow-sm hover:shadow-hover hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {/* Top badges */}
      <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 flex items-center gap-1">
        {product.isFeatured ? (
          <span className="bg-nojunk-dark text-amber-200 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full border border-amber-400/40 flex items-center gap-1 shadow-sm">
            <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-amber-300" />
            <span>Crown Jewel</span>
          </span>
        ) : product.isBestSeller ? (
          <span className="bg-amber-100 text-nojunk-goldenBrown text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full border border-amber-300/40 flex items-center gap-0.5 shadow-2xs">
            <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-nojunk-caramel" />
            <span>Bestseller</span>
          </span>
        ) : null}
      </div>

      <button
        type="button"
        onClick={() => toggleWishlist(product.id)}
        aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-1.5 sm:p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-nojunk-brown hover:text-rose-600 transition-colors z-10 shadow-2xs"
      >
        <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
      </button>

      {/* Image container */}
      <Link
        to={`/product/${product.slug}`}
        className="w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-white flex items-center justify-center p-1.5 sm:p-2 mb-2 sm:mb-3.5 relative group border border-amber-900/10"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg sm:rounded-xl group-hover:scale-108 transition-transform duration-300"
          loading="lazy"
        />
      </Link>

      {/* Content */}
      <div className="space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-nojunk-goldenBrown">
            {product.categoryLabel}
          </span>
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-serif text-xs sm:text-lg font-bold text-nojunk-dark group-hover:text-nojunk-goldenBrown transition-colors line-clamp-1 mt-0.5">
              {product.name}
            </h3>
          </Link>
          <p className="text-[11px] sm:text-xs text-nojunk-dark/75 line-clamp-1 sm:line-clamp-2 mt-0.5 sm:mt-1 hidden xs:block">
            {product.shortDescription}
          </p>
          <p className="text-[10px] sm:text-xs text-nojunk-goldenBrown font-medium italic pt-0.5">
            For Enquiry & Orders, please WhatsApp
          </p>
        </div>

        {/* Actions: Select Product & Enquire on WhatsApp (No Prices) */}
        <div className="pt-2 sm:pt-2.5 border-t border-amber-900/10 flex items-center justify-between gap-1 sm:gap-2">
          <Link
            to={`/product/${product.slug}`}
            className="flex-1 text-center text-[10px] sm:text-xs font-bold text-nojunk-dark hover:bg-nojunk-dark hover:text-white py-1.5 px-2 rounded-lg sm:rounded-xl bg-amber-100/70 border border-amber-900/15 transition-colors truncate"
          >
            Select Product
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 p-1.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xs transition-transform active:scale-95 text-[10px] sm:text-xs font-bold shrink-0"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
};
