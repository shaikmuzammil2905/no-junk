import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedProduct: React.FC = () => {
  return (
    <section className="product-spotlight-section">
      <div className="spotlight-banner-wrapper">
        {/* Responsive Banner Image (preserves aspect ratio & prevents text clipping) */}
        <img 
          src="/assets/featured-grand-banner.png" 
          alt="The Crown Jewel of NOJUNK - Stuffed and Studded Chocolate Medjool Dates" 
          className="spotlight-banner-img"
        />

        {/* Invisible Clickable Hotspots over the baked-in buttons */}
        <a 
          href="https://wa.me/919963290808?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Stuffed%20and%20Studded%20Chocolate%20Medjool%20Dates" 
          target="_blank" 
          rel="noopener noreferrer"
          className="banner-hotspot hotspot-whatsapp"
          aria-label="Enquire on WhatsApp"
        />

        <Link 
          to="/product/stuffed-studded-chocolate-medjool-dates" 
          className="banner-hotspot hotspot-details"
          aria-label="View Product Details"
        />
      </div>
    </section>
  );
};
