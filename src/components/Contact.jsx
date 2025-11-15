/**
 * Contact Section Component
 * Contact information and booking details
 */

import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, SITE_CONFIG } from '../config/constants';

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-emerald-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for Your Getaway?
        </h2>

        <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
          We'd love to host you. Send us a message with any questions you might have.
        </p>

        {/* Owner Info */}
        <div className="text-center mb-10">
          <p className="text-xl text-emerald-100">For direct inquiries, contact the owner:</p>
          <p className="text-2xl font-semibold text-white mt-2">{CONTACT_INFO.ownerName}</p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center space-x-3 hover:text-emerald-200 transition-colors group"
          >
            <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
              <Mail size={24} className="text-emerald-100" />
            </div>
            <span className="text-lg">{CONTACT_INFO.email}</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center space-x-3 hover:text-emerald-200 transition-colors group"
          >
            <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
              <Phone size={24} className="text-emerald-100" />
            </div>
            <span className="text-lg">{CONTACT_INFO.phone}</span>
          </a>

          {/* Location */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-full">
              <MapPin size={24} className="text-emerald-100" />
            </div>
            <span className="text-lg">{CONTACT_INFO.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
