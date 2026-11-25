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
  Check,
  Crown
} from 'lucide-react';
import { buildWhatsAppUrl, getProductEnquiryMessage } from '../utils/whatsapp';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-nojunk-dark">Treat Not Found</h1>
        <p className="text-sm text-nojunk-brown/70">
          The requested product could not be located in our catalogue.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-nojunk-dark text-amber-200 px-6 py-3 rounded-full text-xs font-bold"
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

  useEffect(() => {
    setActiveImage(product.images[0]);
    setSelectedVariant(product.selectedVariant || product.variants[0]?.label || '');
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.slug]);

  const isFavorited = isInWishlist(product.id);

  const whatsappMessage = getProductEnquiryMessage(product.name);
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => {
      if (a.id === 'stuffed-studded-chocolate-medjool-dates') return -1;
      if (b.id === 'stuffed-studded-chocolate-medjool-dates') return 1;
      return 0;
    })
    .slice(0, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between text-xs text-nojunk-goldenBrown font-semibold">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:underline">Shop</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:underline">
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-nojunk-dark font-bold truncate max-w-[180px] sm:max-w-none">
            {product.name}
          </span>
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1 text-xs text-nojunk-dark hover:text-nojunk-goldenBrown bg-white px-3 py-1.5 rounded-xl border border-amber-900/15 shadow-2xs font-semibold"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600">Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Treat</span>
            </>
          )}
        </button>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square w-full rounded-3xl bg-white border-2 border-amber-500/30 overflow-hidden shadow-card flex items-center justify-center p-4 group">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />

            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm text-nojunk-brown hover:text-rose-600 transition-colors shadow-sm z-10"
            >
              <Heart className={`w-5 h-5 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            {product.isFeatured && (
              <div className="absolute top-4 left-4 bg-nojunk-dark text-amber-200 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-amber-400/40">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>The Crown Jewel</span>
              </div>
            )}
          </div>

          {/* Thumbnail strip */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden bg-white p-1 border-2 transition-all shrink-0 ${
                    activeImage === img
                      ? 'border-amber-500 shadow-md scale-105'
                      : 'border-amber-900/15 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} angle ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-nojunk-goldenBrown mb-1">
              {product.categoryLabel}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-nojunk-dark leading-tight">
              {product.name}
            </h1>
            {product.tagline && (
              <p className="font-serif italic text-sm sm:text-base text-nojunk-goldenBrown font-semibold mt-1">
                "{product.tagline}"
              </p>
            )}
          </div>

          {/* Freshness & Order Status Box (No Prices) */}
          <div className="bg-gradient-to-r from-amber-100/70 via-amber-50 to-amber-100/50 p-4 sm:p-5 rounded-3xl border-2 border-amber-300/70 flex items-center justify-between gap-4 shadow-2xs">
            <div>
              <span className="text-xs text-nojunk-goldenBrown font-bold uppercase tracking-wider block">
                Boutique Availability
              </span>
              <span className="text-sm sm:text-base font-bold text-nojunk-dark">
                Fresh Homemade Batch • Custom Orders
              </span>
            </div>

            <div className="text-right">
              <span className="text-xs text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-full font-bold inline-block border border-emerald-300">
                Available on WhatsApp
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-nojunk-brown">
              About This Homemade Creation
            </h3>
            <p className="text-sm sm:text-base text-nojunk-dark/85 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Order & WhatsApp Enquiry Information (No sizes / quantities mentioned) */}
          <div className="pt-2 pb-1 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-100/70 border border-amber-900/15 text-xs sm:text-sm font-bold text-nojunk-dark">
              <span>✨</span>
              <span>For Enquiry & Orders, please WhatsApp</span>
            </div>
            {product.id === 'stuffed-studded-chocolate-medjool-dates' && (
              <p className="text-xs sm:text-sm font-bold text-amber-900 flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                <span>⭐</span>
                <span>Signature Recipe • Min order: from 9 pieces</span>
              </p>
            )}
            <p className="text-xs text-nojunk-brown/80">
              Custom boxes, fresh batch sizes & festive arrangements prepared to order.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-bold text-sm sm:text-base shadow-lg transition-all duration-200 active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enquire & Order on WhatsApp &rarr;</span>
            </a>

            <button
              type="button"
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="w-full flex items-center justify-center gap-2 bg-[#FCF8F2] hover:bg-amber-100/60 text-nojunk-dark border-2 border-amber-900/20 py-3.5 px-6 rounded-2xl font-bold text-sm transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-nojunk-goldenBrown" />
              <span>Add to Enquiry Basket</span>
            </button>

            <p className="text-xs text-center text-nojunk-brown/80 font-medium">
              Direct connection with curator K. Neelima. Fresh batches prepared upon order confirmation.
            </p>
          </div>

          {/* Highlights */}
          {product.highlights && (
            <div className="pt-4 border-t border-amber-900/15 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-nojunk-brown">
                Freshness & Craft Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-nojunk-dark/85">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-nojunk-goldenBrown shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Storage Instructions */}
          {product.storageInfo && (
            <div className="p-4 rounded-2xl bg-amber-100/50 border border-amber-300/60 text-xs text-nojunk-dark/85 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-nojunk-goldenBrown shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-nojunk-dark">Storage Care: </span>
                {product.storageInfo}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="pt-10 border-t border-amber-900/20 space-y-6">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2">
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-nojunk-dark">
              Related Treats You May Love
            </h2>
            <Link
              to="/shop"
              className="text-xs sm:text-sm font-bold text-nojunk-dark hover:text-nojunk-goldenBrown shrink-0"
            >
              Explore All Treats &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
