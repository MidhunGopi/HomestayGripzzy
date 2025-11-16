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
    <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex-shrink-0">
          <a href="#home" className="text-2xl font-bold text-emerald-800">
            Gripzy Serene Abode
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-stone-600 hover:text-emerald-700 transition-colors duration-200 font-medium"
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
            className="text-stone-800 hover:text-emerald-700"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-2xl font-bold text-emerald-800">
              Gripzy Serene Abode
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-stone-800 hover:text-emerald-700"
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
                className="text-xl text-stone-700 hover:text-emerald-700 p-2 rounded-md"
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
        style={{ backgroundImage: "url('https://placehold.co/1600x900/6A8D9F/FFFFFF?text=Serene+Beach+View')" }}
        role="img"
        aria-label="Serene beach view with blue water and sandy shore"
      >
        <span className="absolute inset-0 bg-black/50"></span>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Welcome to Gripzy Serene Abode
        </h1>
        <p className="text-xl md:text-2xl font-light text-stone-200">
          Your cozy & peaceful getaway in Puthenthope, Thiruvananthapuram
        </p>
        <a
          href="#gallery"
          className="mt-8 inline-block bg-white text-emerald-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-stone-100 transition-all text-lg"
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
    <section id="about" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="pr-4">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
            Experience Puthenthope Like Never Before
          </h2>
          <p className="text-lg text-stone-700 mb-4">
            Welcome to Gripzy Serene Abode in Puthenthope, a coastal village 
            near Technopark Kazhakkoottam, Trivandrum. Tucked away in a quiet neighborhood, 
            this individual room on the ground floor is perfect for travelers and professionals alike.
          </p>
          <p className="text-lg text-stone-700 mb-6">
            Your host, Griffith Joseph Ronald, resides on the same floor, striking a balance between privacy and shared spaces.
            We are close to major points: Kazhakkoottam (4km), Technopark (5km), 
            Lulu Mall (10km), the beach (1.3km), and the airport (13km).
          </p>
          <a
            href="#contact"
            className="text-emerald-700 font-semibold text-lg hover:text-emerald-600 transition-colors"
          >
            Get in touch &rarr;
          </a>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl">
          {/* Replaced placeholder with uploaded interior photo */}
          <img 
            src="/Images/bedroom.jpg" 
            alt="Cozy interior of the homestay" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-16">
          What We Offer
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {amenitiesList.map((item) => (
            <div key={item.name} className="flex flex-col items-center p-4">
              <div className="bg-emerald-100 p-5 rounded-full mb-4">
                <item.icon className="text-emerald-700" size={32} />
              </div>
              <span className="font-medium text-stone-700">{item.name}</span>
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
    { src: '/Images/bedroom.jpg', alt: 'View of the comfortable bedroom' },
    { src: '/Images/bedroom%20two.jpg', alt: 'Second bedroom view' },
    { src: '/Images/house%20exterior%20photo.jpg', alt: 'Exterior of the property' },
    { src: '/Images/bedroom.jpg', alt: 'Room details and soft lighting' },
    { src: '/Images/bedroom%20two.jpg', alt: 'Another interior angle' },
    { src: '/Images/house%20exterior%20photo.jpg', alt: 'Nearby scenery and entrance' },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-16">
          Explore Our Home
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.src} className="group rounded-xl overflow-hidden shadow-lg relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-lg font-medium">{img.alt}</p>
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
      imageSrc: 'https://placehold.co/350x500/EEEEEE/333333?text=Airbnb+Review+Screenshot+1',
      alt: 'Testimonial screenshot from a happy guest',
      quote: "Absolutely loved our stay! The place was sparkling clean and the host was incredibly welcoming. That view!",
      author: "Guest from Airbnb"
    },
    {
      id: 2,
      imageSrc: 'https://placehold.co/350x500/EEEEEE/333333?text=Airbnb+Review+Screenshot+2',
      alt: 'Testimonial screenshot from a family',
      quote: "Perfect for our family. So cozy and had all the amenities we needed. We will definitely be back.",
      author: "Guest from Airbnb"
    },
    {
      id: 3,
      imageSrc: 'https://placehold.co/350x500/EEEEEE/333333?text=Airbnb+Review+Screenshot+3',
      alt: 'Testimonial screenshot highlighting location',
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
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-16">
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
                  <p className="text-lg text-stone-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-500" fill="currentColor" size={20} />
                    ))}
                  </div>
                  <span className="font-semibold text-stone-800">{testimonial.author}</span>
                  
                  {/* Testimonial Screenshot */}
                  <div className="mt-6 w-full max-w-[300px] bg-white rounded-lg shadow-xl p-2 border border-stone-200">
                    <img
                      src={testimonial.imageSrc}
                      alt={testimonial.alt}
                      className="w-full h-auto rounded-md object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
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

// --- Contact Section Component ---
// Shows contact details and a booking link
function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-emerald-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for Your Getaway?
        </h2>
        <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
          We'd love to host you. Send us 
          a message with any questions you might have.
        </p>
        
        {/* Airbnb button container removed */}
        
        <div className="text-center mb-10">
          <p className="text-xl text-emerald-100">For direct inquiries, contact the owner:</p>
          <p className="text-2xl font-semibold text-white mt-2">Griffith Joseph Ronald</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex items-center space-x-3">
            <Mail size={24} className="text-emerald-200" />
            {/* --- IMPORTANT ---
            // Replace with your contact email
            */}
            <a href="mailto:your-email@example.com" className="text-lg hover:underline">
              your-email@example.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone size={24} className="text-emerald-200" />
            {/* --- IMPORTANT ---
            // This is your contact number
            */}
            <a href="tel:+919633099347" className="text-lg hover:underline">
              +91 96330 99347
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin size={24} className="text-emerald-200" />
            <span className="text-lg">Thiruvananthapuram, Kerala</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer className="py-12 bg-stone-800 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Gripzy Serene Abode. All rights reserved.</p>
        <p className="mt-2 text-sm">
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