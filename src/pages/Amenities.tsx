import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Car, 
  Wifi, 
  Wind, 
  Utensils, 
  WashingMachine,
  ShoppingCart,
  Bed,
  Trees,
  Flame,
  Phone,
  MapPin,
  Clock,
  Shield,
  Baby,
  Gamepad2
} from 'lucide-react';

const Amenities = () => {
  const amenityCategories = [
    {
      title: "For Families",
      description: "Everything you need for a comfortable family vacation",
      icon: Users,
      color: "bg-blue-500",
      amenities: [
        { icon: Baby, name: "Children Welcome", description: "Family-friendly environment with special amenities for kids" },
        { icon: Gamepad2, name: "Indoor Play Area", description: "Safe indoor space for children to play and have fun" },
        { icon: Users, name: "Family Dining", description: "Spacious dining areas perfect for family meals" },
        { icon: Bed, name: "Extra Bedding", description: "Additional bedding and cribs available upon request" }
      ]
    },
    {
      title: "Conveniences",
      description: "Modern services to make your stay effortless",
      icon: ShoppingCart,
      color: "bg-green-500",
      amenities: [
        { icon: ShoppingCart, name: "Grocery Deliveries", description: "Fresh groceries delivered directly to your accommodation" },
        { icon: Utensils, name: "Room Service", description: "In-room dining service available throughout the day" },
        { icon: Car, name: "Car Rental", description: "Vehicle rental service for exploring the local area" },
        { icon: Phone, name: "24/7 Support", description: "Round-the-clock assistance for all your needs" }
      ]
    },
    {
      title: "Comforts",
      description: "Premium amenities for your comfort and convenience",
      icon: Wind,
      color: "bg-purple-500",
      amenities: [
        { icon: Utensils, name: "Fully Equipped Kitchens", description: "Complete kitchen facilities with modern appliances" },
        { icon: Wind, name: "Air Conditioning", description: "Climate control in all rooms for year-round comfort" },
        { icon: WashingMachine, name: "Washing Machine", description: "In-unit laundry facilities for longer stays" },
        { icon: Wifi, name: "Free High-Speed WiFi", description: "Complimentary internet access throughout the property" }
      ]
    },
    {
      title: "Outdoor Relaxation",
      description: "Beautiful outdoor spaces to unwind and connect with nature",
      icon: Trees,
      color: "bg-green-600",
      amenities: [
        { icon: Trees, name: "Garden & Terrace", description: "Beautifully landscaped gardens with seating areas" },
        { icon: Flame, name: "BBQ Facilities", description: "Outdoor grilling stations for family cookouts" },
        { icon: Car, name: "Free Parking", description: "Secure parking spaces for all guests" },
        { icon: MapPin, name: "Peaceful Location", description: "Quiet setting away from city noise" }
      ]
    }
  ];

  const policies = [
    {
      icon: Shield,
      title: "Security & Safety",
      items: [
        "24/7 security monitoring",
        "Secure parking facilities",
        "Emergency contact numbers provided",
        "First aid kit in each accommodation"
      ]
    },
    {
      icon: Clock,
      title: "Check-in & Check-out",
      items: [
        "Check-in: 2:00 PM",
        "Check-out: 12:00 PM",
        "Early check-in subject to availability",
        "Late check-out available upon request"
      ]
    },
    {
      icon: Users,
      title: "Guest Policies",
      items: [
        "Children of all ages welcome",
        "No pets allowed",
        "$25 refundable deposit required",
        "Quiet hours: 10:00 PM - 7:00 AM"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <HeroSection
        title="Premium Amenities"
        subtitle="Everything you need for a perfect stay, from family-friendly facilities to modern conveniences"
        backgroundImage="/assets/House-with-Paved-Driveway-and-Garden.jpg"
        ctaText="Book Your Stay"
        ctaLink="/booking"
      />

      {/* Amenity Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
              Luxury <span className="text-yellow-500">Amenities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of amenities designed to enhance your stay
            </p>
          </div>

          <div className="space-y-16">
            {amenityCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-serif text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                {/* Amenities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.amenities.map((amenity, amenityIndex) => (
                    <Card key={amenityIndex} className="hover:shadow-lg transition-shadow group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/10 rounded-full flex items-center justify-center border-2 border-yellow-500/20 group-hover:border-yellow-500 transition-colors">
                          <amenity.icon className="w-8 h-8 text-yellow-500" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {amenity.name}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {amenity.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies & Information */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
              Policies & <span className="text-yellow-500">Information</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Important information to ensure a smooth and enjoyable stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center border-2 border-yellow-500/20 mr-4">
                      <policy.icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {policy.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {policy.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Amenity Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                Fully Equipped <span className="text-yellow-500">Kitchens</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Each accommodation features a complete kitchen with modern appliances, 
                allowing you to prepare your own meals and enjoy the comfort of home 
                during your stay.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Utensils className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Full-size refrigerator</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Stovetop & oven</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Microwave</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Cookware & utensils</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-400"
                asChild
              >
                <Link to="/accommodations">View Accommodations</Link>
              </Button>
            </div>
            <div>
              <img
                src="/assets/Modern-Kitchen-Interior.jpg"
                alt="Modern Kitchen Interior"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-black mb-4">
            Experience All Our Amenities
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Book your stay today and enjoy all the luxury amenities Groove Haven Lodge has to offer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-yellow-500 hover:bg-gray-900 text-lg px-8 py-3"
              asChild
            >
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-yellow-500 text-lg px-8 py-3"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;