import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Coffee, 
  Wine, 
  Clock, 
  Users, 
  ChefHat,
  MapPin,
  Star
} from 'lucide-react';

const Dining = () => {
  const diningOptions = [
    {
      title: "African Cuisine Restaurant",
      description: "Experience authentic Ghanaian flavors prepared by our skilled chefs using traditional recipes and fresh local ingredients.",
      image: "/assets/Dining-Room-Interior.jpg",
      features: [
        { icon: ChefHat, text: "Traditional Ghanaian dishes" },
        { icon: Clock, text: "Lunch & Dinner service" },
        { icon: Users, text: "Family-style dining" },
        { icon: Star, text: "Highly rated cuisine" }
      ],
      hours: "11:00 AM - 10:00 PM",
      specialty: "Jollof Rice, Banku, Grilled Tilapia"
    },
    {
      title: "Bar & Snack Bar",
      description: "Relax with refreshing beverages and light snacks in our comfortable lounge area with a selection of local and international drinks.",
      image: "/assets/Cozy-Living-Dining-Space.jpg",
      features: [
        { icon: Wine, text: "Local & imported drinks" },
        { icon: Coffee, text: "Fresh juices & smoothies" },
        { icon: Utensils, text: "Light snacks available" },
        { icon: Users, text: "Social atmosphere" }
      ],
      hours: "10:00 AM - 11:00 PM",
      specialty: "Palm wine, Fresh coconut water, Local beers"
    },
    {
      title: "BBQ & Outdoor Dining",
      description: "Enjoy grilled specialties in our beautiful garden setting, perfect for family gatherings and special occasions.",
      image: "/assets/House-with-Paved-Driveway-and-Garden.jpg",
      features: [
        { icon: ChefHat, text: "Grilled meats & seafood" },
        { icon: MapPin, text: "Garden terrace setting" },
        { icon: Users, text: "Group dining available" },
        { icon: Clock, text: "Evening service" }
      ],
      hours: "5:00 PM - 9:00 PM",
      specialty: "Grilled chicken, Kebabs, Fresh fish"
    }
  ];

  const menuHighlights = [
    {
      category: "Main Dishes",
      items: [
        "Jollof Rice with Grilled Chicken",
        "Banku with Grilled Tilapia",
        "Waakye with Beef Stew",
        "Fried Rice with Prawns"
      ]
    },
    {
      category: "Beverages",
      items: [
        "Fresh Palm Wine",
        "Coconut Water",
        "Sobolo (Hibiscus drink)",
        "Fresh Fruit Juices"
      ]
    },
    {
      category: "Snacks",
      items: [
        "Kelewele (Spiced Plantain)",
        "Bofrot (Ghanaian Donuts)",
        "Roasted Plantain",
        "Mixed Nuts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <HeroSection
        title="Authentic Dining"
        subtitle="Savor the rich flavors of Ghana in our welcoming restaurant and bar"
        backgroundImage="/assets/Dining-Room-Interior.jpg"
        ctaText="Make Reservation"
        ctaLink="/contact"
      />

      {/* Dining Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
              Dining <span className="text-yellow-500">Experiences</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From traditional Ghanaian cuisine to casual outdoor dining, we offer something for every taste
            </p>
          </div>

          <div className="space-y-16">
            {diningOptions.map((option, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h3 className="text-3xl font-bold font-serif text-gray-900 mb-4">
                      {option.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {option.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {option.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <feature.icon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hours and Specialty */}
                    <div className="border-t pt-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-yellow-500" />
                        <span className="font-semibold text-gray-900">Hours:</span>
                        <span className="text-gray-700">{option.hours}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-900">Specialties:</span>
                          <p className="text-gray-700">{option.specialty}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
              Menu <span className="text-yellow-500">Highlights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A taste of our most popular dishes and beverages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuHighlights.map((category, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-serif text-yellow-500 mb-6 text-center">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Policies */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-black mb-4">
              Dining Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
            <div>
              <h3 className="text-xl font-bold mb-4">Reservations</h3>
              <ul className="space-y-2">
                <li>• Walk-ins welcome for all dining venues</li>
                <li>• Group reservations recommended</li>
                <li>• Special dietary requirements accommodated</li>
                <li>• Private dining available for events</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Policies</h3>
              <ul className="space-y-2">
                <li>• Family-friendly environment</li>
                <li>• Fresh ingredients sourced locally</li>
                <li>• Vegetarian options available</li>
                <li>• Room service available upon request</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-black text-yellow-500 hover:bg-gray-900 text-lg px-8 py-3"
              asChild
            >
              <Link to="/contact">Contact for Reservations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;