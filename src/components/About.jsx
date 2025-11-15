/**
 * About Section Component
 * Description of the homestay and location details
 */

import { SITE_CONFIG, NEARBY_LOCATIONS } from '../config/constants';

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="pr-4">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
            Experience Puthenthope Like Never Before
          </h2>
          
          <p className="text-lg text-stone-700 mb-4">
            Welcome to {SITE_CONFIG.siteName} in Puthenthope, a coastal village 
            near Technopark Kazhakkoottam, Trivandrum. Tucked away in a quiet neighborhood, 
            this individual room on the ground floor is perfect for travelers and professionals alike.
          </p>

          <p className="text-lg text-stone-700 mb-6">
            Your host, Griffith Joseph Ronald, resides on the same floor, striking a balance between privacy and shared spaces.
            We are close to major points:
          </p>

          {/* Location Details */}
          <ul className="text-lg text-stone-700 mb-6 space-y-2">
            <li className="flex items-center">
              <span className="text-emerald-700 font-bold mr-3">•</span>
              Kazhakkoottam: {NEARBY_LOCATIONS.kazhakkoottam}
            </li>
            <li className="flex items-center">
              <span className="text-emerald-700 font-bold mr-3">•</span>
              Technopark: {NEARBY_LOCATIONS.technopark}
            </li>
            <li className="flex items-center">
              <span className="text-emerald-700 font-bold mr-3">•</span>
              Lulu Mall: {NEARBY_LOCATIONS.luluMall}
            </li>
            <li className="flex items-center">
              <span className="text-emerald-700 font-bold mr-3">•</span>
              Beach: {NEARBY_LOCATIONS.beach}
            </li>
            <li className="flex items-center">
              <span className="text-emerald-700 font-bold mr-3">•</span>
              Airport: {NEARBY_LOCATIONS.airport}
            </li>
          </ul>

          <a
            href="#contact"
            className="text-emerald-700 font-semibold text-lg hover:text-emerald-600 transition-colors"
          >
            Get in touch &rarr;
          </a>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://placehold.co/600x450/AABB99/FFFFFF?text=Cozy+Interior+Shot" 
            alt="Cozy interior of the homestay" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
