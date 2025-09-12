import { 
  Bed, 
  Users, 
  Wifi, 
  Car, 
  Utensils, 
  Wind, 
  Tv, 
  WashingMachine,
  Bath,
  Home
} from 'lucide-react';
import type { AccommodationPreview, RoomCategory, RoomFeature } from './types';

// Room data from Accommodations.tsx
const roomCategories: RoomCategory[] = [
  {
    title: "Luxury Villa",
    subtitle: "Perfect for families and groups",
    images: [
      "/assets/d3ba927b/Cozy-Bedroom-With-TV-And-Amenities.jpg",
      "/assets/Modern-Living-Room-Interior.jpg",
      "/assets/Modern-Kitchen-Interior.jpg"
    ],
    features: [
      { icon: Users, text: "Up to 6 guests" },
      { icon: Bed, text: "3 bedrooms" },
      { icon: Bath, text: "2 bathrooms" },
      { icon: Utensils, text: "Full kitchen" },
      { icon: Tv, text: "Smart TV" },
      { icon: Wind, text: "Air conditioning" },
      { icon: Wifi, text: "Free WiFi" },
      { icon: WashingMachine, text: "Washing machine" }
    ],
    price: "Contact for rates",
    popular: true
  },
  {
    title: "Family Vacation Home",
    subtitle: "Spacious and comfortable",
    images: [
      "/assets/6672f3b0/Bedroom-1.jpg",
      "/assets/88128774/Cozy-Living-Dining-Space.jpg",
      "/assets/Kitchenette-with-Appliances.jpg"
    ],
    features: [
      { icon: Users, text: "Up to 4 guests" },
      { icon: Bed, text: "2 bedrooms" },
      { icon: Bath, text: "1 bathroom" },
      { icon: Utensils, text: "Kitchenette" },
      { icon: Tv, text: "Cable TV" },
      { icon: Wind, text: "Air conditioning" },
      { icon: Wifi, text: "Free WiFi" },
      { icon: Car, text: "Parking included" }
    ],
    price: "Contact for rates",
    popular: false
  },
  {
    title: "Cozy Retreat Room",
    subtitle: "Intimate and elegant",
    images: [
      "/assets/2f4a0b54/Bedroom-2.jpg",
      "/assets/Stylish-Bedroom-Interior-Design.jpg",
      "/assets/Modern-Bathroom-Shower-Toilet-Vanity.jpg"
    ],
    features: [
      { icon: Users, text: "Up to 2 guests" },
      { icon: Bed, text: "1 bedroom" },
      { icon: Bath, text: "Private bathroom" },
      { icon: Tv, text: "Smart TV" },
      { icon: Wind, text: "Air conditioning" },
      { icon: Wifi, text: "Free WiFi" },
      { icon: Home, text: "Private entrance" }
    ],
    price: "Contact for rates",
    popular: false
  }
];

// Extract guest count from features
function extractGuestCount(features: RoomFeature[]): number {
  const guestFeature = features.find(feature => 
    feature.text.toLowerCase().includes('guest')
  );
  
  if (guestFeature) {
    const match = guestFeature.text.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 1;
  }
  
  return 1;
}

// Extract top features for preview (excluding guest count)
function extractTopFeatures(features: RoomFeature[], maxFeatures: number = 3): string[] {
  // Prioritize key amenities for preview
  const priorityFeatures = [
    'bedroom', 'bathroom', 'kitchen', 'kitchenette', 
    'wifi', 'air conditioning', 'smart tv', 'cable tv'
  ];
  
  const filteredFeatures = features
    .filter(feature => !feature.text.toLowerCase().includes('guest'))
    .sort((a, b) => {
      const aIndex = priorityFeatures.findIndex(priority => 
        a.text.toLowerCase().includes(priority)
      );
      const bIndex = priorityFeatures.findIndex(priority => 
        b.text.toLowerCase().includes(priority)
      );
      
      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    })
    .slice(0, maxFeatures);
  
  return filteredFeatures.map(feature => feature.text);
}

// Transform room categories to accommodation previews
export function getAccommodationPreviews(maxItems?: number): AccommodationPreview[] {
  const previews = roomCategories.map((room, index) => ({
    id: `accommodation-${index}`,
    title: room.title,
    subtitle: room.subtitle,
    heroImage: room.images[0],
    guestCapacity: extractGuestCount(room.features),
    keyFeatures: extractTopFeatures(room.features, 3),
    isPopular: room.popular,
    price: room.price
  }));
  
  return maxItems ? previews.slice(0, maxItems) : previews;
}

// Get single accommodation preview by ID
export function getAccommodationPreviewById(id: string): AccommodationPreview | undefined {
  const previews = getAccommodationPreviews();
  return previews.find(preview => preview.id === id);
}

// Get popular accommodations only
export function getPopularAccommodations(): AccommodationPreview[] {
  return getAccommodationPreviews().filter(preview => preview.isPopular);
}