/**
 * Footer Component
 * Application footer with copyright information
 */

import { SITE_CONFIG } from '../config/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-stone-800 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} {SITE_CONFIG.siteName}. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-stone-500">
          Website designed by mgx42
        </p>
      </div>
    </footer>
  );
}

export default Footer;
