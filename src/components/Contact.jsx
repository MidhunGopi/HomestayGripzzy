/**
 * Contact Section Component
 * Contact information and booking details
 */

import { Phone, Instagram, MapPin, Mail } from 'lucide-react';
import { CONTACT_INFO, SITE_CONFIG } from '../config/constants';

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ29sZCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-amber-400 drop-shadow-2xl">
          🌟 Ready for Your Getaway?
        </h2>

        <p className="text-2xl text-amber-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          We'd love to host you. Send us a message with any questions you might have.
        </p>

        {/* Owner Info */}
        <div className="text-center mb-10 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border-4 border-amber-600/50">
          <p className="text-xl text-amber-800 font-semibold">For direct inquiries, contact the owner:</p>
          <p className="text-3xl font-extrabold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent mt-2">{CONTACT_INFO.ownerName}</p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Instagram */}
          <a
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-5 rounded-2xl shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 group border-3 border-white/30 font-bold"
          >
            <Instagram size={28} className="group-hover:scale-125 transition-transform" />
            <span className="text-lg">@griffith_ronald</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center space-x-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-5 rounded-2xl shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 group border-3 border-white/30 font-bold"
          >
            <Mail size={28} className="group-hover:scale-125 transition-transform" />
            <span className="text-lg break-all">gripzysereneabode@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center space-x-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-5 rounded-2xl shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 group border-3 border-white/30 font-bold"
          >
            <Phone size={28} className="group-hover:scale-125 transition-transform" />
            <span className="text-lg whitespace-nowrap">{CONTACT_INFO.phone}</span>
          </a>

          {/* Location */}
          <div className="flex items-center space-x-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-5 rounded-2xl shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 group border-3 border-white/30 font-bold">
            <MapPin size={28} className="group-hover:scale-125 transition-transform" />
            <span className="text-lg">{CONTACT_INFO.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
