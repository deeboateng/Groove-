import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
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

const Accommodations = () => {
  const roomCategories = [
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

  const amenityIcons = {
    "Kitchen": Utensils,
    "WiFi": Wifi,
    "AC": Wind,
    "TV": Tv,
    "Parking": Car,
    "Laundry": WashingMachine
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <HeroSection
        title="Luxury Accommodations"
        subtitle="Choose from our selection of beautifully appointed villas and vacation homes"
        backgroundImage="/assets/Groove-Haven-Lodge-Exterior.jpg"
        ctaText="View Availability"
        ctaLink="/booking"
      />

      {/* Room Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
              Our <span className="text-yellow-500">Accommodations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each room is thoughtfully designed with modern amenities and elegant furnishings
            </p>
          </div>

          <div className="space-y-16">
            {roomCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Gallery */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-2 p-4 h-full">
                      <div className="col-span-2">
                        <img
                          src={category.images[0]}
                          alt={category.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {category.images.slice(1).map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image}
                            alt={`${category.title} ${imgIndex + 2}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                    
                    {category.popular && (
                      <Badge className="absolute top-6 left-6 bg-yellow-500 text-black font-semibold">
                        Most Popular
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold font-serif text-gray-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {category.subtitle}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <feature.icon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{category.price}</p>
                          <p className="text-sm text-gray-500">per night</p>
                        </div>
                        <Button
                          size="lg"
                          className="bg-yellow-500 text-black hover:bg-yellow-400"
                          asChild
                        >
                          <Link to="/booking">Book Now</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
              Premium <span className="text-yellow-500">Amenities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every accommodation includes these luxury features
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.entries(amenityIcons).map(([name, Icon]) => (
              <div key={name} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/10 rounded-full flex items-center justify-center border-2 border-yellow-500/20 group-hover:border-yellow-500 transition-colors">
                  <Icon className="w-8 h-8 text-yellow-500" />
                </div>
                <p className="text-white font-medium">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section
        className="py-16 relative"
        style={{
          backgroundImage: `url('/assets/Modern-Living-Room-Interior.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" aria-hidden="true"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-yellow-500 mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg text-yellow-100 mb-8">
            Instant confirmation • $25 refundable deposit • Pay at accommodation
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-3"
            asChild
          >
            <Link to="/booking">Check Availability</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodations;
