import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { LayoutGrid, List, Search, SlidersHorizontal, Sparkles } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('q') || '';
  const [viewMode, setViewMode] = useState<'grid' | 'horizontal'>('grid');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high'>('default');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        const matchesCat = product.categoryLabel.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return (a.price || 9999) - (b.price || 9999);
      }
      if (sortBy === 'price-high') {
        return (b.price || 0) - (a.price || 0);
      }
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  const handleCategoryChange = (catId: string) => {
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val) {
      searchParams.set('q', val);
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8">
      {/* Page Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-xs font-semibold text-nojunk-brown">
          <Sparkles className="w-3.5 h-3.5 text-nojunk-caramel" />
          <span>Pure Wholesome Delights</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-nojunk-dark">
          Our Treats Catalogue
        </h1>
        <p className="text-xs sm:text-sm text-nojunk-brown/80">
          Handmade treats with 100% nuts, dates, and chocolate. Select your favourite pack sizes and enquire directly on WhatsApp.
        </p>
      </div>

      {/* Filter Chips matching the reference mockup Screen 2: [All, Loose Nuts, Gift Packs, Chocolate Specials] */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          type="button"
          onClick={() => handleCategoryChange('all')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeCategory === 'all'
              ? 'bg-nojunk-dark text-white shadow-sm'
              : 'bg-white border border-nojunk-brown/15 text-nojunk-dark hover:bg-nojunk-parchment'
          }`}
        >
          All Treats ({PRODUCTS.length})
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-nojunk-dark text-white shadow-sm'
                : 'bg-white border border-nojunk-brown/15 text-nojunk-dark hover:bg-nojunk-parchment'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search & Sort Controls Bar */}
      <div className="bg-[#FDFBF7] p-3 sm:p-4 rounded-2xl border border-nojunk-brown/15 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-nojunk-brown/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search nuts, dates, treats..."
            className="w-full bg-white pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-nojunk-brown/20 focus:outline-none focus:border-nojunk-caramel focus:ring-1 focus:ring-nojunk-caramel/40"
          />
        </div>

        {/* View Mode & Sort */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-3">
          <div className="flex items-center gap-2 text-xs text-nojunk-brown">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-nojunk-brown/20 rounded-xl px-3 py-2 text-xs text-nojunk-dark focus:outline-none focus:border-nojunk-caramel"
            >
              <option value="default">Featured Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-center bg-white border border-nojunk-brown/20 rounded-xl p-1 gap-1">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-nojunk-dark text-white' : 'text-nojunk-brown hover:bg-amber-50'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('horizontal')}
              aria-label="List View"
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'horizontal' ? 'bg-nojunk-dark text-white' : 'text-nojunk-brown hover:bg-amber-50'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Display */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-[#FDFBF7] rounded-3xl border border-nojunk-brown/15 p-8 space-y-3">
          <p className="font-serif text-lg font-bold text-nojunk-dark">
            No treats found for your selection
          </p>
          <p className="text-xs text-nojunk-brown/70 max-w-sm mx-auto">
            Try resetting your search query or selecting a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchParams({});
            }}
            className="px-4 py-2 rounded-xl bg-nojunk-dark text-white text-xs font-semibold hover:bg-nojunk-chocolate transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} layout="grid" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} layout="horizontal" />
          ))}
        </div>
      )}
    </div>
  );
};
