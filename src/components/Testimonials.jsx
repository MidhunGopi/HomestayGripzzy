/**
 * Testimonials Section Component
 * Guest reviews carousel with images
 */

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../config/testimonials';
import { useSlider } from '../hooks/useSlider';

function Testimonials() {
  const { currentIndex, prevSlide, nextSlide } = useSlider(TESTIMONIALS.length);
  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-16">
          What Our Guests Say
        </h2>

        <div className="relative w-full h-[550px]">
          {/* Testimonial Card */}
          <div className="flex h-full justify-center items-start p-4">
            <div className="flex flex-col items-center text-center max-w-sm">
              {/* Quote Text */}
              <p className="text-lg text-stone-700 italic mb-6">
                "{currentTestimonial.quote}"
              </p>

              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="text-yellow-500" 
                    fill="currentColor" 
                    size={20} 
                  />
                ))}
              </div>

              {/* Author */}
              <span className="font-semibold text-stone-800 mb-6">
                {currentTestimonial.author}
              </span>

              {/* Testimonial Screenshot */}
              <div className="w-full max-w-[380px] bg-white rounded-lg shadow-xl p-2 border border-stone-200">
                <img
                  src={currentTestimonial.imageSrc}
                  alt={currentTestimonial.alt}
                  className="w-full h-auto rounded-md object-contain"
                  loading="lazy"
                />
              </div>

              {/* Slide Indicator */}
              <div className="flex space-x-2 mt-6">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {}}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      idx === currentIndex ? 'bg-emerald-700' : 'bg-stone-300'
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
            className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-10 bg-white/50 rounded-full p-2 text-stone-700 hover:bg-white transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-10 bg-white/50 rounded-full p-2 text-stone-700 hover:bg-white transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
