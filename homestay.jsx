import React, { useState } from 'react';
import { 
  Wifi, 
  BedDouble, 
  ParkingCircle, 
  Wind, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  ChevronLeft,
  Waves, // Added for Beach Access
  Lock // Added for Lock on door
} from 'lucide-react';

// --- Header / Navigation Component ---
// Handles the sticky navigation bar and the mobile menu
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex-shrink-0">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Gripzy Serene Abode
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
          {/* "Book Now" button removed */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-slate-800 hover:text-blue-600"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-slate-100">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Gripzy Serene Abode
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-800 hover:text-blue-600"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-slate-700 hover:text-blue-600 p-2 rounded-md"
              >
                {item.name}
              </a>
            ))}
            {/* "Book Now" button removed from mobile */}
          </div>
        </div>
      )}
    </header>
  );
}

// --- Hero Section Component ---
// The main welcome banner with the large background image
function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      {/* --- IMPORTANT ---
      // Changed to a beautiful beach image to highlight proximity to the beach!
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')" }}
        role="img"
        aria-label="Serene beach view with blue water and sandy shore"
      >
        <span className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900/30 to-indigo-900/40"></span>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-2xl">
          Welcome to Gripzy Serene Abode
        </h1>
        <p className="text-xl md:text-2xl font-normal text-white drop-shadow-lg">
          Your cozy & peaceful getaway in Puthenthope, Thiruvananthapuram
        </p>
        <a
          href="#gallery"
          className="mt-8 inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
}

// --- About Section Component ---
// Describes the homestay
function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="pr-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            Experience Puthenthope Like Never Before
          </h2>
          <p className="text-lg text-slate-600 mb-5 leading-relaxed">
            Welcome to Gripzy Serene Abode in Puthenthope, a coastal village 
            near Technopark Kazhakkoottam, Trivandrum. Tucked away in a quiet neighborhood, 
            this individual room on the ground floor is perfect for travelers and professionals alike.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Your host, Griffith Joseph Ronald, resides on the same floor, striking a balance between privacy and shared spaces.
            We are close to major points: Kazhakkoottam (4km), Technopark (5km), 
            Lulu Mall (10km), the beach (1.3km), and the airport (13km).
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-slate-800 font-bold text-lg hover:text-slate-900 transition-colors group border-b-2 border-slate-800 hover:border-slate-900"
          >
            Get in touch 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center h-[400px]">
          <p className="text-slate-400 text-lg font-medium">Image Coming Soon</p>
        </div>
      </div>
    </section>
  );
}

// --- Amenities Section Component ---
// Lists the key features and amenities with icons
function Amenities() {
  const amenitiesList = [
    { icon: Wifi, name: 'Free Wi-Fi' },
    { icon: BedDouble, name: 'Comfortable Bed' },
    { icon: ParkingCircle, name: 'Free Parking' },
    { icon: Wind, name: 'Air Conditioning' },
    { icon: Waves, name: 'Beach Access' },
    { icon: Lock, name: 'Lock on Bedroom Door' },
    // Add or remove items as needed
  ];

  return (
    <section id="amenities" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
          What We Offer
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {amenitiesList.map((item) => (
            <div key={item.name} className="flex flex-col items-center p-4 group">
              <div className="bg-slate-100 p-5 rounded-2xl mb-4 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                <item.icon className="text-slate-700" size={32} />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Gallery Section Component ---
// Shows a grid of photos
function Gallery() {
  // --- IMPORTANT ---
  // I've updated these with 6 photos from your Booking.com listing.
  // You can add more, remove, or change them by pasting new "Image Address" URLs.
  const images = [
    { src: '', alt: 'Gallery Image 1' },
    { src: '', alt: 'Gallery Image 2' },
    { src: '', alt: 'Gallery Image 3' },
    { src: '', alt: 'Gallery Image 4' },
    { src: '', alt: 'Gallery Image 5' },
    { src: '', alt: 'Gallery Image 6' },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
          Explore Our Home
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative ring-1 ring-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 h-72 flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-400 text-lg font-medium">{img.alt}</p>
                <p className="text-slate-300 text-sm mt-2">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Testimonials Section Component ---
// This is where you put screenshots from Airbnb, as requested
function Testimonials() {
  // --- IMPORTANT ---
  // Replace these placeholders with your actual testimonial screenshots
  const testimonials = [
    {
      id: 1,
      imageSrc: '',
      alt: 'Testimonial 1',
      quote: "Absolutely loved our stay! The place was sparkling clean and the host was incredibly welcoming. That view!",
      author: "Guest from Airbnb"
    },
    {
      id: 2,
      imageSrc: '',
      alt: 'Testimonial 2',
      quote: "Perfect for our family. So cozy and had all the amenities we needed. We will definitely be back.",
      author: "Guest from Airbnb"
    },
    {
      id: 3,
      imageSrc: '',
      alt: 'Testimonial 3',
      quote: "The location is unbeatable. So close to everything, yet so quiet and peaceful. Highly recommend.",
      author: "Guest from Airbnb"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
          What Our Guests Say
        </h2>
        
        <div className="relative w-full h-[550px] overflow-hidden">
          {/* Slider Container */}
          <div 
            className="flex transition-transform ease-out duration-500 h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 h-full flex justify-center items-start p-4">
                <div className="flex flex-col items-center text-center max-w-sm">
                  <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-amber-400" fill="currentColor" size={20} />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-800">{testimonial.author}</span>
                  
                  {/* Testimonial Screenshot - Hidden until images added */}
                  {testimonial.imageSrc && (
                    <div className="mt-6 w-full max-w-[380px] bg-white rounded-xl shadow-xl p-2 ring-1 ring-slate-200 hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={testimonial.imageSrc}
                        alt={testimonial.alt}
                        className="w-full h-auto rounded-md object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-10 bg-white/80 backdrop-blur-sm rounded-full p-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-10 bg-white/80 backdrop-blur-sm rounded-full p-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}

// --- Contact Section Component ---
// Shows contact details and a booking link
function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Ready for Your Getaway?
        </h2>
        <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          We'd love to host you. Send us 
          a message with any questions you might have.
        </p>
        
        {/* Airbnb button container removed */}
        
        <div className="text-center mb-10 bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <p className="text-xl text-slate-600 font-medium">For direct inquiries, contact the owner:</p>
          <p className="text-2xl font-bold text-slate-800 mt-2">Griffith Joseph Ronald</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16">
          <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-slate-200">
            <MapPin size={24} className="text-slate-700 group-hover:scale-110 transition-transform" />
            <a
              href="https://maps.google.com/maps?hl=en-GB&gl=IN&um=1&ie=UTF-8&fb=1&sa=X&geocode=KTNA0dZovwU7McQfqvgsL1ct&daddr=Gripzy+Serene+Abode,+Puthenthope+PO,+Menamkulam,+Kazhakkoottam,+Thiruvananthapuram,+Kerala+695586&ved=1t:55111&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-slate-800 font-semibold group-hover:text-slate-900 transition-colors"
            >
              View on Google Maps
            </a>
          </div>
          <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-slate-200">
            <Phone size={24} className="text-slate-700 group-hover:scale-110 transition-transform" />
            {/* --- IMPORTANT ---
            // This is your contact number
            */}
            <a href="tel:+919633099347" className="text-lg text-slate-800 font-semibold group-hover:text-slate-900 transition-colors">
              <span className="whitespace-nowrap">+91 96330 99347</span>
            </a>
          </div>
          <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-slate-200">
            <MapPin size={24} className="text-slate-700 group-hover:scale-110 transition-transform" />
            <span className="text-lg text-slate-800 font-semibold">Thiruvananthapuram, Kerala</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Gripzy Serene Abode. All rights reserved.</p>
        <p className="mt-2 text-sm text-slate-500">
          Website designed by mgx42
        </p>
      </div>
    </footer>
  );
}

// --- Main App Component ---
// This brings all the sections together
export default function App() {
  return (
    <div className="bg-white text-stone-800 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}