'use client'

import Link from 'next/link'
import {
  Instagram,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#061120]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          left-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* Main Footer */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-16
          lg:px-8
        "
      >
        {/* Top Footer */}

        <div
          className="
            grid
            gap-14
            border-b
            border-white/10
            pb-12
            lg:grid-cols-3
          "
        >
          {/* Brand Section */}

          <div className="space-y-6">
            <div>
              <h2
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                Kivesi Logistics
              </h2>

              <div
                className="
                  mt-2
                  h-1
                  w-16
                  rounded-full
                  bg-blue-500
                "
              />
            </div>

            <p
              className="
                max-w-md
                text-base
                leading-8
                text-slate-400
              "
            >
              Reliable freight and logistics solutions
              across Tanzania and East Africa.
            </p>

            {/* Instagram */}

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-slate-300
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/40
                  hover:bg-blue-500/10
                  hover:text-white
                "
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-white
              "
            >
              Quick Links
            </h3>

            <div className="space-y-4">
              {[
                'Home',
                'Services',
                'About',
                'Fleet',
                'Contact'
              ].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="
                    block
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:text-blue-400
                  "
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}

          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-white
              "
            >
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* Phone */}

              <a
                href="tel:0689583281"
                className="
                  flex
                  items-start
                  gap-4
                  text-slate-400
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <div
                  className="
                    mt-1
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/5
                    text-blue-400
                  "
                >
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 font-medium text-white">
                    0689 583 281
                  </p>
                </div>
              </a>

              {/* Email */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                  text-slate-400
                "
              >
                <div
                  className="
                    mt-1
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/5
                    text-blue-400
                  "
                >
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-white">
                    info@kivesi.co.tz
                  </p>
                </div>
              </div>

              {/* Location */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                  text-slate-400
                "
              >
                <div
                  className="
                    mt-1
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/5
                    text-blue-400
                  "
                >
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 font-medium text-white">
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            pt-8
            text-sm
            text-slate-500
            md:flex-row
          "
        >
          <p>
            © 2026 Kivesi Logistics. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-blue-400
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-blue-400
              "
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
