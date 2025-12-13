import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';

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
    </div>
  );
}

export default Portfolio;