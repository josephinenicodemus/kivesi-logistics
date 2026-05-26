'use client'

import {
  Truck,
  Warehouse,
  PackageCheck,
  Boxes,
  ShieldCheck,
  Globe2
} from 'lucide-react'

/* =========================================
   Services Data
========================================= */

const services = [
  {
    title: 'Freight Transport',
    description:
      'Fast and secure cargo transportation across Tanzania and East Africa.',
    icon: Truck
  },
  {
    title: 'Warehousing',
    description:
      'Modern storage facilities with safe inventory handling solutions.',
    icon: Warehouse
  },
  {
    title: 'Cargo Handling',
    description:
      'Efficient loading, unloading and cargo management services.',
    icon: PackageCheck
  },
  {
    title: 'Distribution',
    description:
      'Reliable regional distribution for businesses and enterprises.',
    icon: Boxes
  },
  {
    title: 'Fleet Management',
    description:
      'Professional fleet operations with real-time logistics coordination.',
    icon: ShieldCheck
  },
  {
    title: 'Clearing & Forwarding',
    description:
      'Smooth customs clearance and freight forwarding support.',
    icon: Globe2
  }
]

/* =========================================
   Component
========================================= */

export default function Services() {
  return (
    <section
      id="services"
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
          top-0
          left-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
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
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
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
              Our Services
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
            Smart Logistics
            <span className="block text-blue-400">
              Solutions
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            Reliable freight and logistics services
            designed for modern businesses across
            Tanzania and East Africa.
          </p>
        </div>

        {/* =========================================
            Services Grid
        ========================================= */}

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-400/20
                  hover:bg-white/[0.05]
                  hover:shadow-2xl
                  hover:shadow-blue-900/10
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-blue-500/0
                    via-blue-500/0
                    to-blue-500/0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    group-hover:from-blue-500/5
                    group-hover:via-transparent
                    group-hover:to-transparent
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative
                    z-10
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-500/10
                    text-blue-400
                    transition-all
                    duration-500
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}

                <div className="relative z-10">
                  <h3
                    className="
                      mb-3
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-base
                      leading-7
                      text-slate-400
                    "
                  >
                    {service.description}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
