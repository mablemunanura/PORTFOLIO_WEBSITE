import bgImg from '../assets/About page bg.png'

function About() {

  return (
    <section className="relative w-screen h-screen">
      {/* background image */}
      <img
        src={bgImg}
        alt="hero background"
        className="absolute top-0 right-0 h-screen w-full object-cover object-[55%_center] z-0 scale-100 sm:object-right-center"
      />

      {/* main content */}
      <div className='z-20 relative flex flex-col items-center h-full translate-x-60'>
        <div className='mt-20 mb-8 font-bold text-3xl text-[#264E36] text-shadow-lg'>
            About
        </div>
        <div>
            <table className="border-separate border-spacing-y-4 [&_th]:text-left">
                <tr> 
                    <td className='align-middle'>
                        <span className="text-[#BB9476] text-4xl font-bold mr-6 ">.</span> 
                    </td>                                    
                    <th>Name:</th>
                    <td>Mable Tusiime</td>
                </tr>
                <tr>
                    <td className='align-middle'>
                        <span className="text-[#BB9476] text-4xl font-bold mr-6 ">.</span> 
                    </td>
                    <th>Mobile:</th>
                    <td>+256759656324 / +256764070314</td>
                </tr>
                <tr>
                    <td className='align-middle'>
                        <span className="text-[#BB9476] text-4xl font-bold mr-6">.</span> 
                    </td>
                    <th>Location:</th>
                    <td>Kampala, Uganda</td>
                </tr>
                <tr>
                    <td className='align-middle'>
                        <span className="text-[#BB9476] text-4xl font-bold mr-6">.</span> 
                    </td>
                    <th>Age:</th>
                    <td>21</td>
                </tr>
                <tr>
                    <td className='align-middle'>
                        <span className="text-[#BB9476] text-4xl font-bold mr-6">.</span> 
                    </td>
                    <th>Email:</th>
                    <td>mablemunanura@gmail.com</td>
                </tr>
                <tr>
                    <td className='align-middle'>
                        <span className="text-[#BB9476] text-4xl font-bold mr-6">.</span> 
                    </td>
                    <th>Degree:</th>
                    <td>Bsc in Software Engineering (3rd year) </td>
                </tr>
                <tr>
                    <td className='align-middle'>
                        <span className="text-[#BB9476] text-4xl font-bold mr-6">.</span> 
                    </td>
                    <th>Freelance:</th>
                    <td>Available </td>
                </tr>
            </table>
        </div>

        <div className='flex flex-row gap-x-40 mt-8'>
            <div className="">
                <h1 className="text-[#BB9476] text-7xl font-bold">
                5+
                </h1> 
                <p className="text-[#264E36] text-2xl">
                Projects <br></br> worked on
                </p>
            </div>
            <div className="">
                <h1 className="text-[#BB9476] text-7xl font-bold">
                2+
                </h1> 
                <p className="text-[#264E36] text-2xl">
                Years of <br></br> experience
                </p>
            </div>
        </div>
      </div>

    </section>
  )
}

export default About