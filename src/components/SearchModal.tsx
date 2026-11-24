import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Heart } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  const handleSelectProduct = (slug: string) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FDFBF7] w-full max-w-2xl rounded-2xl shadow-2xl border border-nojunk-brown/20 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-nojunk-brown/15 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-nojunk-brown/60 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dates, nuts, chocolate, gift boxes..."
            className="flex-1 text-sm sm:text-base outline-none bg-transparent placeholder:text-nojunk-brown/40 text-nojunk-dark"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 hover:bg-nojunk-parchment rounded-full text-nojunk-brown"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-nojunk-parchment text-nojunk-dark hover:bg-nojunk-card transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-nojunk-brown/60 space-y-3">
              <p className="text-xs">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Medjool Dates', 'Loose Nuts', 'Chocolate Dipped', 'Honey Nuts', 'Gift Boxes'].map(
                  (term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="text-xs px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-nojunk-dark hover:bg-amber-100 transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelectProduct(product.slug)}
                className="p-3 rounded-xl bg-white hover:bg-amber-50/70 border border-nojunk-brown/10 hover:border-nojunk-caramel/40 flex items-center justify-between gap-4 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 p-1 shrink-0 flex items-center justify-center">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-nojunk-dark group-hover:text-nojunk-caramel transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-[11px] text-nojunk-brown/70">
                      {product.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-nojunk-goldenBrown bg-amber-100/60 px-2.5 py-1 rounded-full border border-amber-900/10">
                    Enquire
                  </span>
                  <ArrowRight className="w-4 h-4 text-nojunk-brown/40 group-hover:text-nojunk-caramel group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-nojunk-brown/60">
              <p className="text-sm font-medium">No treats found matching "{query}"</p>
              <p className="text-xs mt-1">Try searching for dates, loose nuts, or chocolate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
