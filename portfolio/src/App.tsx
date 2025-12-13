import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Portfolio from './components/Portfolio.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (  
    <Router>
      <Navbar />
      <Portfolio/>
      <Footer/>
    </Router>
  )
}

export default App