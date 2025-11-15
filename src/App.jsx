/**
 * Main App Component
 * Entry point that combines all sections
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
