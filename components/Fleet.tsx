'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

/* =========================================
   Fleet Data
========================================= */

const fleetItems = [
  {
    title: 'Cargo Transportation',
    description:
      'Reliable freight transport solutions across Tanzania.',
    image: '/fleet-1.webp'
  },
  {
    title: 'Regional Distribution',
    description:
      'Efficient logistics and regional cargo distribution services.',
    image: '/fleet-2.webp'
  },
  {
    title: 'Modern Fleet Operations',
    description:
      'Professional fleet management with secure transportation.',
    image: '/fleet-3.webp'
  }
]

/* =========================================
   Component
========================================= */

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="
        relative
        overflow-hidden
        bg-[#061120]
        py-24
      "
    >
      {/* =========================================
          Background Glow
      ========================================= */}

      <div
        className="
          absolute
          right-0
          top-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* =========================================
          Container
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* =========================================
            Section Header
        ========================================= */}

        <div
          className="
            mb-14
            flex
            flex-col
            items-start
            justify-between
            gap-6
            lg:flex-row
            lg:items-end
          "
        >
          <div className="max-w-2xl">
            {/* Badge */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                backdrop-blur-md
              "
            >
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-blue-400
                "
              >
                Our Fleet
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
              "
            >
              Modern Logistics
              <span className="block text-blue-400">
                Fleet Solutions
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-2xl
                text-lg
                leading-8
                text-slate-400
              "
            >
              Reliable transportation and freight
              operations designed for modern logistics
              across Tanzania and East Africa.
            </p>
          </div>
        </div>

        {/* =========================================
            Fleet Grid
        ========================================= */}

        <div
          className="
            grid
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {fleetItems.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-400/20
                hover:shadow-2xl
                hover:shadow-blue-900/10
              "
            >
              {/* =========================================
                  Image Container
              ========================================= */}

              <div
                className="
                  relative
                  h-[280px]
                  overflow-hidden
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={85}
                  loading="lazy"
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#061120]/80
                    via-[#061120]/10
                    to-transparent
                  "
                />
              </div>

              {/* =========================================
                  Content
              ========================================= */}

              <div className="p-7">
                <div
                  className="
                    mb-5
                    flex
                    items-center
                    justify-between
                  "
                >
                  {/* Fleet Label */}

                  <div
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-1.5
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-blue-400
                    "
                  >
                    Kivesi Fleet
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      text-white
                      transition-all
                      duration-300
                      group-hover:border-blue-400/30
                      group-hover:bg-blue-500
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-4
                    text-base
                    leading-7
                    text-slate-400
                  "
                >
                  {item.description}
                </p>
              </div>

              {/* Bottom Accent */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-blue-400
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
