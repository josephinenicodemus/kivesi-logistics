'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

/* =========================================
   Animation Variants
========================================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

/* =========================================
   Component
========================================= */
export default function Hero() {
  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${inter.className}`}>
      {/* =========================================
          FULL-SCREEN HERO IMAGE
      ========================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-truck.webp"
          alt="Kivesi Logistics - Premium freight services across Tanzania"
          fill
          priority
          quality={95}
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061120]/95 via-[#061120]/80 to-[#061120]/40" />
        
        {/* Blue Tint Overlay */}
        <div className="absolute inset-0 bg-[#0f2543]/20 mix-blend-overlay" />
      </div>

      {/* =========================================
          CONTENT CONTAINER
      ========================================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Premium Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md mb-8">
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[4px] text-white">
                Trusted Logistics Partner
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
              Reliable Logistics &
              <span className="block text-blue-400 mt-2">Freight Solutions</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-gray-300 mt-4">
                Across Tanzania
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg leading-relaxed text-gray-300 sm:text-xl max-w-2xl font-light">
              Efficient transportation, cargo handling, warehousing, and freight solutions 
              tailored for modern businesses across East Africa. Fast, secure, and always on time.
            </p>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            {/* Call Now Button */}
            <a
              href="tel:+255700000000"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-5 text-base font-semibold text-white shadow-2xl shadow-blue-900/40 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/50 hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#061120]"
            >
              {/* Phone Icon */}
              <svg 
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" 
                />
              </svg>
              <span>Call Now</span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/255700000000"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-10 py-5 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#061120]"
            >
              {/* WhatsApp Icon */}
              <svg 
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Statistics - Minimal & Clean */}
          <motion.div 
            variants={itemVariants} 
            className="mt-16 flex gap-12 border-t border-white/10 pt-8"
          >
            <div>
              <div className="text-4xl font-bold text-white sm:text-5xl">500+</div>
              <div className="mt-2 text-sm font-medium text-gray-400 uppercase tracking-wider">Deliveries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white sm:text-5xl">50+</div>
              <div className="mt-2 text-sm font-medium text-gray-400 uppercase tracking-wider">Fleet</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white sm:text-5xl">20+</div>
              <div className="mt-2 text-sm font-medium text-gray-400 uppercase tracking-wider">Regions</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <a href="#services" className="flex flex-col items-center gap-3 text-white/60 transition-colors hover:text-white" aria-label="Scroll down">
          <span className="text-[10px] font-semibold uppercase tracking-[3px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/30 p-2"
          >
            <div className="h-2 w-1 rounded-full bg-white/80" />
          </motion.div>
        </a>
      </motion.div>

      {/* =========================================
          GLOBAL STYLES
      ========================================= */}
      <style>{`
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        ::selection {
          background: rgba(59, 130, 246, 0.3);
          color: #ffffff;
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #061120;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #1e3a5f, #0f2543);
          border-radius: 5px;
          border: 2px solid #061120;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #3b82f6, #1e3a5f);
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        *:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.6);
        }
      `}</style>
    </section>
  )
}
