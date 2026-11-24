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
      className="group relative bg-[#FCF8F2] rounded-3xl p-5 sm:p-6 border-2 border-amber-900/15 shadow-sm hover:shadow-hover hover:border-amber-500/60 transition-all duration-300 flex flex-col items-center text-center overflow-hidden hover:-translate-y-1.5"
    >
      {/* Decorative leaf icon */}
      <div className="absolute top-3 right-3 text-amber-800/15 pointer-events-none text-2xl group-hover:scale-125 transition-transform duration-300">
        🍃
      </div>

      {/* Rounded real category image container (using image copy 5, 6, 7) */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-white p-2 shadow-sm mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-amber-900/15">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Category Name */}
      <h3 className="font-serif text-lg sm:text-xl font-bold text-nojunk-dark group-hover:text-nojunk-goldenBrown transition-colors">
        {category.name}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-nojunk-brown/80 mt-1.5 line-clamp-2 px-1">
        {category.description}
      </p>

      {/* Explore Button */}
      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-nojunk-dark group-hover:text-nojunk-goldenBrown transition-colors bg-amber-100/60 px-4 py-2 rounded-full border border-amber-900/10">
        <span>Explore Collection</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
