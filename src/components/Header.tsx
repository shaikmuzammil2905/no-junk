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

  // Close mobile drawer on route change
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
    { name: 'Contact Us', path: '/contact' },
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
      {/* Top Announcement Bar */}
      <div className="bg-nojunk-dark text-amber-100/90 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-amber-900/30">
        <Sparkles className="w-3.5 h-3.5 text-nojunk-caramel animate-pulse" />
        <span>Homemade with Love • 100% Wholesome Ingredients • Only nuts.. nothing else!!</span>
        <span className="hidden sm:inline text-nojunk-caramel">•</span>
        <a
          href={`https://wa.me/91${WHATSAPP_PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-nojunk-gold hover:underline"
        >
          <MessageCircle className="w-3 h-3" />
          <span>WhatsApp: {WHATSAPP_PHONE}</span>
        </a>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-nojunk-cream/95 backdrop-blur-md shadow-sm border-b border-nojunk-brown/10 py-2.5'
            : 'bg-nojunk-cream py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Mascot */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-nojunk-caramel/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/nojunk-badge-round.png"
                  alt="nojunk squirrel logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-script text-2xl sm:text-3xl font-bold text-nojunk-dark tracking-tight leading-none">
                  nojunk
                </span>
                <span className="text-[10px] sm:text-xs text-nojunk-brown font-medium tracking-wide mt-0.5">
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
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-nojunk-dark text-white shadow-sm'
                        : 'text-nojunk-dark hover:text-nojunk-caramel hover:bg-nojunk-parchment'
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
                className="p-2 text-nojunk-dark hover:text-nojunk-caramel hover:bg-nojunk-parchment rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="relative p-2 text-nojunk-dark hover:text-nojunk-caramel hover:bg-nojunk-parchment rounded-full transition-colors"
              >
                <Heart className="w-5 h-5" />
                {wishlistIds.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale">
                    {wishlistIds.length}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                aria-label="Cart"
                className="relative p-2 text-nojunk-dark hover:text-nojunk-caramel hover:bg-nojunk-parchment rounded-full transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-nojunk-caramel text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden p-2 text-nojunk-dark hover:bg-nojunk-parchment rounded-full transition-colors ml-1"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Reference Search Bar & Pill Tabs (As shown in reference mockup!) */}
          <div className="lg:hidden mt-3 pt-2 border-t border-nojunk-brown/10">
            {/* Search input mimicking the exact mobile reference */}
            <form onSubmit={handleMobileSearchSubmit} className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-nojunk-brown/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search nuts, dates, chocolate..."
                className="w-full bg-nojunk-surface pl-10 pr-4 py-2 text-sm rounded-xl border border-nojunk-brown/20 focus:outline-none focus:border-nojunk-caramel focus:ring-1 focus:ring-nojunk-caramel/40 placeholder:text-nojunk-brown/50"
              />
            </form>

            {/* Pill navigation tabs [Home, Shop, About Us] as in the mobile mockup */}
            <div className="flex items-center justify-around gap-2 mt-2.5">
              <Link
                to="/"
                className={`flex-1 py-1.5 px-3 text-center text-xs font-semibold rounded-full transition-all duration-200 ${
                  currentTab === 'home'
                    ? 'bg-nojunk-dark text-white shadow-sm'
                    : 'bg-nojunk-surface text-nojunk-dark border border-nojunk-brown/15'
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`flex-1 py-1.5 px-3 text-center text-xs font-semibold rounded-full transition-all duration-200 ${
                  currentTab === 'shop'
                    ? 'bg-nojunk-dark text-white shadow-sm'
                    : 'bg-nojunk-surface text-nojunk-dark border border-nojunk-brown/15'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className={`flex-1 py-1.5 px-3 text-center text-xs font-semibold rounded-full transition-all duration-200 ${
                  currentTab === 'about'
                    ? 'bg-nojunk-dark text-white shadow-sm'
                    : 'bg-nojunk-surface text-nojunk-dark border border-nojunk-brown/15'
                }`}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-nojunk-cream z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-nojunk-brown/10 flex items-center justify-between bg-nojunk-parchment">
          <div className="flex items-center gap-3">
            <img
              src="/assets/nojunk-badge-round.png"
              alt="nojunk logo"
              className="w-10 h-10 rounded-full border border-nojunk-caramel/40"
            />
            <div>
              <h2 className="font-script text-2xl font-bold text-nojunk-dark leading-none">nojunk</h2>
              <p className="text-[10px] text-nojunk-brown">Only nuts.. nothing else!!</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-1.5 text-nojunk-dark hover:bg-nojunk-brown/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-nojunk-dark text-white shadow-sm font-semibold'
                    : 'text-nojunk-dark hover:bg-nojunk-parchment'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-200' : 'text-nojunk-brown/40'}`} />
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-nojunk-brown/10 space-y-2">
            <Link
              to="/gifting"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 bg-amber-50 rounded-xl text-nojunk-dark border border-amber-200/60 font-medium text-sm"
            >
              <Gift className="w-5 h-5 text-nojunk-caramel" />
              <span>Occasion Gifting Collection</span>
            </Link>
          </div>
        </nav>

        {/* Drawer Footer Contact */}
        <div className="p-5 border-t border-nojunk-brown/10 bg-nojunk-parchment/60 space-y-3">
          <div className="text-xs text-nojunk-brown">
            <p className="font-semibold text-nojunk-dark">Founder & Curator: K. Neelima</p>
            <p>Homemade in small hygienic batches</p>
          </div>
          <a
            href={`https://wa.me/91${WHATSAPP_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl font-semibold text-sm shadow-sm transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`tel:${WHATSAPP_PHONE}`}
            className="w-full flex items-center justify-center gap-2 bg-nojunk-surface hover:bg-nojunk-parchment text-nojunk-dark border border-nojunk-brown/20 py-2.5 px-4 rounded-xl font-medium text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-nojunk-caramel" />
            <span>Call: {WHATSAPP_PHONE}</span>
          </a>
        </div>
      </aside>
    </>
  );
};
