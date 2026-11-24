export interface ProductVariant {
  label: string;
  price?: number;
  isAvailable?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'loose-nuts' | 'gift-packs' | 'chocolate-specials';
  categoryLabel: string;
  tagline?: string;
  shortDescription: string;
  fullDescription: string;
  price?: number;
  priceNote?: string;
  variants: ProductVariant[];
  selectedVariant?: string;
  rating?: number;
  reviewsCount?: number;
  images: string[];
  isBestSeller?: boolean;
  isFeatured?: boolean;
  highlights?: string[];
  ingredients?: string;
  storageInfo?: string;
  relatedProductIds: string[];
}

export interface Category {
  id: 'loose-nuts' | 'gift-packs' | 'chocolate-specials';
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface GiftingOccasion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
