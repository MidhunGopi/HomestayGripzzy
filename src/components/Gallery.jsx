/**
 * Gallery Section Component
 * Image grid showcase of the property
 */

import { GALLERY_IMAGES } from '../config/gallery';

function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-16">
          Explore Our Home
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id} 
              className="group rounded-xl overflow-hidden shadow-lg relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-lg font-medium">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
