'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Shield,
  Navigation,
  ChevronDown,
  Zap,
  Globe,
} from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '@/lib/data'

/* ─────────────────────────────────────────────────────────────
   DESIGN TOKENS  — blue/silver brand system
   All colour decisions centralised here so a single edit
   propagates across every sub-component.
───────────────────────────────────────────────────────────── */

const BLUE = {
  glow:    'rgba(59,130,246,0.18)',
  glowSm:  'rgba(59,130,246,0.12)',
  border:  'rgba(147,197,253,0.14)',   // blue-200/14
  badge:   'rgba(59,130,246,0.10)',
  card:    'rgba(8,20,40,0.88)',
  ring:    '#3B82F6',
} as const

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   — Defined at module scope (never recreated on re-render).
   — honour prefers-reduced-motion via useReducedMotion hook.
   — ease curve matches the project-wide [0.22, 1, 0.36, 1].
───────────────────────────────────────────────────────────── */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.18 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: EASE },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 44, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EASE, delay: 0.2 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.52, ease: EASE, delay },
  }),
}

/* ─────────────────────────────────────────────────────────────
   STATIC DATA
   ─ Trust badges shown under the CTA buttons
   ─ Stats in the bottom divider row
   ─ Floating info cards overlaid on the image
───────────────────────────────────────────────────────────── */

const TRUST_BADGES = [
  { icon: CheckCircle, label: 'Fully Insured Cargo' },
  { icon: Shield,      label: 'GPS-Tracked Fleet'   },
  { icon: Globe,       label: 'Trusted Since 2010'  },
] as const

const STATS = [
  { value: 5200, suffix: '+', label: 'Deliveries Completed' },
  { value: 80,   suffix: '+', label: 'Fleet Vehicles'       },
  { value: 25,   suffix: '+', label: 'Regions Covered'      },
  { value: 350,  suffix: '+', label: 'Corporate Clients'    },
] as const

/* Floating card layout config
   position:  Tailwind classes for absolute placement
   floatY:    y keyframe array for the floating animation
   delay:     stagger delay for the card's reveal */
const FLOATING_CARDS = [
  {
    id: 'delivery',
    icon: CheckCircle,
    title: '98.5%',
    sub: 'On-Time Delivery',
    position: 'absolute -top-6 -left-10',
    floatY: [0, -10, 0],
    delay: 0.92,
  },
  {
    id: 'insured',
    icon: Shield,
    title: 'Fully Insured',
    sub: 'All Cargo Protected',
    position: 'absolute top-1/2 -translate-y-1/2 -left-12',
    floatY: [0, -6, 0],
    delay: 1.06,
  },
  {
    id: 'tracking',
    icon: Navigation,
    title: 'GPS Tracked',
    sub: 'Real-Time Updates',
    position: 'absolute -bottom-6 -right-8',
    floatY: [0, 8, 0],
    delay: 1.2,
  },
] as const

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT  FloatingCard
   ─ Extracted so the right-column JSX stays readable
   ─ Receives reduced-motion flag from parent to skip animation
───────────────────────────────────────────────────────────── */

interface FloatingCardProps {
  icon: typeof CheckCircle
  title: string
  sub: string
  positionClass: string
  floatY: number[]
  delay: number
  reduceMotion: boolean
}

function FloatingCard({
  icon: Icon,
  title,
  sub,
  positionClass,
  floatY,
  delay,
  reduceMotion,
}: FloatingCardProps) {
  return (
    <motion.div
      custom={delay}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`${positionClass} hidden lg:block`}
      aria-hidden="true"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: floatY }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
        className="flex items-center gap-3 whitespace-nowrap rounded-xl px-4 py-3"
        style={{
          background: BLUE.card,
          border: `1px solid ${BLUE.border}`,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: `0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)`,
        }}
      >
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
          style={{ background: 'rgba(59,130,246,0.15)', border: `1px solid rgba(147,197,253,0.20)` }}
        >
          <Icon size={16} className="text-blue-300" strokeWidth={1.8} />
        </div>
        <div>
          <p className="font-poppins text-sm font-bold leading-tight text-white">{title}</p>
          <p className="font-inter text-[11px] leading-tight text-slate-400">{sub}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT  CTAButton  (primary + secondary variants)
───────────────────────────────────────────────────────────── */

interface CTAButtonProps {
  href: string
  label: string
  ariaLabel: string
  icon: typeof Phone
  variant: 'primary' | 'secondary' | 'ghost'
  external?: boolean
}

function CTAButton({ href, label, ariaLabel, icon: Icon, variant, external }: CTAButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 font-poppins text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: `
      ${base}
      text-white
      focus:ring-blue-400 focus:ring-offset-[#04101E]
    `,
    secondary: `
      ${base}
      text-blue-200 hover:text-white
      focus:ring-blue-400/50 focus:ring-offset-[#04101E]
    `,
    ghost: `
      ${base}
      text-slate-300 hover:text-white
      focus:ring-slate-400/50 focus:ring-offset-[#04101E]
    `,
  }

  const primaryStyle = {
    background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 60%, #1E40AF 100%)',
    boxShadow: '0 0 0 1px rgba(147,197,253,0.15), 0 4px 24px rgba(37,99,235,0.35)',
  }
  const secondaryStyle = {
    background: 'rgba(37,99,235,0.08)',
    border: `1px solid rgba(147,197,253,0.18)`,
    backdropFilter: 'blur(12px)',
  }
  const ghostStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'blur(12px)',
  }

  const styleMap = { primary: primaryStyle, secondary: secondaryStyle, ghost: ghostStyle }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={variants[variant]}
      style={styleMap[variant]}
    >
      <Icon size={15} strokeWidth={2.2} aria-hidden="true" className="flex-shrink-0" />
      {label}
      {variant === 'ghost' && (
        <ArrowRight
          size={13}
          className="translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  )
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT  HeroSection
───────────────────────────────────────────────────────────── */

export default function HeroSection() {
  // Wire Framer Motion to the OS reduced-motion preference
  const reduceMotion = useReducedMotion() ?? false

  return (
    <section
      id="home"
      aria-label="Kivesi Logistics — premium freight solutions across Tanzania"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #04101E 0%, #060F1A 50%, #071228 100%)' }}
    >

      {/* ══════════════════════════════════════
          BACKGROUND LAYER
          – No animate-pulse on blur elements (GPU cost)
          – aria-hidden keeps decorative nodes off a11y tree
      ══════════════════════════════════════ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Primary blue radial — top-right */}
        <div
          className="absolute -right-[8%] -top-[12%] h-[540px] w-[540px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)' }}
        />

        {/* Secondary blue — bottom-left */}
        <div
          className="absolute -bottom-[15%] -left-[8%] h-[460px] w-[460px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
        />

        {/* Centre line accent — premium horizontal rule */}
        <div
          className="absolute left-0 right-0 top-[42%] h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.06) 40%, rgba(147,197,253,0.06) 60%, transparent)' }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.032]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT GRID
      ══════════════════════════════════════ */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:pb-24 lg:pt-36">

        {/* ─────────────────────────────────────
            LEFT COLUMN  —  copy, CTAs, stats
        ───────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >

          {/* ── Status badge ── */}
          <motion.div variants={itemVariants} className="mb-6 self-start">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{
                background: BLUE.badge,
                border: `1px solid ${BLUE.border}`,
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Live pulse dot */}
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                  style={reduceMotion ? {} : { animation: 'ping 1.8s cubic-bezier(0,0,0.2,1) infinite' }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              <span className="font-poppins text-[11px] font-semibold uppercase tracking-[3px] text-blue-200">
                Tanzania's Trusted Logistics Partner
              </span>
            </div>
          </motion.div>

          {/* ── Headline ── */}
          <motion.h1
            variants={itemVariants}
            className="mb-5 font-poppins text-[2.6rem] font-extrabold leading-[1.09] tracking-tight text-white sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]"
          >
            Reliable Logistics
            <br />
            {/* Silver-to-blue shimmer — premium, not cyan */}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(100deg, #FFFFFF 0%, #BFDBFE 45%, #60A5FA 100%)' }}
            >
              &amp; Freight Solutions
            </span>
            <br />
            Across Tanzania
          </motion.h1>

          {/* ── Body copy ── */}
          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-[500px] font-inter text-base leading-relaxed text-slate-400 sm:text-[1.07rem]"
          >
            Efficient transportation, cargo handling, and freight solutions{' '}
            <span className="font-medium text-slate-200">tailored for enterprise clients</span>{' '}
            across East Africa. Fast, secure, and always on time.
          </motion.p>

          {/* ── CTA row ── */}
          <motion.div variants={itemVariants} className="mb-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton
              href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`}
              label="Call Now"
              ariaLabel={`Call Kivesi Logistics on ${COMPANY_PHONE}`}
              icon={Phone}
              variant="primary"
            />
            <CTAButton
              href={`https://wa.me/${COMPANY_WHATSAPP}`}
              label="WhatsApp Us"
              ariaLabel="Chat with Kivesi Logistics on WhatsApp"
              icon={MessageCircle}
              variant="secondary"
              external
            />
            <CTAButton
              href="/contact"
              label="Get a Quote"
              ariaLabel="Request a freight quote from Kivesi Logistics"
              icon={Zap}
              variant="ghost"
            />
          </motion.div>

          {/* ── Trust micro-badges ── */}
          <motion.ul
            variants={itemVariants}
            className="mb-9 flex flex-wrap items-center gap-x-5 gap-y-2"
            aria-label="Trust indicators"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5 font-inter text-xs text-slate-500">
                <Icon size={11} className="flex-shrink-0 text-blue-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>

          {/* ── Stats row ── */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-3 border-t pt-7 sm:grid-cols-4"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            aria-label="Company statistics"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl px-3 py-4 text-center"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${BLUE.border}`,
                }}
              >
                <p
                  className="font-poppins text-xl font-extrabold leading-tight text-white sm:text-2xl"
                  style={{ textShadow: '0 0 20px rgba(147,197,253,0.35)' }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 font-inter text-[10.5px] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─────────────────────────────────────
            RIGHT COLUMN  —  image + floating cards
            Hidden on mobile; stacks below on sm/md
        ───────────────────────────────────── */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative mt-14 lg:mt-0"
        >
          {/* Outer ambient glow behind the frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-8 rounded-2xl"
            style={{ background: 'rgba(37,99,235,0.16)', filter: 'blur(55px)' }}
          />

          {/* ── Image frame ── */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              border: `1px solid ${BLUE.border}`,
              boxShadow: '0 6px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
              background: 'rgba(8,20,40,0.5)',
            }}
          >
            {/*
              aspect-[4/3] reserves exact space before image loads → zero CLS.
              sizes matches the actual rendered column width at each breakpoint.
              width/height are intrinsic hints that inform the srcset density
              calculation — these match the Unsplash request params (?w=900).
            */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=82"
                alt="Kivesi Logistics heavy freight truck on a Tanzania highway"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                style={{ colorScheme: 'normal' }}
              />
            </div>

            {/* Bottom vignette — blends image into the section bg */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(4,16,30,0.55) 0%, transparent 45%)' }}
            />

            {/* Right-edge inner shadow — creates depth, not cheap border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ boxShadow: 'inset 1px 1px 0 rgba(147,197,253,0.07), inset -1px -1px 0 rgba(0,0,0,0.3)' }}
            />
          </div>

          {/* ── Corner bracket accents (decorative, not drawn on image) ── */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-3.5 -top-3.5 h-16 w-16"
            style={{ borderTop: '2px solid rgba(147,197,253,0.30)', borderLeft: '2px solid rgba(147,197,253,0.30)', borderRadius: '12px 0 0 0' }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3.5 -right-3.5 h-16 w-16"
            style={{ borderBottom: '2px solid rgba(147,197,253,0.18)', borderRight: '2px solid rgba(147,197,253,0.18)', borderRadius: '0 0 12px 0' }}
          />

          {/* ── Floating info cards ── */}
          {FLOATING_CARDS.map((card) => (
            <FloatingCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              sub={card.sub}
              positionClass={card.position}
              floatY={card.floatY}
              delay={card.delay}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          SCROLL INDICATOR
          – aria-hidden: purely decorative
          – tabIndex=-1: keyboard users skip it
      ══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.7 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <a
          href="#services"
          tabIndex={-1}
          className="flex flex-col items-center gap-2"
          style={{ color: 'rgba(148,163,184,0.55)' }}
        >
          <span className="font-inter text-[10px] uppercase tracking-[0.14em]">Explore</span>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
            className="flex h-9 w-5 items-start justify-center rounded-full pt-1.5"
            style={{ border: '1px solid rgba(147,197,253,0.15)' }}
          >
            <ChevronDown size={11} className="text-blue-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
