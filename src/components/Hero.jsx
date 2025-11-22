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
        <span className="absolute inset-0 bg-gradient-to-br from-teal-600/60 via-cyan-500/50 to-blue-600/60"></span>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-2xl bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
          ✨ Welcome to {SITE_CONFIG.siteName}
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-white drop-shadow-xl">
          {SITE_CONFIG.tagline}
        </p>
        <a
          href="#gallery"
          className="mt-10 inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 text-lg border-2 border-white/30"
        >
          🏖️ View Gallery
        </a>
      </div>
    </section>
  );
}

export default Hero;
