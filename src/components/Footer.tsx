import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-500 font-serif mb-4">
              Groove Haven Lodge
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience luxury and comfort at our peaceful family retreat in Kasoa. 
              Praised for our exceptional hospitality, cleanliness, and serene atmosphere.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20">
                <span className="text-yellow-500 font-bold">GH</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/accommodations" className="hover:text-yellow-400 transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link to="/dining" className="hover:text-yellow-400 transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="hover:text-yellow-400 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-yellow-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-yellow-400 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  GH540 Chickpea Street<br />
                  Kasoa, Buduburam<br />
                  Ghana
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+233599147359" className="text-sm hover:text-yellow-400 transition-colors">
                  +233 59 914 7359
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Check-in: 2:00 PM<br />
                  Check-out: 12:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Groove Haven Lodge. All rights reserved. | Family-Friendly Retreat in Kasoa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;