'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

/* =========================================
   Animation Variants
========================================= */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
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
      duration: 0.6,
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
    label: 'Fleet'
  },
  {
    value: '20+',
    label: 'Regions'
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
        min-h-screen
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
          className="object-cover"
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#061120]/95
            via-[#061120]/75
            to-[#061120]/45
          "
        />
      </div>

      {/* =========================================
          Main Content
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
          py-28
          lg:px-8
        "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}

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
                bg-white/5
                px-5
                py-2.5
                backdrop-blur-md
              "
            >
              <div className="h-2 w-2 rounded-full bg-blue-400" />

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

          {/* Heading */}

          <motion.div
            variants={itemVariants}
            className="mb-7"
          >
            <h1
              className="
                text-5xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Reliable Logistics
              <span className="block text-blue-400">
                & Freight Solutions
              </span>
            </h1>
          </motion.div>

          {/* Description */}

          <motion.p
            variants={itemVariants}
            className="
              mb-10
              max-w-2xl
              text-lg
              leading-8
              text-slate-300
              sm:text-xl
            "
          >
            Fast, secure and reliable freight services
            across Tanzania and East Africa.
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            {/* Call Button */}

            <a
              href="tel:+255700000000"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-blue-500
                hover:scale-[1.02]
              "
            >
              Call Now
            </a>

            {/* WhatsApp Button */}

            <a
              href="https://wa.me/255700000000"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/5
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/10
                hover:border-white/25
              "
            >
              WhatsApp Us
            </a>
          </motion.div>

          {/* Statistics */}

          <motion.div
            variants={itemVariants}
            className="
              mt-14
              flex
              gap-10
              border-t
              border-white/10
              pt-7
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
    </section>
  )
}
