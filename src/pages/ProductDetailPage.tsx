import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import {
  Heart,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Package,
  Clock,
  ArrowLeft,
  Share2,
  Check
} from 'lucide-react';
import { buildWhatsAppUrl, getProductEnquiryMessage } from '../utils/whatsapp';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.slug === slug);

  // Fallback if product not found
  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-2xl font-bold text-nojunk-dark">Treat Not Found</h1>
        <p className="text-sm text-nojunk-brown/70">
          The requested product could not be located in our catalogue.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-nojunk-dark text-white px-5 py-2.5 rounded-full text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Shop Catalogue</span>
        </Link>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedVariant, setSelectedVariant] = useState(
    product.selectedVariant || product.variants[0]?.label || ''
  );
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync state on slug change
  useEffect(() => {
    setActiveImage(product.images[0]);
    setSelectedVariant(product.selectedVariant || product.variants[0]?.label || '');
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.slug]);

  const isFavorited = isInWishlist(product.id);

  // Price calculations
  const currentVariantObj = product.variants.find((v) => v.label === selectedVariant);
  const unitPrice = currentVariantObj?.price ?? product.price;
  const totalPrice = unitPrice ? unitPrice * quantity : undefined;

  // Prefilled dynamic WhatsApp enquiry message
  const whatsappMessage = getProductEnquiryMessage(
    product.name,
    `${selectedVariant} (Qty: ${quantity})`,
    totalPrice ? `₹${totalPrice}` : product.priceNote
  );
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  // Related products
  const relatedProducts = PRODUCTS.filter((p) =>
    product.relatedProductIds.includes(p.id)
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between text-xs text-nojunk-brown">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-nojunk-dark">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-nojunk-dark">Shop</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:text-nojunk-dark">
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-nojunk-dark font-semibold truncate max-w-[180px] sm:max-w-none">
            {product.name}
          </span>
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1 text-xs text-nojunk-brown hover:text-nojunk-dark bg-white px-2.5 py-1 rounded-lg border border-nojunk-brown/15 shadow-2xs"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600">Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </>
          )}
        </button>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image */}
          <div className="relative aspect-square w-full rounded-3xl bg-[#F6EFE6] border border-amber-900/15 overflow-hidden shadow-card flex items-center justify-center p-6 group">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-108"
            />

            {/* Wishlist button */}
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm text-nojunk-brown hover:text-rose-600 transition-colors shadow-sm"
            >
              <Heart className={`w-5 h-5 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            {product.isFeatured && (
              <div className="absolute top-4 left-4 bg-nojunk-dark text-amber-200 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-nojunk-caramel" />
                <span>Signature Treat</span>
              </div>
            )}
          </div>

          {/* Thumbnail strip */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden bg-white p-1.5 border-2 transition-all shrink-0 ${
                    activeImage === img
                      ? 'border-nojunk-dark shadow-sm'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} angle ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Information & Ordering */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-nojunk-caramel mb-1">
              {product.categoryLabel}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-nojunk-dark leading-tight">
              {product.name}
            </h1>
            {product.tagline && (
              <p className="font-serif italic text-sm sm:text-base text-nojunk-brown mt-1">
                "{product.tagline}"
              </p>
            )}
          </div>

          {/* Price display */}
          <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60 flex items-baseline justify-between gap-4">
            <div>
              <span className="text-xs text-nojunk-brown font-medium block">
                {product.price ? 'Price' : 'Pricing Option'}
              </span>
              {unitPrice ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-nojunk-dark font-sans">
                    ₹{unitPrice * quantity}
                  </span>
                  {quantity > 1 && (
                    <span className="text-xs text-nojunk-brown">
                      (₹{unitPrice} each)
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-sm font-semibold text-nojunk-dark">
                  {product.priceNote}
                </span>
              )}
            </div>

            <div className="text-right">
              <span className="text-[11px] text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full font-medium inline-block">
                Homemade Fresh
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-nojunk-brown">
              About This Treat
            </h3>
            <p className="text-sm text-nojunk-dark/80 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Pack Size / Variant Selector */}
          {product.variants.length > 0 && (
            <div className="space-y-2 pt-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-nojunk-brown block">
                Select Pack Size / Quantity:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() => setSelectedVariant(v.label)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      selectedVariant === v.label
                        ? 'bg-nojunk-dark text-white shadow-sm'
                        : 'bg-white border border-nojunk-brown/20 text-nojunk-dark hover:bg-amber-100/50'
                    }`}
                  >
                    <span>{v.label}</span>
                    {v.price && <span className="ml-1.5 opacity-80 font-bold">₹{v.price}</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-nojunk-brown">
              Quantity:
            </span>
            <div className="flex items-center border border-nojunk-brown/20 rounded-xl overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1.5 hover:bg-amber-100 text-nojunk-dark font-bold text-sm"
              >
                -
              </button>
              <span className="px-4 py-1.5 text-xs font-bold text-nojunk-dark">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1.5 hover:bg-amber-100 text-nojunk-dark font-bold text-sm"
              >
                +
              </button>
            </div>
          </div>

          {/* WhatsApp Primary Enquiry CTA + Add to Cart */}
          <div className="pt-4 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base shadow-md transition-all duration-200 hover:shadow-lg active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="w-full flex items-center justify-center gap-2 bg-nojunk-surface hover:bg-amber-100/60 text-nojunk-dark border border-nojunk-brown/25 py-3 px-6 rounded-2xl font-semibold text-sm transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-nojunk-caramel" />
              <span>Add to Enquiry Basket</span>
            </button>

            <p className="text-[11px] text-center text-nojunk-brown/70">
              Direct connection with curator K. Neelima. Fresh batches prepared upon order confirmation.
            </p>
          </div>

          {/* Product Highlights */}
          {product.highlights && (
            <div className="pt-4 border-t border-nojunk-brown/15 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-nojunk-brown">
                Highlights & Freshness
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-nojunk-dark/80">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-nojunk-caramel shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Storage Instructions */}
          {product.storageInfo && (
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/50 text-xs text-nojunk-dark/80 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-nojunk-caramel shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-nojunk-dark">Storage Care: </span>
                {product.storageInfo}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="pt-10 border-t border-nojunk-brown/15 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-nojunk-dark">
              Related Treats You May Love
            </h2>
            <Link
              to="/shop"
              className="text-xs font-semibold text-nojunk-dark hover:text-nojunk-caramel"
            >
              Explore All Treats &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
