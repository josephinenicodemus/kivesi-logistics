'use client'

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight
} from 'lucide-react'

/* =========================================
   Contact Details
========================================= */

const contactItems = [
  {
    title: 'Phone Number',
    value: '0689 583 281',
    link: 'tel:0689583281',
    icon: Phone
  },
  {
    title: 'Email Address',
    value: 'info@kivesi.co.tz',
    link: 'mailto:info@kivesi.co.tz',
    icon: Mail
  },
  {
    title: 'Location',
    value: 'Tabata, Dar es Salaam',
    link: '#',
    icon: MapPin
  },
  {
    title: 'Working Hours',
    value: '24/7 Logistics Operations',
    link: '#',
    icon: Clock
  }
]

/* =========================================
   Component
========================================= */

export default function Contact() {
  return (
    <section
      id="contact"
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
          left-1/2
          top-0
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[140px]
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
              Contact Us
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
            Let’s Move Your
            <span className="block text-blue-400">
              Business Forward
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
            Connect with Kivesi Logistics for
            reliable freight, transportation and
            logistics solutions across Tanzania
            and East Africa.
          </p>
        </div>

        {/* =========================================
            Main Contact Layout
        ========================================= */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* =========================================
              Left Contact Cards
          ========================================= */}

          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
            "
          >
            {contactItems.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.title}
                  href={item.link}
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
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      group-hover:from-blue-500/5
                    "
                  />

                  {/* Top */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-start
                      justify-between
                    "
                  >
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

                  {/* Content */}

                  <div className="relative z-10 mt-8">
                    <p
                      className="
                        text-sm
                        uppercase
                        tracking-[2px]
                        text-slate-500
                      "
                    >
                      {item.title}
                    </p>

                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-semibold
                        leading-snug
                        tracking-tight
                        text-white
                      "
                    >
                      {item.value}
                    </h3>
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
                </a>
              )
            })}
          </div>

          {/* =========================================
              Right CTA Panel
          ========================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-md
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                right-0
                top-0
                h-[220px]
                w-[220px]
                rounded-full
                bg-blue-500/10
                blur-[100px]
              "
            />

            {/* Content */}

            <div className="relative z-10">
              {/* Mini Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-blue-400
                "
              >
                Trusted Logistics Partner
              </div>

              {/* Heading */}

              <h3
                className="
                  mt-7
                  text-4xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                "
              >
                Fast & Reliable
                <span className="block text-blue-400">
                  Freight Services
                </span>
              </h3>

              {/* Description */}

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-400
                "
              >
                We provide secure transportation,
                logistics coordination and cargo
                movement solutions tailored for
                businesses across Tanzania.
              </p>

              {/* CTA Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">
                {/* Call Button */}

                <a
                  href="tel:0689583281"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    px-7
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
                  Call Now
                </a>

                {/* WhatsApp Button */}

                <a
                  href="https://wa.me/255689583281"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-blue-400/30
                    hover:bg-white/10
                  "
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
