import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ImageCarousel from '@/components/ImageCarousel';
import AccommodationPreview from '@/components/AccommodationPreview';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wifi, 
  Car, 
  Users, 
  Utensils, 
  Home, 
  MapPin,
  Star,
  Clock,
  Phone
} from 'lucide-react';

const Index = () => {
  const highlights = [
    { icon: Home, text: "Fully Equipped Kitchens" },
    { icon: Wifi, text: "Free WiFi" },
    { icon: Car, text: "Car Rental & Parking" },
    { icon: Home, text: "Family-Friendly Villas" },
    { icon: Utensils, text: "African Cuisine Restaurant" }
  ];

  const featuredImages = [
    {
      src: "/assets/House-with-Paved-Driveway-and-Garden.jpg",
      alt: "House with Paved Driveway and Garden",
      title: "Luxury Villa Exterior"
    },
    {
      src: "/assets/Tropical-Lodge-Retreat.jpg",
      alt: "Tropical Lodge Retreat",
      title: "Tropical Paradise"
    },
    {
      src: "/assets/Modern-Living-Room-Interior.jpg",
      alt: "Modern Living Room Interior",
      title: "Elegant Living Spaces"
    }
  ];

  const proximityLocations = [
    { name: "Kwame Nkrumah Memorial Park", distance: "45 min", icon: MapPin },
    { name: "Independence Arch", distance: "50 min", icon: MapPin },
    { name: "Kotoka International Airport", distance: "1 hour", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Video */}
      <HeroSection
        title="Groove Haven Lodge"
        subtitle="Peaceful Family Retreat in Kasoa"
        showVideo={true}
      />

      {/* Quick Highlights Strip */}
      <section className="py-10 sm:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group flex-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 bg-yellow-500/10 rounded-full flex items-center justify-center border-2 border-yellow-500/20 group-hover:border-yellow-500 transition-colors">
                  <highlight.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
                </div>
                <p className="text-white text-xs sm:text-sm font-medium">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Imagery Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
              Experience <span className="text-yellow-500">Luxury</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our beautifully designed accommodations and serene surroundings
            </p>
          </div>
          
          <ImageCarousel 
            images={featuredImages}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Accommodation Preview Section */}
      <AccommodationPreview />

      {/* Guest Experience Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 sm:-translate-y-16">
              <div className="w-1 h-6 sm:h-8 bg-yellow-500"></div>
            </div>
            
            <blockquote className="text-xl sm:text-2xl md:text-4xl font-serif italic text-white leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
              "Praised for its peaceful atmosphere, cleanliness, and super friendly staff."
            </blockquote>
            
            <div className="flex justify-center items-center space-x-1 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-gray-300 text-base sm:text-lg">
              — Verified Guest Reviews
            </p>
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 sm:translate-y-16">
              <div className="w-1 h-6 sm:h-8 bg-yellow-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Proximity Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
              Prime <span className="text-yellow-500">Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conveniently located with easy access to major attractions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proximityLocations.map((location, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <location.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 text-lg font-medium">
                    {location.distance} drive
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url('/assets/Groove-Haven-Lodge-Exterior-2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" aria-hidden="true"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Ready for Your Perfect Getaway?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-yellow-500 hover:bg-gray-900 text-lg px-8 py-3 font-semibold"
              asChild
            >
              <Link to="/booking">Book Your Stay</Link>
            </Button>
            
            <Button
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-600 text-lg px-8 py-3 font-semibold"
              asChild
            >
              <a href="tel:+233599147359">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-2 text-white/80">
            <Clock className="w-5 h-5" />
            <span>Instant confirmation • No waiting</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
