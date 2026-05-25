'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20 pb-16 px-4">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge - Simplified to match design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-6 py-2 rounded-full border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider hover:border-orange-500/50 transition-colors duration-300">
              Trusted Logistics Partner
            </span>
          </motion.div>

          {/* Headline - Match exact structure from design */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            <span className="block text-white">Reliable</span>
            <span className="block text-white">Logistics &</span>
            <span className="block text-white/20 mt-2">Freight Solutions</span>
            <span className="block text-white mt-2">Across Tanzania</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-xl"
          >
            Efficient transportation, cargo handling, warehousing, 
            and freight solutions tailored for businesses across East 
            Africa. Fast, secure, and always on time.
          </motion.p>

          {/* CTA Buttons - Darker, more subtle styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:+255700000000"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>

            <a
              href="https://wa.me/255700000000"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-white/20 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative lg:order-last"
        >
          {/* Main Image Container */}
          <div className="relative">
            <Image
              src="/hero-truck.webp"
              alt="Kivesi Logistics Truck and cargo ship at sunset"
              width={1920}
              height={1200}
              priority
              quality={90}
              className="relative z-10 rounded-[32px] object-cover shadow-2xl shadow-black/50 border border-white/10"
            />

            {/* Decorative corner accents */}
            <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-white/30 rounded-tl-lg z-20" />
            <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-white/30 rounded-br-lg z-20" />

            {/* 24/7 Operations Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-6 right-6 bg-gray-900/90 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full shadow-lg z-20"
            >
              <span className="text-sm font-semibold text-white">🚚 24/7 Operations</span>
            </motion.div>

            {/* Service Guarantee Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 
                         bg-gray-900/80 backdrop-blur-xl 
                         border border-white/10 rounded-2xl p-5 shadow-xl z-20"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 
                              flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Service Guarantee</p>
                  <h4 className="text-base font-semibold text-white mt-0.5">Fast & Reliable Freight</h4>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-sm text-gray-300">
                  <span className="text-orange-400 font-bold">99.8%</span> on-time delivery rate across Tanzania
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-gray-600 flex items-start justify-center p-1"
          >
            <div className="w-1 h-1.5 bg-orange-400 rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
