import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { MenuIcon, CloseIcon, LogoIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center text-2xl font-bold text-bright-blue-700 hover:text-bright-blue-900 transition"
            >
              <LogoIcon className="h-8 w-8 mr-2" />
              Smart Education
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-bright-blue-600 transition duration-300 font-medium pb-1 border-b-2 ${
                      isActive
                        ? 'border-bright-blue-600 text-bright-blue-600'
                        : 'border-transparent'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 focus:outline-none"
                aria-label="Open menu"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* -------------------------------------- */}
      {/* BACKDROP OVERLAY */}
      {/* -------------------------------------- */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* -------------------------------------- */}
      {/* SLIDING MOBILE MENU (75% WIDTH) */}
      {/* -------------------------------------- */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-bright-blue-800 bg-opacity-95 
                    z-[9999] transform 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
                    transition-transform duration-300 ease-in-out md:hidden shadow-xl`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col items-center mt-10 space-y-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="text-white text-2xl font-semibold hover:text-bright-blue-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
