'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react'

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
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#061120]
      "
    >
      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/hero-truck.webp"
          alt="Kivesi Logistics Fleet"
          fill
          priority
          quality={80}
          sizes="
            (max-width:768px) 100vw,
            (max-width:1200px) 100vw,
            1920px
          "
          className="
            object-cover
            object-[72%_center]
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#061120]/88
            via-[#061120]/65
            to-[#061120]/30
          "
        />

        {/* Blue Glow */}

        <div
          className="
            absolute
            right-0
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />
      </div>

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
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

          <motion.div variants={itemVariants}>
            <h1
              className="
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Delivering
              <span className="block text-blue-400">
                Across Tanzania
              </span>
            </h1>
          </motion.div>

          {/* CTA */}

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
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-blue-500
                hover:scale-[1.02]
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
                hover:bg-white/10
                hover:border-blue-400/30
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
        </motion.div>
      </div>

      {/* Bottom Fade */}

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
