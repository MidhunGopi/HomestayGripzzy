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
        <span className="absolute inset-0 bg-black/35 backdrop-blur-sm"></span>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Welcome to {SITE_CONFIG.siteName}
        </h1>
        <p className="text-xl md:text-2xl font-light text-stone-200">
          {SITE_CONFIG.tagline}
        </p>
        <a
          href="#gallery"
          className="mt-8 inline-block bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-emerald-800 transition-all text-lg"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
}

export default Hero;
