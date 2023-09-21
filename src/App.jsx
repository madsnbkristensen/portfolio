
import './App.css'
import Navigation from './components/navigation'
import { Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Projectpage from './pages/Projectpage'
import Contactpage from './pages/Contactpage'
import Wave from './components/Wave'
import { AnimatePresence } from "framer-motion"


function App() {

  const location = useLocation();
  
  return (
    <>
      <Navigation></Navigation>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </AnimatePresence>
      <Wave />
    </>
  )
}

export default App
