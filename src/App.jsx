/**
 * Main App Component
 * Entry point that combines all sections
 * Supports /admin route for content management
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    // Simple client-side routing for admin panel
    const checkRoute = () => {
      const hash = window.location.hash;
      setIsAdminRoute(hash === '#admin');
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    
    return () => window.removeEventListener('hashchange', checkRoute);
  }, []);

  // Show admin panel if on admin route
  if (isAdminRoute) {
    return <AdminPanel />;
  }

  // Show normal website
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
