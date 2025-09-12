import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Check, Phone, Clock, DollarSign } from 'lucide-react';

const Booking = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    roomType: '',
    specialRequests: ''
  });

  const roomTypes = [
    { value: 'luxury-villa', label: 'Luxury Villa (Up to 6 guests)' },
    { value: 'family-home', label: 'Family Vacation Home (Up to 4 guests)' },
    { value: 'cozy-retreat', label: 'Cozy Retreat Room (Up to 2 guests)' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking submitted:', { ...formData, checkIn, checkOut });
    alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
  };

  const bookingFeatures = [
    {
      icon: Check,
      title: "Instant Confirmation",
      description: "No waiting - get immediate booking confirmation"
    },
    {
      icon: DollarSign,
      title: "$25 Refundable Deposit",
      description: "Small deposit required, fully refundable"
    },
    {
      icon: Clock,
      title: "Pay at Accommodation",
      description: "Convenient payment upon arrival"
    },
    {
      icon: Phone,
      title: "Direct Contact",
      description: "Speak directly with our friendly staff"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <HeroSection
        title="Book Your Stay"
        subtitle="Reserve your perfect getaway at Groove Haven Lodge with instant confirmation"
        backgroundImage="/assets/Cozy-Bedroom-With-TV-And-Amenities.jpg"
        ctaText="Call Now"
        ctaLink="tel:+233599147359"
      />

      {/* Booking Features */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {bookingFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/10 rounded-full flex items-center justify-center border-2 border-yellow-500/20">
                  <feature.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
              Make Your <span className="text-yellow-500">Reservation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll confirm your booking within hours
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-center">Booking Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Select onValueChange={(value) => handleInputChange('guests', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Check-in Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal mt-1"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label>Check-out Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal mt-1"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <Label htmlFor="roomType">Accommodation Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('roomType', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select accommodation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {roomTypes.map((room) => (
                        <SelectItem key={room.value} value={room.value}>
                          {room.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Requests */}
                <div>
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any special requirements or requests..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-12 py-3 font-semibold"
                  >
                    Submit Booking Request
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    * Required fields. We'll contact you within 24 hours to confirm your reservation.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Policies */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
              Booking <span className="text-yellow-500">Policies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-500">Check-in & Check-out</h3>
              <ul className="space-y-2">
                <li>• Check-in: 2:00 PM</li>
                <li>• Check-out: 12:00 PM</li>
                <li>• Early check-in subject to availability</li>
                <li>• Late check-out available upon request</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-500">Payment & Cancellation</h3>
              <ul className="space-y-2">
                <li>• $25 refundable deposit required</li>
                <li>• Pay remaining balance at accommodation</li>
                <li>• Free cancellation up to 24 hours before</li>
                <li>• Children of all ages welcome</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Need immediate assistance or have questions about your booking?
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400"
              asChild
            >
              <a href="tel:+233599147359">
                <Phone className="w-5 h-5 mr-2" />
                Call +233 59 914 7359
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;