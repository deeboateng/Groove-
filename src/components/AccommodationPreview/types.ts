export interface AccommodationPreview {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  guestCapacity: number;
  keyFeatures: string[];
  isPopular: boolean;
  price: string;
}

export interface AccommodationCardProps extends AccommodationPreview {
  className?: string;
  animationDelay?: number;
  onClick?: () => void;
}

export interface AccommodationPreviewProps {
  className?: string;
  maxItems?: number;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export interface RoomFeature {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

export interface RoomCategory {
  title: string;
  subtitle: string;
  images: string[];
  features: RoomFeature[];
  price: string;
  popular: boolean;
}