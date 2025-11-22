/**
 * Testimonials Section Component
 * Guest reviews carousel with images
 * Now displays user-uploaded testimonials from localStorage
 */

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../config/testimonials';
import { useSlider } from '../hooks/useSlider';

function Testimonials() {
  const [displayTestimonials, setDisplayTestimonials] = useState([]);

  useEffect(() => {
    // Load custom uploaded testimonials from localStorage
    const customTestimonials = localStorage.getItem('customTestimonials');
    
    if (customTestimonials) {
      const parsed = JSON.parse(customTestimonials);
      if (parsed.length > 0) {
        // Use custom uploaded testimonials
        setDisplayTestimonials(parsed);
      } else {
        // Fall back to default testimonials
        setDisplayTestimonials(TESTIMONIALS);
      }
    } else {
      // Fall back to default testimonials
      setDisplayTestimonials(TESTIMONIALS);
    }
  }, []);

  const { currentIndex, prevSlide, nextSlide } = useSlider(displayTestimonials.length);
  const currentTestimonial = displayTestimonials[currentIndex] || TESTIMONIALS[0];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-white via-amber-50 to-yellow-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent mb-16">
          ⭐ What Our Guests Say
        </h2>

        <div className="relative w-full h-[550px]">
          {/* Testimonial Card */}
          <div className="flex h-full justify-center items-start p-4">
            <div className="flex flex-col items-center text-center max-w-sm bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-amber-200">
              {/* Quote Text */}
              <p className="text-xl text-gray-700 italic mb-6 leading-relaxed font-medium">
                💬 "{currentTestimonial.quote}"
              </p>

              {/* Star Rating */}
              <div className="flex mb-4 gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="text-amber-500 drop-shadow-lg" 
                    fill="currentColor" 
                    size={24} 
                  />
                ))}
              </div>

              {/* Author */}
              <span className="font-bold text-2xl bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent mb-6">
                {currentTestimonial.author}
              </span>

              {/* Testimonial Screenshot */}
              <div className="w-full max-w-[380px] bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl shadow-xl p-4 border-2 border-amber-200">
                {currentTestimonial.image ? (
                  <img
                    src={currentTestimonial.image}
                    alt={`Review by ${currentTestimonial.author}`}
                    className="w-full h-auto rounded-xl object-contain"
                  />
                ) : (
                  <div className="bg-white rounded-xl p-6 flex items-center justify-center min-h-[200px]">
                    <p className="text-amber-700 text-lg font-bold">📸 Review Image Coming Soon</p>
                  </div>
                )}
              </div>

              {/* Slide Indicator */}
              <div className="flex space-x-3 mt-6">
                {displayTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {}}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-gradient-to-r from-amber-600 to-amber-700 scale-125 shadow-lg' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-10 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full p-3 hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-10 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full p-3 hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
