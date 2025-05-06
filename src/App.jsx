
import './App.css'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'



function App() {

 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-info" element={<Contact  />} />
        <Route path="/resume" element={<Resume  />} />
        <Route path="/portfolio" element={<Portfolio  />} />
      </Routes>
    </>
      
  )
}

export default App
