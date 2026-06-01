'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  ArrowUpRight
} from 'lucide-react'

/* =========================================
   Animation Variants
========================================= */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
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
    label: 'Fleet Vehicles'
  },
  {
    value: '20+',
    label: 'Regions Covered'
  }
]

/* =========================================
   Hero Component
========================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#061120]
      "
    >
      {/* =========================================
          Background Image
      ========================================= */}

      <div className="absolute inset-0">

        <Image
          src="/hero-truck.webp"
          alt="Kivesi Logistics Fleet"
          fill
          priority
          fetchPriority="high"
          quality={65}
          sizes="
            (max-width:640px) 100vw,
            (max-width:1024px) 100vw,
            1440px
          "
          className="
            object-cover
            object-center
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#061120]/88
            via-[#061120]/60
            to-[#061120]/25
          "
        />

        {/* Premium Glow */}

        <div
          className="
            absolute
            right-0
            top-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-blue-500/10
            blur-[80px]
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
          pt-28
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

          {/* =========================================
              Heading
          ========================================= */}

          <motion.div variants={itemVariants}>
            <h1
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
              "
            >
              Delivering

              <span
                className="
                  mt-1
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
            {/* Call */}

            <a
              href="tel:+255689583281"
              className="
                group
                inline-flex
                w-full
                sm:w-auto
                items-center
                justify-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-blue-500
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-xl
                hover:shadow-blue-500/20
              "
            >
              <Phone size={18} />

              Call Now

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/255689583281"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                w-full
                sm:w-auto
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/5
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-blue-400/30
                hover:bg-white/10
              "
            >
              <MessageCircle size={18} />

              WhatsApp Us

              <ArrowUpRight
                size={18}
                className="
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
                    text-2xl
                    font-bold
                    text-white
                    sm:text-3xl
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
          Bottom Fade
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
