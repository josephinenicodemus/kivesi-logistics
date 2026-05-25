'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange uppercase tracking-[4px] mb-5">
            Trusted Logistics Partner
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Reliable Logistics & Freight Solutions Across Tanzania
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-10 max-w-xl">
            Efficient transportation, cargo handling, and logistics services
            tailored for businesses across East Africa.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="tel:+255700000000"
              className="bg-orange px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/255700000000"
              className="border border-white/20 px-7 py-4 rounded-full hover:border-orange transition"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
