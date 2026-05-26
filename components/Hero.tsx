'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import {
  ArrowUpRight,
  Phone,
  MessageCircle
} from 'lucide-react'

/* =========================================
   Font
========================================= */

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

/* =========================================
   Animation Variants
========================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut'
    }
  }
}

/* =========================================
   Statistics
========================================= */

const stats = [
  {
    value: '500+',
    label: 'Deliveries'
  },
  {
    value: '50+',
    label: 'Fleet Vehicles'
  },
  {
    value: '20+',
    label: 'Regions Covered'
  }
]

/* =========================================
   Component
========================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className={`
        ${inter.className}
        relative
        overflow-hidden
        bg-[#061120]
      `}
    >
      {/* =========================================
          Background Image
      ========================================= */}

      <div className="absolute inset-0">
        <Image
          src="/hero-truck.webp"
          alt="Kivesi Logistics Truck"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />

        {/* Premium Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#061120]/95
            via-[#061120]/78
            to-[#061120]/55
          "
        />

        {/* Soft Glow */}

        <div
          className="
            absolute
            right-0
            top-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />
      </div>

      {/* =========================================
          Main Container
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pt-32
          pb-20
          lg:px-8
        "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            w-full
            max-w-4xl
          "
        >
          {/* =========================================
              Badge
          ========================================= */}

          <motion.div variants={itemVariants}>
            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-5
                py-2.5
                backdrop-blur-md
              "
            >
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-blue-400
                "
              />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-white
                "
              >
                Trusted Logistics Partner
              </span>
            </div>
          </motion.div>

          {/* =========================================
              Heading
          ========================================= */}

          <motion.div
            variants={itemVariants}
            className="max-w-4xl"
          >
            <h1
              className="
                text-5xl
                font-bold
                leading-[1.02]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
                xl:text-[82px]
              "
            >
              Reliable Logistics
              <span className="block text-white">
                & Freight Solutions
              </span>
              <span
                className="
                  mt-2
                  block
                  text-blue-400
                "
              >
                Across Tanzania
              </span>
            </h1>
          </motion.div>

          {/* =========================================
              CTA Buttons
          ========================================= */}

          <motion.div
            variants={itemVariants}
            className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            {/* Call Button */}

            <a
              href="tel:0689583281"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-blue-600
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-900/20
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-blue-500
              "
            >
              <Phone className="h-4 w-4" />

              <span>Call Now</span>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

            {/* WhatsApp Button */}

            <a
              href="https://wa.me/255689583281"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/[0.04]
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-blue-400/30
                hover:bg-white/[0.08]
              "
            >
              <MessageCircle className="h-4 w-4" />

              <span>WhatsApp Us</span>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </motion.div>

          {/* =========================================
              Statistics
          ========================================= */}

          <motion.div
            variants={itemVariants}
            className="
              mt-16
              grid
              grid-cols-3
              gap-6
              border-t
              border-white/10
              pt-8
              sm:max-w-2xl
            "
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white
                    sm:text-4xl
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    uppercase
                    tracking-[2px]
                    text-slate-400
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================
          Bottom Gradient Fade
      ========================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-32
          w-full
          bg-gradient-to-t
          from-[#061120]
          to-transparent
        "
      />
    </section>
  )
}
