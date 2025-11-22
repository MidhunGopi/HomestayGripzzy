/**
 * Amenities Section Component
 * Grid display of features and amenities with icons
 */

import { AMENITIES } from '../config/amenities';

function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent mb-16">
          ⭐ What We Offer
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {AMENITIES.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer border-2 border-amber-200"
              title={item.description}
            >
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-5 rounded-full mb-4 shadow-lg">
                <item.icon className="text-white" size={32} />
              </div>
              <span className="font-bold text-amber-900">{item.name}</span>
              <p className="text-xs text-amber-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
