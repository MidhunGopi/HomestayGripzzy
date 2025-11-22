/**
 * Footer Component
 * Application footer with copyright information
 */

import { SITE_CONFIG } from '../config/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white border-t-4 border-teal-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-semibold">
          &copy; {currentYear} {SITE_CONFIG.siteName}. All rights reserved. ✨
        </p>
        <p className="mt-3 text-sm text-teal-300 font-medium">
          🎨 Website designed by mgx42
        </p>
      </div>
    </footer>
  );
}

export default Footer;
