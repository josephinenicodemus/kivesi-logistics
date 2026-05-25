'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/20 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-32 pb-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange uppercase tracking-[4px] mb-5 text-sm">
            Trusted Logistics Partner
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Reliable Logistics & Freight Solutions Across Tanzania
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-10 max-w-xl">
            Efficient transportation, cargo handling, warehousing,
            and freight solutions tailored for businesses across East Africa.
          </p>

          <div className="flex flex-wrap gap-5 mb-12">
            <a
              href="tel:+255700000000"
              className="bg-orange hover:bg-orange/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/255700000000"
              className="border border-white/20 hover:border-orange px-8 py-4 rounded-full transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Statistics */}
          <div className="flex flex-wrap gap-10">
            <div>
              <h3 className="text-4xl font-bold text-orange">500+</h3>
              <p className="text-gray-400 mt-2">Deliveries</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange">50+</h3>
              <p className="text-gray-400 mt-2">Fleet Vehicles</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange">20+</h3>
              <p className="text-gray-400 mt-2">Regions Covered</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-orange/10 blur-[80px] rounded-full" />

          <Image
            src="/hero-truck.webp"
            alt="Kivesi Logistics Truck"
            width={1920}
            height={1200}
            priority
            quality={90}
            className="relative z-10 rounded-[32px] object-cover shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 glass px-6 py-4 rounded-2xl backdrop-blur-lg border border-white/10">
            <p className="text-sm text-gray-300">
              Fast & Reliable Freight Services
            </p>

            <h4 className="text-xl font-semibold mt-2">
              Across Tanzania
            </h4>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
