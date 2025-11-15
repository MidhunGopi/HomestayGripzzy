/**
 * Amenities Section Component
 * Grid display of features and amenities with icons
 */

import { AMENITIES } from '../config/amenities';

function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-16">
          What We Offer
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {AMENITIES.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
              title={item.description}
            >
              <div className="bg-emerald-100 p-5 rounded-full mb-4">
                <item.icon className="text-emerald-700" size={32} />
              </div>
              <span className="font-medium text-stone-700">{item.name}</span>
              <p className="text-xs text-stone-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
