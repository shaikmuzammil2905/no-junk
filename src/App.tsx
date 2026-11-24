import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { SearchModal } from './components/SearchModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { GiftingPage } from './pages/GiftingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { WishlistPage } from './pages/WishlistPage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          {/* Animated Intro Splash Screen */}
          <SplashScreen />

          <div className="flex flex-col min-h-screen bg-nojunk-cream text-nojunk-dark selection:bg-amber-200">
            {/* Header */}
            <Header onOpenSearch={() => setSearchModalOpen(true)} />

            {/* Main Content Area */}
            <main className="flex-1 pb-16 md:pb-0">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:slug" element={<ProductDetailPage />} />
                <Route path="/category/:categorySlug" element={<CategoryPage />} />
                <Route path="/gifting" element={<GiftingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Sticky Floating Elements */}
            <FloatingWhatsApp />
            <MobileBottomNav />

            {/* Interactive Drawers & Modals */}
            <SearchModal
              isOpen={searchModalOpen}
              onClose={() => setSearchModalOpen(false)}
            />
            <CartDrawer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
};
