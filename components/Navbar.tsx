
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#081120]/95 backdrop-blur-lg border-b border-white/10">
      <div className="container-custom flex items-center justify-between h-20">
        <div className="text-2xl font-bold">Kivesi</div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#fleet">Fleet</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
