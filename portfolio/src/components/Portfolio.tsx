import Hero from '../sections/Hero';
import About from '../sections/About';

function Portfolio() { 

  return (
    <div className="scroll-smooth overflow-hidden">
      <section id="home" className='overflow-hidden'>
        <Hero/>
      </section>
      <section id="about" className='overflow-hidden'>
        <About/>
      </section>
    </div>
  );
}

export default Portfolio;