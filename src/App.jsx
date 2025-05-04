
import './App.css'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'

//color scheme https://colorhunt.co/palette/f5eedc27548a183b4edda853
//#F5EEDC
//#27548A
//#183B4E
//#DDA853 

function App() {

  const navVariables = [
    { id: 1, name: "Home", path: "/", isSelect: false },
    { id: 2, name: "About", path: "/about", isSelect: false },
    { id: 3, name: "Portfolio", path: "/portfolio", isSelect: false },
    { id: 4, name: "Contact", path: "/contact-info", isSelect: false },
    { id: 5, name: "Resume", path: "/resume", isSelect: false },
    { id: 6, name: "Features", path: "/features", isSelect: false },
    {
      id: 7,
      name: "Additional",
      path: null,
      isSelect: true,
      options: [
        { name: "Resume", path: "/resume" },
        { name: "Features", path: "/features" },
        { name: "Contact", path: "/contact-info" }
      ]
    }
  ];
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home navVariables = {navVariables} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
      
  )
}

export default App
