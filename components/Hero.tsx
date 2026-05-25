'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Shield,
  MapPin,
  Package,
  ChevronDown,
} from 'lucide-react'
import type { Variants } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { COMPANY_PHONE, COMPANY_WHATSAPP, stats } from '@/lib/data'

/* ─────────────────────────────────────────────
   CONSTANTS — defined outside component so they
   are never recreated on re-render
───────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
}

/** Trust badges shown below the hero headline */
const trustBadges = [
  { icon: CheckCircle, label: 'Trusted Since 2010' },
  { icon: Shield,       label: 'Fully Insured Cargo' },
  { icon: Package,      label: 'Real-Time GPS Tracking' },
] as const

/** Floating info cards overlaid on the hero image */
const floatingCards = [
  {
    icon: CheckCircle,
    title: '98.5%',
    sub: 'On-Time Delivery',
    position: 'top' as const,
    delay: 0,
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    sub: 'All Cargo Protected',
    position: 'middle' as const,
    delay: 1,
  },
  {
    icon: MapPin,
    title: 'GPS Tracked',
    sub: 'Real-Time Updates',
    position: 'bottom' as const,
    delay: 2,
  },
] as const

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

type FloatingCardPosition = 'top' | 'middle' | 'bottom'

const floatingCardClasses: Record<FloatingCardPosition, string> = {
  top:    'absolute -top-5 -left-8',
  middle: 'absolute top-1/2 -translate-y-1/2 -left-10',
  bottom: 'absolute -bottom-5 -right-8',
}

const floatingCardAmplitude: Record<FloatingCardPosition, number[]> = {
  top:    [0, -9, 0],
  middle: [0, -6, 0],
  bottom: [0, 8, 0],
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS — small, focused, readable
───────────────────────────────────────────── */

interface FloatingCardProps {
  icon: typeof CheckCircle
  title: string
  sub: string
  position: FloatingCardPosition
  delay: number
}

function FloatingCard({ icon: Icon, title, sub, position, delay }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.9 + delay * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`${floatingCardClasses[position]} hidden lg:flex`}
    >
      <motion.div
        animate={{ y: floatingCardAmplitude[position] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.6 }}
        className="glass-card-dark rounded-xl px-4 py-3 shadow-card flex items-center gap-3 whitespace-nowrap"
      >
        <div className="w-9 h-9 rounded-lg bg-accent-500/15 flex items-center justify-center flex-shrink-0">
          <Icon size={17} className="text-accent-400" strokeWidth={1.8} aria-hidden="true" />
        </div>
        <div>
          <p className="font-poppins font-bold text-white text-sm leading-tight">{title}</p>
          <p className="font-inter text-xs text-gray-400 leading-tight">{sub}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Kivesi Logistics — hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* ── Decorative background layer ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Orange radial glow — top-right */}
        <div className="absolute top-[15%] right-[-5%] w-[580px] h-[580px] rounded-full bg-accent-500/10 blur-[130px]" />
        {/* Softer accent — bottom-left */}
        <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent-500/6 blur-[110px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
      </div>

      {/* ── Main content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">

          {/* ══════════════════════════════
              LEFT  —  copy & CTAs
          ══════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Trust badge pill */}
            <motion.div variants={itemVariants} className="mb-6 self-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-accent-500/20 text-accent-400 font-poppins font-semibold text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" aria-hidden="true" />
                Tanzania's Trusted Logistics Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-[3.3rem] xl:text-6xl leading-[1.1] tracking-tight text-white mb-5"
            >
              Reliable Logistics
              <br />
              <span className="text-gradient">&amp; Freight Solutions</span>
              <br />
              Across Tanzania
            </motion.h1>

            {/* Body copy */}
            <motion.p
              variants={itemVariants}
              className="font-inter text-gray-400 text-base sm:text-lg leading-relaxed max-w-[520px] mb-8"
            >
              Efficient transportation, cargo handling, and freight solutions{' '}
              <span className="text-gray-200 font-medium">tailored for businesses</span>{' '}
              across East Africa. Fast, secure, and always on time.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-9">
              {/* Primary — Call Now */}
              <a
                href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
                aria-label={`Call Kivesi now on ${COMPANY_PHONE}`}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-accent-500 hover:bg-accent-400 text-white font-poppins font-semibold text-sm rounded-xl transition-all duration-200 shadow-glow hover:shadow-glow-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-navy-950 overflow-hidden"
              >
                <Phone size={15} strokeWidth={2.2} aria-hidden="true" />
                Call Now
                {/* Shine sweep on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-white/15 translate-x-[-110%] skew-x-[-20deg] group-hover:translate-x-[110%] transition-transform duration-500 ease-in-out"
                />
              </a>

              {/* Secondary — WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Kivesi on WhatsApp"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-accent-500/35 hover:border-accent-400 bg-transparent hover:bg-accent-500/8 text-accent-400 hover:text-accent-300 font-poppins font-semibold text-sm rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-navy-950"
              >
                <MessageCircle size={15} strokeWidth={2.2} aria-hidden="true" />
                WhatsApp Us
              </a>

              {/* Tertiary — Get a Quote */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 glass-card border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-poppins font-semibold text-sm rounded-xl transition-all duration-200"
              >
                Get a Quote
                <ArrowRight
                  size={14}
                  className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>

            {/* Trust badges row */}
            <motion.ul
              variants={itemVariants}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-9"
              aria-label="Key trust indicators"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-1.5 font-inter text-xs text-gray-400"
                >
                  <Icon size={12} className="text-accent-400 flex-shrink-0" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </motion.ul>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-7 border-t border-white/[0.07]"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl px-3 py-3.5 text-center"
                >
                  <p className="font-poppins font-extrabold text-xl sm:text-2xl text-white leading-tight mb-0.5">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-inter text-[11px] text-gray-400 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════
              RIGHT  —  image + floating cards
          ══════════════════════════════ */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[560px]">

              {/* Orange glow behind image */}
              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-2xl bg-accent-500/18 blur-[60px]"
              />

              {/* Image frame */}
              <div className="relative rounded-2xl overflow-hidden subtle-border shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80"
                  alt="Kivesi heavy freight truck on a Tanzania highway"
                  width={900}
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                />
                {/* Bottom vignette so floating cards read cleanly */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent"
                />
              </div>

              {/* Corner bracket accents */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-accent-500/40 rounded-tl-2xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-accent-500/25 rounded-br-2xl pointer-events-none"
              />

              {/* Floating info cards */}
              {floatingCards.map((card) => (
                <FloatingCard key={card.title} {...card} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <a
          href="#services"
          tabIndex={-1}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-accent-400 transition-colors duration-200"
        >
          <span className="font-inter text-[10px] uppercase tracking-[0.12em]">Explore</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-5 h-9 rounded-full border border-white/12 flex items-start justify-center p-1.5"
          >
            <ChevronDown size={12} className="text-accent-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
