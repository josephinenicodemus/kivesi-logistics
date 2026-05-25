'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

/* =========================================
   Animation Variants
========================================= */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut'
    }
  }
}

/* =========================================
   Constants
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
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        bg-[#061120]
      "
    >
      {/* =========================================
          Background Effects
      ========================================= */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Glow */}
        <div
          className="
            absolute
            top-[-10%]
            right-[-5%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-blue-500/20
            blur-[120px]
          "
        />

        {/* Secondary Glow */}
        <div
          className="
            absolute
            bottom-[-15%]
            left-[-10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/10
            blur-[120px]
          "
        />

        {/* Grid Overlay */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:70px_70px]
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
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-16
          px-6
          pb-20
          pt-32
          lg:grid-cols-2
          lg:px-8
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}

          <motion.div variants={itemVariants}>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/20
                bg-blue-500/10
                px-5
                py-2
                backdrop-blur-md
              "
            >
              <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-blue-200
                "
              >
                Trusted Logistics Partner
              </span>
            </div>
          </motion.div>

          {/* Heading */}

          <motion.div
            variants={itemVariants}
            className="space-y-5"
          >
            <h1
              className="
                max-w-3xl
                text-5xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Reliable Logistics &
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-300
                  via-cyan-300
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                Freight Solutions
              </span>
              Across Tanzania
            </h1>

            <p
              className="
                max-w-2xl
                text-lg
                leading-8
                text-slate-300
                sm:text-xl
              "
            >
              Efficient transportation, cargo handling,
              warehousing, and freight solutions tailored
              for modern businesses across East Africa.
              Fast, secure, and always on time.
            </p>
          </motion.div>

          {/* CTA Buttons */}

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:+255700000000"
              aria-label="Call Kivesi Logistics"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-cyan-500
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-blue-500/40
              "
            >
              Call Now
            </a>

            <a
              href="https://wa.me/255700000000"
              aria-label="Chat with Kivesi Logistics on WhatsApp"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-8
                py-4
                text-sm
                font-medium
                text-slate-200
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-blue-400/30
                hover:bg-white/10
                hover:text-white
              "
            >
              WhatsApp Us
            </a>
          </motion.div>

          {/* Statistics */}

          <motion.div
            variants={itemVariants}
            className="
              grid
              grid-cols-3
              gap-6
              border-t
              border-white/10
              pt-8
            "
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-blue-300
                    sm:text-4xl
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-400
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.3
          }}
          className="relative"
        >
          {/* Outer Glow */}

          <div
            className="
              absolute
              inset-0
              rounded-[36px]
              bg-blue-500/10
              blur-[80px]
            "
          />

          {/* Image Container */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              shadow-2xl
              shadow-black/40
              backdrop-blur-sm
            "
          >
            <Image
              src="/hero-truck.webp"
              alt="Kivesi Logistics transportation truck in Tanzania"
              width={1920}
              height={1200}
              priority
              quality={90}
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw
              "
              className="
                h-full
                w-full
                object-cover
              "
            />

            {/* Gradient Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#061120]/30
                via-transparent
                to-transparent
              "
            />

            {/* Floating Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.9,
                duration: 0.5
              }}
              className="
                absolute
                bottom-6
                left-6
                max-w-[280px]
                rounded-2xl
                border
                border-white/10
                bg-[#081120]/80
                p-5
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-blue-500
                    to-cyan-500
                  "
                >
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wide
                      text-slate-400
                    "
                  >
                    Service Guarantee
                  </p>

                  <h4
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Fast & Reliable Freight
                  </h4>
                </div>
              </div>

              <div
                className="
                  mt-4
                  border-t
                  border-white/10
                  pt-4
                "
              >
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-blue-300">
                    99.8%
                  </span>{' '}
                  on-time delivery rate across Tanzania.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
