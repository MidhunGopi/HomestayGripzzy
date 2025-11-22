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
    <header className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 backdrop-blur-lg shadow-2xl sticky top-0 z-50 border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a 
            href="#home" 
            className="text-2xl font-extrabold text-white hover:text-amber-300 transition-all duration-300 drop-shadow-lg"
          >
            ✨ {SITE_CONFIG.siteName}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-amber-300 transition-all duration-300 font-semibold hover:scale-110 transform"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={openMenu}
            className="text-white hover:text-amber-300 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-br from-teal-700 to-cyan-700 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-white/20">
            <span className="text-2xl font-bold text-white">
              ✨ {SITE_CONFIG.siteName}
            </span>
            <button
              onClick={closeMenu}
              className="text-white hover:text-amber-300 transition-colors"
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
                className="text-xl text-white hover:text-amber-300 p-4 rounded-xl hover:bg-white/10 transition-all font-semibold"
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
