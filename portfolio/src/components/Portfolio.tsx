import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';
import Services from '../sections/Services';

function Portfolio() { 

  return (
    <div className="scroll-smooth overflow-x-hidden">
      <section id="home" className='overflow-x-hidden'>
        <Hero/>
      </section>
      <section id="about" className='overflow-x-hidden'>
        <About/>
      </section>
      <section id="skills" className='overflow-x-hidden'>
        <Skills/>
      </section>
      <section id="services" className='overflow-x-hidden'>
        <Services/>
      </section>
      <section id="resume" className='overflow-x-hidden'>
        <Resume/>
      </section>
      <section id="contact" className='overflow-x-hidden'>
        <Contact/>
      </section>
    </div>
  );
}

export default Portfolio;