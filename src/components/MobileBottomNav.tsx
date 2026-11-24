import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, Heart, User } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export const MobileBottomNav: React.FC = () => {
  const { wishlistIds } = useWishlist();

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-nojunk-cream/95 backdrop-blur-md border-t border-nojunk-brown/15 py-2 px-6 shadow-lg"
    >
      <div className="flex items-center justify-between max-w-sm mx-auto">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-nojunk-dark font-bold' : 'text-nojunk-brown/60 hover:text-nojunk-dark'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1 rounded-xl ${isActive ? 'bg-amber-100/80 text-nojunk-dark' : ''}`}>
                <Home className="w-5 h-5" />
              </div>
              <span className="text-[11px]">Home</span>
            </>
          )}
        </NavLink>

        {/* Shop */}
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-nojunk-dark font-bold' : 'text-nojunk-brown/60 hover:text-nojunk-dark'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1 rounded-xl ${isActive ? 'bg-amber-100/80 text-nojunk-dark' : ''}`}>
                <Grid className="w-5 h-5" />
              </div>
              <span className="text-[11px]">Shop</span>
            </>
          )}
        </NavLink>

        {/* Wishlist */}
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `relative flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-nojunk-dark font-bold' : 'text-nojunk-brown/60 hover:text-nojunk-dark'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1 rounded-xl relative ${isActive ? 'bg-amber-100/80 text-nojunk-dark' : ''}`}>
                <Heart className="w-5 h-5" />
                {wishlistIds.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                    {wishlistIds.length}
                  </span>
                )}
              </div>
              <span className="text-[11px]">Wishlist</span>
            </>
          )}
        </NavLink>

        {/* Account / Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-nojunk-dark font-bold' : 'text-nojunk-brown/60 hover:text-nojunk-dark'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1 rounded-xl ${isActive ? 'bg-amber-100/80 text-nojunk-dark' : ''}`}>
                <User className="w-5 h-5" />
              </div>
              <span className="text-[11px]">Contact</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
