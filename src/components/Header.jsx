/**
 * Header Component
 * Sticky navigation bar with responsive mobile menu
 */

import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '../config/constants';
import { useMenu } from '../hooks/useMenu';

function Header() {
  const { isMenuOpen, openMenu, closeMenu } = useMenu();

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg shadow-2xl sticky top-0 z-50 border-b border-amber-600/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}logo/logo-transparent.png`}
              alt="Gripzy Serene Abode Logo" 
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-amber-100 hover:text-amber-400 transition-all duration-300 font-semibold hover:scale-110 transform"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={openMenu}
            className="text-amber-400 hover:text-amber-300 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-amber-600/30">
            <span className="text-2xl font-bold text-amber-500">
              {SITE_CONFIG.siteName}
            </span>
            <button
              onClick={closeMenu}
              className="text-amber-400 hover:text-amber-300 transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="text-xl text-amber-100 hover:text-amber-400 p-4 rounded-xl hover:bg-amber-900/20 transition-all font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
