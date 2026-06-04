'use client'

import { useState, useEffect } from 'react'
import { Menu, X, PhoneCall } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to change style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3 border-b border-brand-gray'
          : 'bg-white/95 md:bg-white/90 py-5 border-b border-brand-gray'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo Section */}
        <a href="#home" className="flex items-center focus-visible:ring-2 focus-visible:ring-brand-blue outline-none" aria-label="KIVESI LOGISTICS Home">
          <img
            src="/logo.svg"
            alt="KIVESI LOGISTICS Logo"
            width={180}
            height={43}
            className="h-9 md:h-11 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue px-2 py-1 rounded"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0689583281"
            className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors px-3 py-2 rounded focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label="Call Kivesi Logistics at 0689583281"
          >
            <PhoneCall size={16} />
            <span>0689583281</span>
          </a>
          <a
            href="#quote"
            className="bg-brand-blue text-white px-5 py-3 rounded text-sm font-bold hover:bg-brand-blue-dark transition-colors shadow focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Hamburger / Trigger */}
        <button
          className="lg:hidden p-2 rounded text-brand-dark focus-visible:ring-2 focus-visible:ring-brand-blue min-h-[48px] min-w-[48px] flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close main menu' : 'Open main menu'}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-brand-gray w-full overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-lg font-bold text-brand-dark hover:text-brand-blue transition-colors py-2 border-b border-brand-gray/50 focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <a
                  href="tel:0689583281"
                  className="flex items-center justify-center gap-2 bg-brand-gray text-brand-dark py-3.5 rounded font-bold text-base min-h-[48px] hover:bg-brand-gray/80 transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <PhoneCall size={18} />
                  Call Now: 0689583281
                </a>
                <a
                  href="#quote"
                  onClick={handleLinkClick}
                  className="bg-brand-blue text-white text-center py-3.5 rounded font-bold text-base min-h-[48px] hover:bg-brand-blue-dark transition-colors shadow focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  Get Quote
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
