import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold">
              Eventix
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/events" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-75">
            <Link to="/" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/events" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Events
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
