import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Portfolio from './components/Portfolio.tsx'

function App() {
  return (  
    <Router>
      <Navbar />
      <Portfolio/>
    </Router>
  )
}

export default App