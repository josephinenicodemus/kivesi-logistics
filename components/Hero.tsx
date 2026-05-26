'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

/* =========================================
   BRAND THEME: Kivesi Logistics
   - Primary: Deep Premium Blue (#0a1628 → #1e3a5f)
   - Accent: Silver/Metallic (#94a3b8, #cbd5e1)
   - Background: Dark Navy (#061120)
   - Text: White (#ffffff) + Soft Gray (#94a3b8)
========================================= */

/* =========================================
   Animation Variants
========================================= */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: [0.22, 1, 0.36, 1] // Premium cubic-bezier
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

/* =========================================
   Constants
========================================= */
const stats = [
  { value: '500+', label: 'Deliveries Completed' },
  { value: '50+', label: 'Fleet Vehicles' },
  { value: '20+', label: 'Regions Covered' }
] as const

/* =========================================
   Component
========================================= */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#061120]"
      aria-labelledby="hero-heading"
      style={{
        scrollBehavior: 'smooth'
      }}
    >
      {/* =========================================
          CINEMATIC BACKGROUND LAYERS
      ========================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep Blue Radial Glow with Pulse Animation */}
        <div
          aria-hidden="true"
          className="absolute top-[-15%] right-[-8%] h-[600px] w-[600px] rounded-full 
                     bg-gradient-to-br from-[#1e3a5f]/30 via-[#0f2543]/20 to-transparent 
                     blur-[140px] animate-[pulse-slow_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"
          style={{
            ['--pulse-opacity-1' as string]: '0.3',
            ['--pulse-opacity-2' as string]: '0.5',
          }}
        />

        {/* Silver Accent Glow */}
        <div
          aria-hidden="true"
          className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full 
                     bg-gradient-to-tr from-[#94a3b8]/15 via-transparent to-transparent 
                     blur-[100px]"
        />

        {/* Subtle Grid Pattern (Industrial Feel) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] 
                     [background-image:linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] 
                     [background-size:80px_80px]"
        />

        {/* Vignette Overlay for Cinematic Depth */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#061120]/20 to-[#061120]"
        />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER
      ========================================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          
          {/* =========================================
              LEFT: TEXT CONTENT
          ========================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Premium Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2.5 rounded-full 
                           border border-[#3b82f6]/25 bg-[#1e3a5f]/30 
                           px-5 py-2.5 backdrop-blur-md backdrop-saturate-150
                           transition-all duration-300 
                           hover:border-[#3b82f6]/40 hover:bg-[#1e3a5f]/40"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full 
                                   bg-[#60a5fa] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#60a5fa]" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[3.5px] 
                                 text-[#cbd5e1]">
                  Trusted Logistics Partner
                </span>
              </span>
            </motion.div>

            {/* Headline with Premium Typography */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h1
                id="hero-heading"
                className="max-w-2xl text-5xl font-extrabold leading-[1.02] tracking-tight 
                           text-white sm:text-6xl lg:text-7xl xl:text-8xl"
                style={{
                  textShadow: '0 2px 10px rgba(59,130,246,0.15)'
                }}
              >
                <span className="block">Reliable Logistics &</span>
                <span
                  className="block bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6] 
                             bg-clip-text text-transparent"
                >
                  Freight Solutions
                </span>
                <span className="block mt-3 text-[#94a3b8] font-bold">
                  Across Tanzania
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-[#94a3b8] sm:text-lg lg:text-xl">
                Efficient transportation, cargo handling, warehousing, and freight solutions 
                <span className="text-[#cbd5e1] font-medium"> tailored for enterprise </span>
                businesses across East Africa. Fast. Secure. Always on time.
              </p>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+255700000000"
                aria-label="Call Kivesi Logistics now"
                className="group relative inline-flex items-center justify-center gap-2 
                           rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#0f2543] 
                           px-8 py-4 text-sm font-semibold text-white 
                           border border-[#3b82f6]/30
                           shadow-lg shadow-[#0f2543]/40
                           transition-all duration-300 
                           hover:scale-[1.02] hover:border-[#60a5fa]/50 
                           hover:shadow-[#1e3a5f]/60 hover:from-[#0f2543] hover:to-[#1e3a5f]
                           focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50 focus:ring-offset-2 focus:ring-offset-[#061120]"
                style={{
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                <svg className="h-4 w-4 transition-transform group-hover:scale-110" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
                {/* Metallic shine effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r 
                                 from-transparent via-white/10 to-transparent 
                                 opacity-0 transition-opacity duration-300 
                                 group-hover:opacity-100" />
              </a>

              <a
                href="https://wa.me/255700000000"
                aria-label="Chat with Kivesi Logistics on WhatsApp"
                className="group inline-flex items-center justify-center gap-2 
                           rounded-full border border-[#334155]/60 
                           bg-[#0f172a]/40 px-8 py-4 text-sm font-medium 
                           text-[#cbd5e1] backdrop-blur-md
                           transition-all duration-300 
                           hover:border-[#60a5fa]/40 hover:bg-[#1e293b]/60 
                           hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]
                           focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50 
                           focus:ring-offset-2 focus:ring-offset-[#061120]"
                style={{
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Premium Statistics Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-[#334155]/40"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] 
                                  bg-clip-text text-transparent sm:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-1.5 text-xs font-medium text-[#64748b] tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT: CINEMATIC IMAGE
          ========================================= */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:order-last"
          >
            {/* Decorative Frame Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-[40px] 
                         bg-gradient-to-r from-[#3b82f6]/20 via-[#60a5fa]/10 to-transparent 
                         blur-xl opacity-70"
            />

            {/* Main Image Container with Premium Treatment */}
            <div
              className="relative overflow-hidden rounded-[32px] 
                         border border-[#334155]/50 bg-[#0a1628]/60 
                         shadow-2xl shadow-[#020617]/60 backdrop-blur-sm"
              style={{
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              {/* Industrial Corner Accents */}
              <div aria-hidden="true" 
                   className="absolute top-5 left-5 z-20 h-12 w-12 
                              border-l-2 border-t-2 border-[#60a5fa]/40 rounded-tl-lg" />
              <div aria-hidden="true" 
                   className="absolute bottom-5 right-5 z-20 h-12 w-12 
                              border-r-2 border-b-2 border-[#60a5fa]/40 rounded-br-lg" />

              <Image
                src="/hero-truck.webp"
                alt="Kivesi Logistics premium freight truck operating across Tanzania"
                width={1920}
                height={1200}
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-700 
                           hover:scale-[1.015]"
                style={{
                  WebkitFontSmoothing: 'antialiased'
                }}
              />

              {/* Cinematic Gradient Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t 
                           from-[#061120]/50 via-[#061120]/10 to-transparent"
              />

              {/* Premium Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 
                           rounded-2xl border border-[#334155]/60 
                           bg-[#0a1628]/85 backdrop-blur-xl backdrop-saturate-150
                           p-5 shadow-xl shadow-[#020617]/40 z-20"
              >
                <div className="flex items-start gap-3.5">
                  {/* Premium Icon Badge */}
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center 
                                  rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#0f2543] 
                                  border border-[#3b82f6]/30 shadow-lg shadow-[#0f2543]/30">
                    <svg className="h-5 w-5 text-[#93c5fd]" fill="none" stroke="currentColor" 
                         viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider 
                                  text-[#64748b]">
                      Service Guarantee
                    </p>
                    <h4 className="mt-1 text-sm font-semibold text-white truncate">
                      Fast & Reliable Freight
                    </h4>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#334155]/40">
                  <p className="text-xs text-[#94a3b8]">
                    <span className="font-bold text-[#93c5fd]">99.8%</span>{' '}
                    on-time delivery rate across Tanzania
                  </p>
                </div>
              </motion.div>

              {/* Subtle 24/7 Badge */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-6 right-6 z-20 
                           rounded-full border border-[#334155]/50 
                           bg-[#0a1628]/90 px-4 py-2 backdrop-blur-md"
              >
                <span className="text-[11px] font-semibold text-[#cbd5e1]">
                  🚚 24/7 Operations
                </span>
              </motion.div>
            </div>

            {/* Subtle Reflection Effect */}
            <div
              aria-hidden="true"
              className="absolute -bottom-8 left-1/2 h-16 w-[90%] -translate-x-1/2 
                         rounded-[100%] bg-gradient-to-r from-[#3b82f6]/10 via-transparent to-[#3b82f6]/10 
                         blur-2xl opacity-40"
            />
          </motion.div>
        </div>
      </div>

      {/* =========================================
          SCROLL INDICATOR (Cinematic Touch)
      ========================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <a
          href="#services"
          className="group flex flex-col items-center gap-2.5 text-[#64748b] 
                     transition-colors duration-300 hover:text-[#93c5fd]"
          aria-label="Scroll to services section"
          style={{
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[2px]">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex h-10 w-6 items-start justify-center rounded-full 
                       border border-[#334155]/60 p-1.5"
          >
            <div className="h-2 w-1 rounded-full bg-gradient-to-b from-[#60a5fa] to-[#3b82f6]" />
          </motion.div>
        </a>
      </motion.div>

      {/* =========================================
          KEYFRAME ANIMATION (Embedded as style tag)
      ========================================= */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        /* Premium focus ring for accessibility */
        *:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
        }
        
        /* Smooth font rendering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Premium selection color */
        ::selection {
          background: rgba(59, 130, 246, 0.2);
          color: #ffffff;
        }
        
        /* Premium scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #061120;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #1e3a5f, #0f2543);
          border-radius: 4px;
          border: 2px solid #061120;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #3b82f6, #1e3a5f);
        }
      `}</style>
    </section>
  )
}
