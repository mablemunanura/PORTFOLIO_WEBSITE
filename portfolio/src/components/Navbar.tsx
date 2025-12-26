import { useState, useEffect } from 'react'
import { Menu, X, ChevronUp } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [tempActive, setTempActive] = useState<string | null>('home')
  const [atTop, setAtTop] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolioo' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Resume', id: 'resume' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ]

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      setAtTop(scrolled < 50)
      setShowScrollTop(scrolled > 50)

      // Update active section
      let currentSection = 'home'
      for (const link of navLinks) {
        const section = document.getElementById(link.id)
        if (section) {
          const top = section.getBoundingClientRect().top
          if (top <= 100) {
            currentSection = link.id
          }
        }
      }
      setTempActive(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToSection(id: string, label: string) {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setTempActive(id)
    } else {
      setToast(`${label} — Coming soon`)
      setTempActive(id)
      setTimeout(() => {
        setToast('')
        setTempActive(null)
      }, 1000)
    }
    setOpen(false)
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md transition-colors duration-300
          ${atTop ? 'bg-transparent' : 'bg-[#BB9476]/80'}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
          {/* Logo */}
          <h2 className="text-md md:text-xl font-semibold text-black">
            Mable <span className="text-[#264E36]">Tusiime</span>
          </h2>

          {/* Desktop links */}
          <div className="hidden md:flex gap-4 items-center whitespace-nowrap text-white">
            {navLinks.map((link) => {
              const isActive = tempActive === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id, link.name)}
                  className={`text-sm font-normal transition px-2 py-1 rounded ${
                    isActive
                      ? 'text-[#264E36]! font-semibold'
                      : 'text-white hover:text-[#264E36]! hover:font-semibold transition'
                  }`}
                >
                  {link.name}
                </button>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md bg-transparent text-black"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="menu md:hidden absolute top-full left-0 right-0 bg-[#867f7fde]/95 backdrop-blur-md! z-40"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <div className="flex flex-col items-center gap-4 py-8">
              {navLinks.map((link) => {
                const isActive = tempActive === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id, link.name)}
                    className={`text-lg px-4 py-2 rounded-md w-11/12 text-center transition ${
                      isActive
                        ? 'text-[#264E36]! font-bold'
                        : 'text-white hover:text-[#264E36]!'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Toast */}
        {toast && (
          <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-[#264E36] text-white px-4 py-2 rounded-md shadow-md">
              {toast}
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 z-100 rounded-full bg-[#264E36] text-white shadow-lg hover:bg-[#1e3c26] transition"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}