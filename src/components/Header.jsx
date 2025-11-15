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
    <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a 
            href="#home" 
            className="text-2xl font-bold text-emerald-800"
          >
            {SITE_CONFIG.siteName}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-stone-600 hover:text-emerald-700 transition-colors duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={openMenu}
            className="text-stone-800 hover:text-emerald-700"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-2xl font-bold text-emerald-800">
              {SITE_CONFIG.siteName}
            </span>
            <button
              onClick={closeMenu}
              className="text-stone-800 hover:text-emerald-700"
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
                className="text-xl text-stone-700 hover:text-emerald-700 p-2 rounded-md"
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
