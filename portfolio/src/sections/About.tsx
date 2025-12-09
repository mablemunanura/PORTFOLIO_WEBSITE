import bgImg from '../assets/About page bg.png'

function About() {

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* background image */}
      <img
        src={bgImg}
        alt="hero background"
        className="absolute top-0 right-0 h-screen w-full object-cover object-[55%_center] z-0 scale-100 sm:object-right-center"
      />

      {/* main content */}
      <div className='relative z-20 flex items-center justify-center h-full'>
        <table>
            <tr>
                <th>Name:</th>
                <td>Mable Tusiime</td>
            </tr>
            <tr>
                <th>Mobile:</th>
                <td>+256759656324 / +256764070314</td>
            </tr>
            <tr>
                <th>Location:</th>
                <td>Kampala, Uganda</td>
            </tr>
            <tr>
                <th>Age:</th>
                <td>21</td>
            </tr>
            <tr>
                <th>Email:</th>
                <td>mablemunanura@gmail.com</td>
            </tr>
            <tr>
                <th>Degree:</th>
                <td>Bsc in Software Engineering (3rd year) </td>
            </tr>
            <tr>
                <th>Freelance:</th>
                <td>Available </td>
            </tr>
        </table>
      </div>

    </section>
  )
}

export default About