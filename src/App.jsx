
import './App.css'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'



function App() {

  const navVariables = [
    { id: "L1", name: "Home", path: "/", isSelect: false, isHideOnLarge: false }, 
    { id: "L2", name: "About", path: "/about", isSelect: false, isHideOnLarge: false  },
    { id: "L3", name: "Portfolio", path: "/portfolio", isSelect: false, isHideOnLarge: false  },
    { id: "L4", name: "Contact", path: "/contact-info", isSelect: false, isHideOnLarge: false  },
    { id: "L5", name: "Resume", path: "/resume", isSelect: false, isHideOnLarge: false  },
    {
      id: "L7",
      name: "Additional",
      path: null,
      isSelect: true,
      isHideOnLarge: true, 
      options: [
        { id: "O1", name: "Contact", path: "/contact-info" },
        { id: "O2", name: "Resume", path: "/resume" },
      ]
    }
  ];
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home navVariables = {navVariables} />} />
        <Route path="/about" element={<About navVariables = {navVariables} />} />
        <Route path="/contact-info" element={<Contact navVariables = {navVariables} />} />
        <Route path="/resume" element={<Resume navVariables = {navVariables} />} />
        <Route path="/portfolio" element={<Portfolio navVariables = {navVariables} />} />
      </Routes>
    </>
      
  )
}

export default App
