import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Skills', path: '/skills' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#BB9476]/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
        {/* Logo (small) */}
        <h2 className="text-md md:text-xl font-semibold text-black">
          Mable <span className="text-[#264E36]">Tusiime</span>
        </h2>

        {/* desktop links */}
        <div className="hidden md:flex gap-4 items-center whitespace-nowrap text-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`text-sm font-normal transition px-2 py-1 rounded ${
                location.pathname === link.path
                  ? 'text-[#264E36] font-semibold'
                  : 'text-white hover:text-[#264E36] hover:font-semibold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md bg-transparent text-black"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-transparent backdrop-blur-md z-40">
          <div className="flex flex-col items-center gap-4 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg px-4 py-2 rounded-md w-11/12 text-center transition ${
                  location.pathname === link.path ? 'text-[#264E36] font-semibold' : 'text-white hover:text-[#264E36]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}