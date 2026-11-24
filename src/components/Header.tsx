import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Phone,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Gift
} from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { WHATSAPP_PHONE } from '../utils/whatsapp';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { wishlistIds } = useWishlist();
  const { totalCount, setIsOpen: setCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Loose Nuts', path: '/category/loose-nuts' },
    { name: 'Gift Packs', path: '/category/gift-packs' },
    { name: 'Chocolate Specials', path: '/category/chocolate-specials' },
    { name: 'Gifting', path: '/gifting' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const currentTab = location.pathname === '/' 
    ? 'home' 
    : location.pathname.startsWith('/shop') 
      ? 'shop' 
      : location.pathname === '/about' 
        ? 'about' 
        : '';

  return (
    <>
      {/* Top Luxury Announcement Bar (Hidden on Mobile View as requested) */}
      <div className="hidden md:flex bg-gradient-to-r from-nojunk-dark via-nojunk-chocolate to-nojunk-dark text-amber-100/95 text-xs py-2 px-4 text-center font-medium tracking-wide items-center justify-center gap-2 border-b border-amber-500/20 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-nojunk-gold animate-pulse" />
        <span className="font-serif">Homemade with Love • 100% Pure Nuts, Dates & Chocolate • Only nuts.. nothing else!!</span>
        <span className="hidden sm:inline text-nojunk-gold">•</span>
        <a
          href={`https://wa.me/91${WHATSAPP_PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 text-amber-300 font-bold hover:text-white transition-colors ml-1"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp: {WHATSAPP_PHONE}</span>
        </a>
      </div>

      {/* Main Grand Header */}
      <header
        className={`sticky top-0 z-40 w-full max-w-full overflow-hidden transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5EE]/95 backdrop-blur-md shadow-md border-b border-amber-900/15 py-2.5'
            : 'bg-[#FAF5EE] py-3.5 border-b border-amber-900/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Prominent Large Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-4 group shrink-0">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-nojunk-gold shadow-md bg-white transition-transform duration-300 group-hover:scale-105 p-0.5 shrink-0 flex items-center justify-center">
                <img
                  src="/assets/nojunk-badge-round.png"
                  alt="nojunk circular squirrel logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-script text-3xl sm:text-4xl md:text-5xl font-bold text-nojunk-dark tracking-tight leading-none group-hover:text-nojunk-goldenBrown transition-colors">
                  nojunk
                </span>
                <span className="font-serif italic text-xs sm:text-sm text-nojunk-goldenBrown font-semibold tracking-wide mt-1">
                  only nuts..nothing else!!
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              {navLinks.slice(0, 7).map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-nojunk-dark text-amber-200 shadow-sm border border-amber-500/30'
                        : 'text-nojunk-dark hover:text-nojunk-goldenBrown hover:bg-amber-100/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Search, Wishlist, Cart, Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search products"
                className="p-2.5 text-nojunk-dark hover:text-nojunk-goldenBrown hover:bg-amber-100/60 rounded-full transition-colors border border-amber-900/10"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="relative p-2.5 text-nojunk-dark hover:text-rose-600 hover:bg-amber-100/60 rounded-full transition-colors border border-amber-900/10"
              >
                <Heart className="w-5 h-5" />
                {wishlistIds.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale">
                    {wishlistIds.length}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                aria-label="Enquiry Basket"
                className="relative p-2.5 text-nojunk-dark hover:text-nojunk-goldenBrown hover:bg-amber-100/60 rounded-full transition-colors border border-amber-900/10"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-nojunk-goldenBrown text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden p-2.5 text-nojunk-dark hover:bg-amber-100/60 rounded-full transition-colors border border-amber-900/10 ml-1"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Reference Search Bar */}
          <div className="lg:hidden mt-3 pt-2.5 border-t border-amber-900/10">
            <form onSubmit={handleMobileSearchSubmit} className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-nojunk-brown/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search nuts, dates, chocolate..."
                className="w-full bg-white pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-amber-900/20 focus:outline-none focus:border-nojunk-caramel focus:ring-1 focus:ring-nojunk-caramel/40 placeholder:text-nojunk-brown/50 shadow-2xs"
              />
            </form>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF5EE] z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-amber-900/15 flex items-center justify-between bg-gradient-to-r from-amber-100/70 to-amber-50">
          <div className="flex items-center gap-3">
            <img
              src="/assets/nojunk-badge-round.png"
              alt="nojunk logo"
              className="w-14 h-14 rounded-full border-2 border-nojunk-gold shadow-sm"
            />
            <div>
              <h2 className="font-script text-3xl font-bold text-nojunk-dark leading-none">nojunk</h2>
              <p className="font-serif italic text-[11px] text-nojunk-goldenBrown font-semibold mt-0.5">
                Only nuts.. nothing else!!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-1.5 text-nojunk-dark hover:bg-amber-200/50 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-nojunk-dark text-amber-200 shadow-sm'
                    : 'text-nojunk-dark hover:bg-amber-100/60'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-200' : 'text-nojunk-brown/40'}`} />
              </Link>
            );
          })}

          <div className="pt-3 mt-3 border-t border-amber-900/15">
            <Link
              to="/gifting"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 bg-amber-100/70 rounded-xl text-nojunk-dark border border-amber-300/60 font-semibold text-sm"
            >
              <Gift className="w-5 h-5 text-nojunk-goldenBrown" />
              <span>Occasion Gifting Collection</span>
            </Link>
          </div>
        </nav>

        <div className="p-5 border-t border-amber-900/15 bg-gradient-to-b from-transparent to-amber-100/40 space-y-3">
          <div className="text-xs text-nojunk-brown">
            <p className="font-bold text-nojunk-dark">Founder & Curator: K. Neelima</p>
            <p>Homemade in small hygienic batches</p>
          </div>
          <a
            href={`https://wa.me/91${WHATSAPP_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`tel:${WHATSAPP_PHONE}`}
            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-nojunk-dark border border-amber-900/20 py-2.5 px-4 rounded-xl font-semibold text-xs transition-colors"
          >
            <Phone className="w-4 h-4 text-nojunk-goldenBrown" />
            <span>Call: {WHATSAPP_PHONE}</span>
          </a>
        </div>
      </aside>
    </>
  );
};
