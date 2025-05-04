
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
    { id: "L1", name: "Home", path: "/", isSelect: false, isHideOnLarge: false }, 
    { id: "L2", name: "About", path: "/about", isSelect: false, isHideOnLarge: false  },
    { id: "L3", name: "Portfolio", path: "/portfolio", isSelect: false, isHideOnLarge: false  },
    { id: "L4", name: "Contact", path: "/contact-info", isSelect: false, isHideOnLarge: false  },
    { id: "L5", name: "Resume", path: "/resume", isSelect: false, isHideOnLarge: false  },
    { id: "L6", name: "Features", path: "/features", isSelect: false, isHideOnLarge: false  },
    {
      id: "L7",
      name: "Additional",
      path: null,
      isSelect: true,
      isHideOnLarge: true, 
      options: [
        { id: "O1", name: "Contact", path: "/contact-info" },
        { id: "O2", name: "Resume", path: "/resume" },
        { id: "O3", name: "Features", path: "/features" }
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
