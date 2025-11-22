/**
 * Gallery Section Component
 * Infinite auto-scrolling carousel with hover to reverse direction
 * Now displays user-uploaded images from localStorage
 */

import { useState, useEffect, useRef } from 'react';
import { GALLERY_IMAGES } from '../config/gallery';

function Gallery() {
  const [displayImages, setDisplayImages] = useState([]);
  const [scrollDirection, setScrollDirection] = useState('left'); // 'left' or 'right'
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Load custom uploaded images from localStorage
    const customImages = localStorage.getItem('galleryImages');
    
    if (customImages) {
      const parsed = JSON.parse(customImages);
      if (parsed.length > 0) {
        // Use custom uploaded images
        setDisplayImages(parsed);
      } else {
        // Fall back to default images
        setDisplayImages(GALLERY_IMAGES);
      }
    } else {
      // Fall back to default images
      setDisplayImages(GALLERY_IMAGES);
    }
  }, []);

  const handleMouseEnter = () => {
    // Reverse direction on hover
    setScrollDirection(prev => prev === 'left' ? 'right' : 'left');
  };

  // Duplicate images for seamless infinite scroll
  const allImages = [...displayImages, ...displayImages, ...displayImages];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent mb-16">
          📸 Explore Our Home
        </h2>

        {/* Scrolling Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-hidden"
            onMouseEnter={handleMouseEnter}
          >
            <div className={`flex gap-6 ${scrollDirection === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
              {allImages.map((img, index) => (
                <div 
                  key={`${img.id}-${index}`}
                  className="group rounded-3xl overflow-hidden shadow-2xl relative hover:scale-105 transition-all duration-500 border-4 border-white flex-shrink-0 w-96"
                >
                  {img.src && img.src.startsWith('data:image') ? (
                    // User uploaded image (base64)
                    <img 
                      src={img.src} 
                      alt={img.alt || img.title || 'Gallery image'} 
                      className="w-full h-72 object-cover"
                    />
                  ) : (
                    // Placeholder for default config images
                    <div className={`w-full h-72 bg-gradient-to-br ${index % 3 === 0 ? 'from-amber-300 to-yellow-400' : index % 3 === 1 ? 'from-yellow-300 to-orange-400' : 'from-orange-300 to-amber-400'} flex items-center justify-center`}>
                      <div className="text-center">
                        <p className="text-white text-6xl mb-2">📷</p>
                        <p className="text-white text-xl font-bold">{img.title || 'Coming Soon'}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-xl font-bold drop-shadow-lg">✨ {img.title || 'Gallery Image'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-amber-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-amber-50 to-transparent pointer-events-none z-10"></div>
        </div>

        <p className="text-center text-gray-600 mt-8 text-sm italic">
          Hover over the carousel to reverse direction • Currently scrolling {scrollDirection === 'left' ? '⬅️' : '➡️'}
        </p>
      </div>
    </section>
  );
}

export default Gallery;
