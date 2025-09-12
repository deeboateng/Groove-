import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Navigation,
  Car,
  Plane
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+233 59 914 7359"],
      action: "Call Now",
      link: "tel:+233599147359"
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "GH540 Chickpea Street",
        "Kasoa, Buduburam",
        "Ghana"
      ]
    },
    {
      icon: Clock,
      title: "Reception Hours",
      details: [
        "Check-in: 2:00 PM",
        "Check-out: 12:00 PM",
        "24/7 Support Available"
      ]
    }
  ];

  const nearbyLandmarks = [
    {
      icon: Navigation,
      name: "Kwame Nkrumah Memorial Park",
      distance: "45 minutes drive",
      description: "Historic memorial and park"
    },
    {
      icon: Navigation,
      name: "Independence Arch",
      distance: "50 minutes drive", 
      description: "National monument"
    },
    {
      icon: Plane,
      name: "Kotoka International Airport",
      distance: "1 hour drive",
      description: "Main international airport"
    },
    {
      icon: Car,
      name: "Kasoa Market",
      distance: "10 minutes drive",
      description: "Local shopping and dining"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our friendly team for reservations and inquiries"
        backgroundImage="/assets/Groove-Haven-Lodge-Exterior-Kasoa.jpg"
        ctaText="Call Now"
        ctaLink="tel:+233599147359"
      />

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
              Get in <span className="text-yellow-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help make your stay at Groove Haven Lodge unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500/10 rounded-full flex items-center justify-center border-2 border-yellow-500/20">
                    <info.icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && info.link && (
                    <Button
                      className="bg-yellow-500 text-black hover:bg-yellow-400"
                      asChild
                    >
                      <a href={info.link}>{info.action}</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold font-serif text-gray-900">Send us a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" required className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      required 
                      rows={5}
                      className="mt-1"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-yellow-500 text-black hover:bg-yellow-400 text-lg py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder and Location Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-700">Our Location</h4>
                      <p className="text-gray-600">Kasoa, Buduburam, Ghana</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Groove Haven Lodge</h3>
                    <p className="text-gray-600 mb-4">
                      Located in the peaceful area of Buduburam, Kasoa, our lodge offers 
                      easy access to major attractions while providing a tranquil retreat.
                    </p>
                    <Button
                      variant="outline"
                      className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                      asChild
                    >
                      <a 
                        href="https://maps.google.com/?q=Kasoa,Buduburam,Ghana" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Landmarks */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Nearby Attractions</h3>
                  <div className="space-y-4">
                    {nearbyLandmarks.map((landmark, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20 flex-shrink-0">
                          <landmark.icon className="w-5 h-5 text-yellow-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{landmark.name}</h4>
                          <p className="text-sm text-yellow-600 font-medium">{landmark.distance}</p>
                          <p className="text-sm text-gray-600">{landmark.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-black mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Call us now for instant booking confirmation and personalized service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-yellow-500 hover:bg-gray-900 text-lg px-8 py-3"
              asChild
            >
              <a href="tel:+233599147359">
                <Phone className="w-5 h-5 mr-2" />
                +233 59 914 7359
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-yellow-500 text-lg px-8 py-3"
              asChild
            >
              <a href="/booking">Online Booking</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;