import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './sections/Hero.tsx'
import About from './sections/About.tsx'
import Navbar from './components/Navbar.tsx'

function App() {
  return (  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App