
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

  const navVariables =[
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Portfolio", path: "/portfolio"},
    {name: "Contact", path: "/contact-info"},
    {name: "Resume", path: "/resume"},
    {name: "Features", path: "/features"},
    {name: "Additional", path: null},
    
    
  ]
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
      
  )
}

export default App
