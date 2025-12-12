import Hero from '../sections/Hero';
import About from '../sections/About';

function Portfolio() { 

  return (
    <div className="scroll-smooth overflow-x-hidden">
      <section id="home" className='overflow-x-hidden'>
        <Hero/>
      </section>
      <section id="about" className='overflow-x-hidden'>
        <About/>
      </section>
    </div>
  );
}

export default Portfolio;