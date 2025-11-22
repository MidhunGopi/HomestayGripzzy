/**
 * Footer Component
 * Application footer with copyright information
 */

import { SITE_CONFIG } from '../config/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-semibold text-amber-100">
          &copy; {currentYear} {SITE_CONFIG.siteName}. All rights reserved. ✨
        </p>
        <p className="mt-3 text-sm text-amber-400 font-medium">
          🎨 Website designed by mgx42
        </p>
      </div>
    </footer>
  );
}

export default Footer;
