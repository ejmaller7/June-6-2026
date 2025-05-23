
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Wedding Details', path: '/details' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Registry', path: '/registry' },
    { name: 'RSVP', path: '/rsvp' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-pale-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-black font-serif text-xl font-bold">
            <Heart className="w-6 h-6 fill-pale-blue text-pale-blue" />
            {/* CUSTOMIZE: Replace with couple's names */}
            <span>Ethan & Marlena</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive(item.path)
                    ? 'text-black'
                    : 'text-black hover:text-black'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-pale-blue rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-black transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pale-yellow">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-black'
                      : 'text-black hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
