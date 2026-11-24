import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ArrowLeft, ShoppingBag } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlistProducts, clearWishlist } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-nojunk-brown/15 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-xs font-semibold text-rose-800 mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            <span>Saved Treats</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-nojunk-dark">
            My Wishlist ({wishlistProducts.length})
          </h1>
          <p className="text-xs sm:text-sm text-nojunk-brown/80 mt-1">
            Treats you have marked to remember or enquire about later.
          </p>
        </div>

        {wishlistProducts.length > 0 && (
          <button
            type="button"
            onClick={clearWishlist}
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline self-start sm:self-auto"
          >
            Clear Entire Wishlist
          </button>
        )}
      </div>

      {/* Wishlist Items Grid */}
      {wishlistProducts.length === 0 ? (
        <div className="text-center py-16 bg-[#FDFBF7] rounded-3xl border border-nojunk-brown/15 p-8 space-y-3">
          <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mx-auto text-rose-400">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-lg font-bold text-nojunk-dark">
            Your wishlist is empty
          </h2>
          <p className="text-xs text-nojunk-brown/70 max-w-sm mx-auto">
            Click the heart icon on any treat in our shop to save it here for quick enquiries.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-nojunk-dark text-white text-xs font-semibold hover:bg-nojunk-chocolate transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explore Treats Catalogue</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
