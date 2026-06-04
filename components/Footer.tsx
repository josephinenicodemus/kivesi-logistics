'use client'

import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Fleet Showcase', href: '#fleet' },
    { name: 'Contact Us', href: '#contact' }
  ]

  const services = [
    { name: 'Road Freight', href: '#services' },
    { name: 'Distribution Solutions', href: '#services' },
    { name: 'Cross-Border Logistics', href: '#coverage' },
    { name: 'Clearing & Forwarding', href: '#about' }
  ]

  return (
    <footer className="bg-brand-gray-light border-t border-brand-gray pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand details (4 columns on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="inline-block focus-visible:ring-2 focus-visible:ring-brand-blue outline-none" aria-label="KIVESI LOGISTICS Home">
              <img
                src="/logo.svg"
                alt="KIVESI LOGISTICS Logo"
                width={180}
                height={43}
                className="h-10 w-auto"
              />
            </a>
            <p className="text-brand-muted text-sm leading-relaxed max-w-sm">
              Providing professional road freight, distribution, and cross-border logistics clearing services. Connecting trade routes between Tanzania, DR Congo, Malawi, and Mozambique since 2024.
            </p>
            <div className="text-xs text-brand-muted font-bold">
              ESTABLISHED IN 2024
            </div>
          </div>

          {/* Column 2: Quick Links (2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-extrabold text-brand-dark text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Footer Quick Links">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brand-muted hover:text-brand-blue text-sm transition-colors font-medium focus-visible:ring-2 focus-visible:ring-brand-blue outline-none rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Services (3 columns on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-extrabold text-brand-dark text-sm uppercase tracking-widest">
              Logistics Services
            </h3>
            <div className="flex flex-col gap-2.5">
              {services.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brand-muted hover:text-brand-blue text-sm transition-colors font-medium focus-visible:ring-2 focus-visible:ring-brand-blue outline-none rounded"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Info (3 columns on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-extrabold text-brand-dark text-sm uppercase tracking-widest">
              Contact Office
            </h3>
            <ul className="space-y-3 text-sm text-brand-muted font-medium" aria-label="Office contact details">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Tabata Campo, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-blue flex-shrink-0" aria-hidden="true" />
                <a href="tel:0689583281" className="hover:text-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue outline-none rounded">0689583281</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-blue flex-shrink-0" aria-hidden="true" />
                <a href="mailto:josephinenicodemus05@gmail.com" className="hover:text-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue outline-none rounded break-all">josephinenicodemus05@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="border-t border-brand-gray pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-xs font-semibold text-center sm:text-left">
            &copy; {currentYear} Kivesi Logistics. All rights reserved. Delivering Excellence Across Borders.
          </p>
          <div className="flex gap-6 text-xs text-brand-muted font-semibold">
            <a href="#about" className="hover:text-brand-blue">Privacy Policy</a>
            <a href="#about" className="hover:text-brand-blue">Terms &amp; Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
