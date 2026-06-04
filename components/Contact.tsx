'use client'

import { motion } from 'framer-motion'
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const phone = '0689583281'
  const email = 'josephinenicodemus05@gmail.com'
  const address = 'Tabata Campo, Dar es Salaam, Tanzania'
  const whatsappUrl = 'https://wa.me/255689583281?text=Hello%20Kivesi%20Logistics%2C%20I%20would%20like%20to%20get%20in%20touch%20for%20a%20business%20logistics%20partnership.'

  return (
    <section id="contact" className="bg-white">
      
      {/* 1. Conversion-Focused CTA Strip (Immediately before the contact details/form) */}
      <div className="bg-brand-blue text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto text-center lg:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Need a Logistics Partner You Can Trust?
              </h3>
              <p className="text-white/80 text-sm sm:text-base max-w-xl">
                Get in touch today and discover reliable transportation and distribution solutions tailored to your business.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
              <a
                href="tel:0689583281"
                className="bg-white text-brand-blue hover:bg-brand-gray-light font-bold px-7 py-3.5 rounded text-center transition-colors min-h-[48px] inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Call Kivesi Logistics at 0689583281"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-7 py-3.5 rounded text-center transition-colors min-h-[48px] inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Message Kivesi Logistics on WhatsApp"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Contact Details & Maps Section */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Card List (Left 5 columns) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-sm font-bold text-brand-blue uppercase tracking-widest block mb-3">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
                  Contact Information
                </h2>
                <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-8">
                  Connect with our headquarters in Tabata Campo. You can call, email, message on WhatsApp, or visit us in person.
                </p>
              </div>

              {/* Cards List */}
              <div className="space-y-4" role="list">
                
                {/* Phone */}
                <a
                  href={`tel:${phone}`}
                  className="flex items-start gap-4 border border-brand-gray bg-brand-gray-light hover:border-brand-blue/50 p-5 rounded transition-all focus-visible:ring-2 focus-visible:ring-brand-blue outline-none group"
                  role="listitem"
                  aria-label={`Call Phone: ${phone}`}
                >
                  <div className="text-brand-blue bg-white p-3 border border-brand-gray rounded group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-brand-dark text-sm sm:text-base mb-1">Phone Call</h3>
                    <p className="text-brand-blue font-bold text-sm sm:text-base">{phone}</p>
                    <p className="text-brand-muted text-xs mt-0.5">Click to make a direct call</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 border border-brand-gray bg-brand-gray-light hover:border-brand-blue/50 p-5 rounded transition-all focus-visible:ring-2 focus-visible:ring-brand-blue outline-none group"
                  role="listitem"
                  aria-label={`Message WhatsApp: ${phone}`}
                >
                  <div className="text-brand-blue bg-white p-3 border border-brand-gray rounded group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <MessageSquare size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-brand-dark text-sm sm:text-base mb-1">WhatsApp Chat</h3>
                    <p className="text-brand-blue font-bold text-sm sm:text-base">{phone}</p>
                    <p className="text-brand-muted text-xs mt-0.5">Click to chat instantly</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-4 border border-brand-gray bg-brand-gray-light hover:border-brand-blue/50 p-5 rounded transition-all focus-visible:ring-2 focus-visible:ring-brand-blue outline-none group"
                  role="listitem"
                  aria-label={`Send Email: ${email}`}
                >
                  <div className="text-brand-blue bg-white p-3 border border-brand-gray rounded group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-brand-dark text-sm sm:text-base mb-1">Email Inquiry</h3>
                    <p className="text-brand-blue font-bold text-sm sm:text-base break-all">{email}</p>
                    <p className="text-brand-muted text-xs mt-0.5">Click to draft a direct mail</p>
                  </div>
                </a>

                {/* Address */}
                <div
                  className="flex items-start gap-4 border border-brand-gray bg-brand-gray-light p-5 rounded"
                  role="listitem"
                >
                  <div className="text-brand-blue bg-white p-3 border border-brand-gray rounded">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-brand-dark text-sm sm:text-base mb-1">Office Location</h3>
                    <p className="text-brand-dark font-medium text-sm sm:text-base">{address}</p>
                    <p className="text-brand-muted text-xs mt-0.5">Tabata Campo, Dar es Salaam</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map IFrame (Right 7 columns) */}
            <div className="lg:col-span-7 h-[420px] w-full rounded overflow-hidden border border-brand-gray relative">
              <iframe
                title="Kivesi Logistics Location Map - Tabata Campo, Dar es Salaam"
                src="https://maps.google.com/maps?q=Tabata%20Campo,%20Dar%20es%20Salaam,%20Tanzania&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
