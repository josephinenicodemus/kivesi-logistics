'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

/* =========================================
   Navigation Links
========================================= */

const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Fleet',
    href: '#fleet'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
]

/* =========================================
   Component
========================================= */

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* =========================================
     Scroll Detection
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* =========================================
          Header
      ========================================= */}

      <header
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          transition-all
          duration-500
          ${
            scrolled
              ? 'border-b border-white/10 bg-[#061120]/85 backdrop-blur-2xl shadow-xl shadow-black/10'
              : 'bg-transparent'
          }
        `}
      >
        {/* =========================================
            Container
        ========================================= */}

        <div
          className="
            mx-auto
            flex
            h-24
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-8
          "
        >
          {/* =========================================
              Logo
          ========================================= */}

          <Link
            href="#home"
            className="
              group
              relative
              flex
              items-center
            "
          >
            <div className="flex flex-col">
              <span
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-blue-400
                "
              >
                Kivesi
              </span>

              <span
                className="
                  -mt-1
                  text-[11px]
                  uppercase
                  tracking-[4px]
                  text-slate-400
                "
              >
                Logistics
              </span>
            </div>

            {/* Hover Glow */}

            <div
              className="
                absolute
                -inset-3
                rounded-xl
                bg-blue-500/0
                blur-2xl
                transition-all
                duration-500
                group-hover:bg-blue-500/10
              "
            />
          </Link>

          {/* =========================================
              Desktop Navigation
          ========================================= */}

          <nav
            className="
              hidden
              items-center
              gap-10
              lg:flex
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  group
                  relative
                  text-sm
                  font-medium
                  tracking-wide
                  text-slate-300
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.name}

                {/* Animated Underline */}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-blue-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* =========================================
              Right Actions
          ========================================= */}

          <div className="hidden items-center gap-5 lg:flex">
            {/* Phone Button */}

            <a
              href="tel:0689583281"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-blue-400/40
                hover:bg-blue-500/10
              "
            >
              <Phone className="h-4 w-4 text-blue-400" />

              <span>0689 583 281</span>
            </a>

            {/* CTA Button */}

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-900/20
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-blue-500
              "
            >
              Get Quote
            </a>
          </div>

          {/* =========================================
              Mobile Menu Button
          ========================================= */}

          <button
            aria-label="Toggle Navigation Menu"
            onClick={() => setOpen(!open)}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-blue-400/40
              hover:bg-blue-500/10
              lg:hidden
            "
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* =========================================
          Mobile Menu
      ========================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="
              fixed
              top-24
              left-0
              z-40
              w-full
              border-b
              border-white/10
              bg-[#061120]/95
              px-6
              py-8
              backdrop-blur-2xl
              lg:hidden
            "
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-lg
                    font-medium
                    text-slate-300
                    transition-colors
                    duration-300
                    hover:text-blue-400
                  "
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}

              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="tel:0689583281"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-4
                    text-white
                    backdrop-blur-md
                  "
                >
                  <Phone className="h-5 w-5 text-blue-400" />

                  <span>0689 583 281</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Get Quote
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
