import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import type { AccommodationPreviewProps } from './types';

const AccommodationPreview: React.FC<AccommodationPreviewProps> = ({
  className = '',
  showCTA = true,
  ctaText = "DISCOVER MORE",
  ctaLink = "/accommodations"
}) => {
  return (
    <section
      className={`relative py-16 sm:py-24 lg:py-32 bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: "url('/assets/6672f3b0/Bedroom-1.jpg')"
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-4 sm:p-6 lg:p-8 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 shadow-lg">
        <div className="animate-fade-in-up">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4 sm:mb-6 luxury-text-shadow">
            Luxury <span className="text-yellow-500">Villas</span>
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our thoughtfully designed luxury villas, offering modern amenities and elegant furnishings.
          </p>
          
          {/* Call to Action Button */}
          {showCTA && (
            <Button
              size="default"
              className="bg-yellow-500 text-black hover:bg-yellow-400 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-semibold transition-all duration-300 luxury-hover border-2 border-yellow-500 hover:border-yellow-400"
              asChild
            >
              <Link to={ctaLink}>
                {ctaText}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccommodationPreview;
