/**
 * Hero Section Component
 * Main welcome banner with background image
 */

import { SITE_CONFIG } from '../config/constants';

function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')"
        }}
        role="img"
        aria-label="Beautiful beach view with blue water and sandy shore"
      >
        <span className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70"></span>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-2xl text-amber-400">
          Welcome to {SITE_CONFIG.siteName}
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-amber-100 drop-shadow-xl">
          {SITE_CONFIG.tagline}
        </p>
        <a
          href="#gallery"
          className="mt-10 inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-600/50 hover:scale-110 transition-all duration-300 text-lg border-2 border-amber-400/30"
        >
          🏖️ View Gallery
        </a>
      </div>
    </section>
  );
}

export default Hero;
