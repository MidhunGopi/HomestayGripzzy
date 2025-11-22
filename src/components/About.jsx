/**
 * About Section Component
 * Description of the homestay and location details
 */

import { SITE_CONFIG, NEARBY_LOCATIONS } from '../config/constants';

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-teal-100">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8 text-center">
            🏝️ Experience Puthenthope Like Never Before
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to <span className="font-bold text-teal-600">{SITE_CONFIG.siteName}</span> in Puthenthope, a coastal village 
                near Technopark Kazhakkoottam, Trivandrum. Tucked away in a quiet neighborhood, 
                this individual room on the ground floor is perfect for travelers and professionals alike.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Your host, <span className="font-bold text-teal-600">Griffith Joseph Ronald</span>, resides on the same floor, 
                striking a balance between privacy and shared spaces.
              </p>

              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <span>🌟</span> Why Choose Us?
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-300">✓</span> Peaceful coastal location
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-300">✓</span> Close to tech hubs & attractions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-300">✓</span> Perfect for work & leisure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-300">✓</span> Friendly host & comfortable stay
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Location Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                <span>📍</span> We Are Close To:
              </h3>
              
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded-xl border-l-4 border-teal-500 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">📍</span>
                    <div>
                      <strong className="text-teal-700 text-lg">Kazhakkoottam</strong>
                      <p className="text-gray-600 text-sm">{NEARBY_LOCATIONS.kazhakkoottam}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded-xl border-l-4 border-cyan-500 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">💼</span>
                    <div>
                      <strong className="text-teal-700 text-lg">Technopark</strong>
                      <p className="text-gray-600 text-sm">{NEARBY_LOCATIONS.technopark}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🛍️</span>
                    <div>
                      <strong className="text-teal-700 text-lg">Lulu Mall</strong>
                      <p className="text-gray-600 text-sm">{NEARBY_LOCATIONS.luluMall}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded-xl border-l-4 border-teal-500 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🏖️</span>
                    <div>
                      <strong className="text-teal-700 text-lg">Beach</strong>
                      <p className="text-gray-600 text-sm">{NEARBY_LOCATIONS.beach}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded-xl border-l-4 border-cyan-500 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">✈️</span>
                    <div>
                      <strong className="text-teal-700 text-lg">Airport</strong>
                      <p className="text-gray-600 text-sm">{NEARBY_LOCATIONS.airport}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-xl px-10 py-4 rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/30"
            >
              💬 Get in Touch &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
