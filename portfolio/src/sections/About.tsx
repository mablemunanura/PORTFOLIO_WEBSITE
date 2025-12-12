import bgImg from '../assets/About page bg.png'

function About() {

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      
      {/* background image */}
      <img
        src={bgImg}
        alt="hero background"
        className="
          absolute top-0 right-0 h-full w-full object-cover 
          object-[55%_center]
          z-0
          
          max-sm:scale-100
          sm:object-right
        "
      />

      {/* main content */}
      <div
        className="
          z-20 relative flex flex-col items-center h-full 

          md:translate-x-60 
          
          max-md:translate-x-0 max-md:px-4
        "
      >
        {/* Title */}
        <div className="mt-20 mb-8 font-bold text-3xl text-[#264E36] text-shadow-lg">
          About
        </div>

        {/* Table */}
        <div className="w-full max-w-xl">
          <table className="border-separate border-spacing-y-3 w-full [&_th]:text-left [&_td]:align-middle">

            <tr>
              <td className="align-middle w-4">
                <div className="w-2 h-2 bg-[#BB9476] rounded-full mr-6"></div>
              </td>
              <th>Name:</th>
              <td>Mable Tusiime</td>
            </tr>

            <tr>
              <td className="align-middle w-4">
                <div className="w-2 h-2 bg-[#BB9476] rounded-full mr-6"></div>
              </td>
              <th>Mobile:</th>
              <td>+256759656324 / +256764070314</td>
            </tr>

            <tr>
              <td className="align-middle w-4">
                <div className="w-2 h-2 bg-[#BB9476] rounded-full mr-6"></div>
              </td>
              <th>Location:</th>
              <td>Kampala, Uganda</td>
            </tr>

            <tr>
              <td className="align-middle w-4">
                <div className="w-2 h-2 bg-[#BB9476] rounded-full mr-6"></div>
              </td>
              <th>Age:</th>
              <td>21</td>
            </tr>

            <tr>
              <td className="align-middle w-4">
                <div className="w-2 h-2 bg-[#BB9476] rounded-full mr-6"></div>
              </td>
              <th>Email:</th>
              <td>mablemunanura@gmail.com</td>
            </tr>

            <tr>
              <td className="align-middle w-4">
                <div className="w-2 h-2 bg-[#BB9476] rounded-full mr-6"></div>
              </td>
              <th>Degree:</th>
              <td>Bsc in Software Engineering (3rd year)</td>
            </tr>

            <tr>
              <td className="align-middle w-4">
                <div className="w-2 h-2 bg-[#BB9476] rounded-full mr-6"></div>
              </td>
              <th>Freelance:</th>
              <td>Available</td>
            </tr>

          </table>
        </div>

        {/* Stats Section */}
        <div
          className="
            flex mt-8 text-center
            
            md:flex-row md:gap-x-40

            max-md:flex-row max-md:gap-y-10 max-md:text-center gap-x-7 
          "
        >
          <div>
            <h1 className="text-[#BB9476] text-7xl font-bold max-md:text-6xl">5+</h1>
            <p className="text-[#264E36] text-2xl max-md:text-xl">
              Projects <br/> worked on
            </p>
          </div>

          <div>
            <h1 className="text-[#BB9476] text-7xl font-bold max-md:text-6xl">2+</h1>
            <p className="text-[#264E36] text-2xl  max-md:text-xl">
              Years of <br/> experience
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About