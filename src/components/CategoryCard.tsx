import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group relative bg-[#F6EFE6] rounded-2xl p-4 sm:p-5 border border-nojunk-brown/15 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col items-center text-center overflow-hidden hover:-translate-y-1"
    >
      {/* Decorative leaf backdrop icon */}
      <div className="absolute top-2 right-2 text-emerald-800/10 pointer-events-none text-2xl group-hover:scale-125 transition-transform duration-300">
        🍃
      </div>

      {/* Rounded category image container */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white/70 p-2 shadow-2xs mb-3 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-amber-900/10">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Category Name */}
      <h3 className="font-serif text-base sm:text-lg font-bold text-nojunk-dark group-hover:text-nojunk-caramel transition-colors">
        {category.name}
      </h3>

      {/* Short description */}
      <p className="text-xs text-nojunk-brown/80 mt-1 line-clamp-2 px-1">
        {category.description}
      </p>

      {/* Explore Collection Link */}
      <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-nojunk-dark group-hover:text-nojunk-caramel transition-colors">
        <span>Explore Collection</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
