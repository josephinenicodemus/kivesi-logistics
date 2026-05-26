'use client'

import {
  ShieldCheck,
  Globe2,
  Truck,
  MapPin
} from 'lucide-react'

/* =========================================
   Features
========================================= */

const features = [
  {
    title: 'Trusted Operations',
    description:
      'Reliable and professional logistics services trusted by businesses across Tanzania.',
    icon: ShieldCheck
  },
  {
    title: 'Nationwide Transport',
    description:
      'Efficient cargo transportation covering all major regions across Tanzania.',
    icon: Truck
  },
  {
    title: 'Regional Coverage',
    description:
      'Freight and logistics operations extending to selected African countries.',
    icon: Globe2
  }
]

/* =========================================
   Component
========================================= */

export default function About() {
  return (
    <section
      id="about"
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
          left-0
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
        <div
          className="
            grid
            gap-14
            lg:grid-cols-2
            lg:items-center
          "
        >
          {/* =========================================
              Left Content
          ========================================= */}

          <div>
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
                About Kivesi
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
              Trusted Logistics
              <span className="block text-blue-400">
                Across Tanzania
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-slate-400
              "
            >
              Kivesi Logistics is a trusted transportation
              and freight company based in Tabata,
              Dar es Salaam. We provide reliable cargo,
              distribution and logistics solutions across
              Tanzania and selected African countries.
            </p>

            <p
              className="
                mt-5
                text-lg
                leading-8
                text-slate-400
              "
            >
              Our commitment to efficiency, safety and
              professionalism allows businesses to move
              goods with confidence through our modern
              logistics operations and experienced team.
            </p>

            {/* Location */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                backdrop-blur-md
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[2px]
                    text-slate-500
                  "
                >
                  Location
                </p>

                <h4
                  className="
                    mt-1
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  Tabata, Dar es Salaam
                </h4>
              </div>
            </div>
          </div>

          {/* =========================================
              Right Features
          ========================================= */}

          <div
            className="
              grid
              gap-6
            "
          >
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-7
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-blue-400/20
                    hover:bg-white/[0.05]
                  "
                >
                  {/* Hover Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-blue-500/0
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      group-hover:from-blue-500/5
                    "
                  />

                  <div className="relative z-10 flex gap-5">
                    {/* Icon */}

                    <div
                      className="
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

                    <div className="flex-1">
                      <h3
                        className="
                          text-2xl
                          font-semibold
                          tracking-tight
                          text-white
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-base
                          leading-7
                          text-slate-400
                        "
                      >
                        {feature.description}
                      </p>
                    </div>
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
      </div>
    </section>
  )
}
