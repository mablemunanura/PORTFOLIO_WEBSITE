import { useState } from 'react'
import type { MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [tempActive, setTempActive] = useState<string | null>(null)

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Skills', path: '/skills' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ]

  function showComingSoon(label: string, path: string) {
    setToast(`${label} — Coming soon`)
    setTempActive(path)
    setTimeout(() => {
      setToast('')
      setTempActive(null)
    }, 1000)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md transition 
        ${location.pathname === '/home' ? 'bg-transparent' : 'bg-[#BB9476]/80'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
        {/* Logo */}
        <h2 className="text-md md:text-xl font-semibold text-black">
          Mable <span className="text-[#264E36]">Tusiime</span>
        </h2>

        {/* desktop links */}
        <div className="hidden md:flex gap-4 items-center whitespace-nowrap text-white">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || tempActive === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  setOpen(false)
                  const allowed = ["/home", "/about"]
                  if (!allowed.includes(link.path)) {
                    e.preventDefault()
                    showComingSoon(link.name, link.path)
                  }
                }}
                className={`text-sm font-normal transition px-2 py-1 rounded ${
                  isActive
                    ? 'text-[#264E36]! font-semibold'
                    : 'text-white hover:text-[#264E36]! hover:font-semibold'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
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
        <div
          className="menu md:hidden absolute top-full left-0 right-0 bg-[#867f7fde]/95 backdrop-blur-md! z-40"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <div className="flex flex-col items-center gap-4 py-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || tempActive === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                    setOpen(false)
                    const allowed = ["/home", "/about"]
                    if (!allowed.includes(link.path)) {
                      e.preventDefault()
                      showComingSoon(link.name, link.path)
                    }
                  }}
                  className={`text-lg px-4 py-2 rounded-md w-11/12 text-center transition ${
                    isActive ? 'text-[#264E36]! font-bold' : 'text-white hover:text-[#264E36]!'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* toast */}
      {toast && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-[#264E36] text-white px-4 py-2 rounded-md shadow-md">
            {toast}
          </div>
        </div>
      )}
    </nav>
  )
}