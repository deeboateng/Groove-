import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    {
      src: "/assets/Groove-Haven-Lodge-Exterior.jpg",
      alt: "Groove Haven Lodge Exterior",
      category: "exterior",
      title: "Lodge Exterior"
    },
    {
      src: "/assets/Groove-Haven-Lodge-Exterior-2.jpg",
      alt: "Groove Haven Lodge Exterior View 2",
      category: "exterior",
      title: "Exterior Architecture"
    },
    {
      src: "/assets/House-with-Paved-Driveway-and-Garden.jpg",
      alt: "House with Paved Driveway and Garden",
      category: "exterior",
      title: "Garden & Driveway"
    },
    {
      src: "/assets/Tropical-Lodge-Retreat.jpg",
      alt: "Tropical Lodge Retreat",
      category: "exterior",
      title: "Tropical Setting"
    },
    {
      src: "/assets/Cozy-Bedroom-With-TV-And-Amenities.jpg",
      alt: "Cozy Bedroom With TV And Amenities",
      category: "interior",
      title: "Luxury Bedroom"
    },
    {
      src: "/assets/Stylish-Bedroom-Interior-Design.jpg",
      alt: "Stylish Bedroom Interior Design",
      category: "interior",
      title: "Elegant Bedroom"
    },
    {
      src: "/assets/Bedroom-1.jpg",
      alt: "Bedroom 1",
      category: "interior",
      title: "Comfortable Bedroom"
    },
    {
      src: "/assets/Bedroom-2.jpg",
      alt: "Bedroom 2",
      category: "interior",
      title: "Modern Bedroom"
    },
    {
      src: "/assets/Bedroom-3.jpg",
      alt: "Bedroom 3",
      category: "interior",
      title: "Spacious Bedroom"
    },
    {
      src: "/assets/Modern-Living-Room-Interior.jpg",
      alt: "Modern Living Room Interior",
      category: "interior",
      title: "Living Room"
    },
    {
      src: "/assets/Modern-Living-Room-Decor.jpg",
      alt: "Modern Living Room Decor",
      category: "interior",
      title: "Living Space"
    },
    {
      src: "/assets/Living-Room-Interior-View.jpg",
      alt: "Living Room Interior View",
      category: "interior",
      title: "Lounge Area"
    },
    {
      src: "/assets/Living-Room-Interior-View-2.jpg",
      alt: "Living Room Interior View 2",
      category: "interior",
      title: "Comfortable Seating"
    },
    {
      src: "/assets/Cozy-Living-Dining-Space.jpg",
      alt: "Cozy Living Dining Space",
      category: "interior",
      title: "Dining Area"
    },
    {
      src: "/assets/Dining-Room-Interior.jpg",
      alt: "Dining Room Interior",
      category: "interior",
      title: "Formal Dining"
    },
    {
      src: "/assets/Modern-Kitchen-Interior.jpg",
      alt: "Modern Kitchen Interior",
      category: "interior",
      title: "Full Kitchen"
    },
    {
      src: "/assets/Kitchenette-with-Appliances.jpg",
      alt: "Kitchenette with Appliances",
      category: "interior",
      title: "Kitchenette"
    },
    {
      src: "/assets/Modern-Bathroom-Shower-Toilet-Vanity.jpg",
      alt: "Modern Bathroom Shower Toilet Vanity",
      category: "interior",
      title: "Modern Bathroom"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'exterior', name: 'Exterior', count: galleryImages.filter(img => img.category === 'exterior').length },
    { id: 'interior', name: 'Interior', count: galleryImages.filter(img => img.category === 'interior').length }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <HeroSection
        title="Photo Gallery"
        subtitle="Explore our beautiful accommodations and stunning surroundings"
        backgroundImage="/assets/Groove-Haven-Lodge-Exterior.jpg"
        ctaText="Book Your Stay"
        ctaLink="/booking"
      />

      {/* Gallery Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`${
                  activeCategory === category.id
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                    : 'border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image */}
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-gray-300">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-black mb-4">
            Ready to Experience This Beauty?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Book your stay at Groove Haven Lodge and enjoy these stunning accommodations in person
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
              <Link to="/accommodations">View Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;