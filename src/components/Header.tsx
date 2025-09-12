import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useScrollDirection from '@/hooks/useScrollDirection'; // Import the new hook
import useHeroInView from '../hooks/useHeroInView'; // Add this import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const scrollDirection = useScrollDirection(); // Use the new hook
  const heroInView = useHeroInView(); // Add this line

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Accommodations', href: '/accommodations' },
    { name: 'Dining', href: '/dining' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b border-yellow-500/20 transition-all duration-300 ease-in-out
        ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
        ${heroInView ? 'bg-black/0' : 'bg-black/90 backdrop-blur-md'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Removed relative */}
          {/* Mobile menu button (visible on mobile, hidden on desktop) */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400 mr-4 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo (always visible) */}
          <Link to="/" className="flex items-center space-x-2 flex-grow justify-center md:justify-start min-w-0">
            <div className="text-lg font-bold text-yellow-500 font-serif"> {/* Removed whitespace-nowrap */}
              Groove Haven Lodge
            </div>
          </Link>

          {/* Mobile Book Now Button (visible on mobile, hidden on desktop) */}
          <div className="md:hidden ml-auto flex-shrink-0">
            <Button
              size="sm"
              className="bg-yellow-500 text-black hover:bg-yellow-400"
              asChild
            >
              <Link to="/booking">BOOK</Link>
            </Button>
          </div>

          {/* Desktop Navigation (hidden on mobile, centered on desktop) */}
          <nav className="hidden md:flex items-center space-x-8 md:flex-grow md:justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-yellow-500'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons (hidden on mobile, visible on desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              asChild
            >
              <a href="tel:+233599147359">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-yellow-500 text-black hover:bg-yellow-400"
              asChild
            >
              <Link to="/booking">BOOK</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'text-yellow-500 bg-yellow-500/10'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                asChild
              >
                <a href="tel:+233599147359">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-yellow-500 text-black hover:bg-yellow-400"
                asChild
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
