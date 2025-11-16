import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './sections/Hero.tsx'
import Navbar from './components/Navbar.tsx'

function App() {
  return (  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  )
}

export default App