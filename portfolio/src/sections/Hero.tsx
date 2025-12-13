import { ChevronDown } from 'lucide-react'
import bgImg from '../assets/Hero page bg.png'

function Hero() {
  // scroll handler
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* background image */}
      <img
        src={bgImg}
        alt="hero background"
        className="absolute top-0 right-0 h-screen w-full object-cover object-[55%_center] z-0 scale-110 sm:object-right-center"
      />

      {/* main content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-xl mx-6 md:mx-32">
          <h1 className="text-6xl md:text-7xl font-bold text-[#174d36] italic">
            Mable Tusiime
          </h1>
          <p className="mt-2 text-xl md:text-xl uppercase tracking-wider text-gray-800">
            SOFTWARE DEVELOPER
          </p>
          <p className="mt-4 text-md w-60 md:text-lg md:w-xl text-[#1a0e06]">
            Over 2 years experience crafting innovative software solutions
          </p>

          <div className="mt-8 flex gap-3 w-71 sm:w-91">
            <a
              href="/MABLE TUSIIME (CV).pdf"
              download="MABLE TUSIIME (CV).pdf"
              className="flex-1 px-3 py-2.5 rounded-md bg-[#BB9476] text-white hover:text-[#264E36] hover:font-semibold shadow flex items-center justify-center"
            >
              Download CV
            </a>
            <a
              href="mailto:mablemunanura@gmail.com?subject=Collaborate%20With%20Mable%20Tusiime&body=Hi%20Mable,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
              className="flex-1 px-3 py-2.5 rounded-md bg-[#264E36] text-white hover:text-[#BB9476]! hover:font-semibold shadow flex items-center justify-center"
            >
              Collaborate
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down chevron */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-end justify-center shadow-lg">
          <ChevronDown className="w-8 h-8 text-[#264E36] animate-bounce" />
        </div>
      </button>
    </section>
  )
}

export default Hero