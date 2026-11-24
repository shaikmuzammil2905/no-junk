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
      className="group relative bg-[#FCF8F2] rounded-2xl sm:rounded-3xl p-2 sm:p-5 border border-amber-900/15 sm:border-2 shadow-sm hover:shadow-hover hover:border-amber-500/60 transition-all duration-300 flex flex-col items-center text-center overflow-hidden hover:-translate-y-1"
    >
      {/* Decorative leaf icon - visible on tablet/desktop */}
      <div className="hidden sm:block absolute top-3 right-3 text-amber-800/15 pointer-events-none text-2xl group-hover:scale-125 transition-transform duration-300">
        🍃
      </div>

      {/* Rounded real category image container (using image copy 5, 6, 7) */}
      <div className="w-full aspect-square max-w-[85px] sm:max-w-[150px] rounded-xl sm:rounded-2xl overflow-hidden bg-white p-1 sm:p-2 shadow-2xs mb-1.5 sm:mb-3 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-amber-900/15">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover rounded-lg sm:rounded-xl"
        />
      </div>

      {/* Category Name */}
      <h3 className="font-serif text-[11px] sm:text-lg font-bold text-nojunk-dark group-hover:text-nojunk-goldenBrown transition-colors leading-tight">
        {category.name}
      </h3>

      {/* Description - visible on desktop */}
      <p className="hidden sm:block text-xs sm:text-sm text-nojunk-brown/80 mt-1.5 line-clamp-2 px-1">
        {category.description}
      </p>

      {/* Explore Button - visible on desktop */}
      <div className="hidden sm:inline-flex mt-3 items-center gap-1.5 text-xs font-bold text-nojunk-dark group-hover:text-nojunk-goldenBrown transition-colors bg-amber-100/60 px-3.5 py-1.5 rounded-full border border-amber-900/10">
        <span>Explore</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
