import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';
import type { AccommodationCardProps } from './types';

const AccommodationCard: React.FC<AccommodationCardProps> = ({
  id,
  title,
  subtitle,
  heroImage,
  guestCapacity,
  keyFeatures,
  isPopular,
  price,
  className = '',
  animationDelay = 0,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card 
      className={`overflow-hidden hover:shadow-xl transition-all duration-300 luxury-hover cursor-pointer ${className}`}
      onClick={handleClick}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Hero Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        
        {/* Popular Badge Overlay */}
        {isPopular && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors">
              Most Popular
            </Badge>
          </div>
        )}
        
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Card Content */}
      <CardContent className="p-6 space-y-4">
        {/* Header Section */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-serif text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Guest Capacity */}
        <div className="flex items-center space-x-2 text-yellow-600">
          <Users className="w-5 h-5" />
          <span className="font-medium text-gray-800">
            Up to {guestCapacity} guest{guestCapacity > 1 ? 's' : ''}
          </span>
        </div>

        {/* Key Features */}
        <div className="space-y-2">
          <ul className="space-y-1">
            {keyFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Section */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {price}
              </p>
              {price !== "Contact for rates" && (
                <p className="text-sm text-gray-500">per night</p>
              )}
            </div>
            <Link 
              to="/accommodations"
              className="text-yellow-600 hover:text-yellow-700 font-medium text-sm transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Details →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccommodationCard;