'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  // Animation variants for staggered children
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-500/15 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-24 pb-16 px-4">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              Trusted Logistics Partner
            </span>
          </motion.div>

          {/* Headline with gradient text */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight"
          >
            <span className="block text-white">Reliable Logistics &</span>
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Freight Solutions
            </span>
            <span className="block text-white mt-2">Across Tanzania</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-xl"
          >
            Efficient transportation, cargo handling, warehousing, and freight solutions 
            <span className="text-orange-400 font-medium"> tailored for businesses </span>
            across East Africa. Fast, secure, and always on time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="tel:+255700000000"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-500/40 overflow-hidden"
            >
              <span className="relative z-10">📞 Call Now</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="https://wa.me/255700000000"
              className="group inline-flex items-center gap-2 border border-gray-600 hover:border-orange-500/50 px-8 py-4 rounded-full font-medium text-gray-200 hover:text-white transition-all duration-300 hover:bg-gray-800/50"
            >
              <span>💬 WhatsApp Us</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-800"
          >
            {[
              { value: "500+", label: "Deliveries" },
              { value: "50+", label: "Fleet Vehicles" },
              { value: "20+", label: "Regions" }
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE - Enhanced Placement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative lg:order-last"
        >
          {/* Decorative elements around image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-2xl rounded-[40px] opacity-60" />
          
          {/* Main Image Container */}
          <div className="relative group">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-orange-500/10 blur-[60px] rounded-[32px]" />
            
            <Image
              src="/hero-truck.webp"
              alt="Kivesi Logistics Truck delivering freight across Tanzania"
              width={1920}
              height={1200}
              priority
              quality={90}
              className="relative z-10 rounded-[32px] object-cover shadow-2xl shadow-black/50 
                         transition-transform duration-500 group-hover:scale-[1.02]
                         border border-white/10"
            />

            {/* Decorative corner accents */}
            <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-orange-400/50 rounded-tl-lg z-20" />
            <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-orange-400/50 rounded-br-lg z-20" />

            {/* Floating Stats Card - Improved */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-72 
                         glass px-5 py-4 rounded-2xl backdrop-blur-xl 
                         border border-white/10 bg-gray-900/60 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 
                              flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Service Guarantee</p>
                  <h4 className="text-sm font-semibold text-white mt-0.5">Fast & Reliable Freight</h4>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-xs text-gray-300">
                  <span className="text-orange-400 font-semibold">99.8%</span> on-time delivery rate across Tanzania
                </p>
              </div>
            </motion.div>

            {/* Secondary floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -right-4 sm:top-6 sm:-right-6 
                         bg-gray-900/90 backdrop-blur-sm border border-orange-500/30 
                         px-4 py-2 rounded-full shadow-lg z-20"
            >
              <span className="text-xs font-semibold text-orange-400">🚚 24/7 Operations</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors">
          <span className="text-xs uppercase tracking-wider">Explore</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-orange-400 rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
