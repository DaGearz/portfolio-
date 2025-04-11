
import './App.css'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'

//color scheme https://colorhunt.co/palette/f5eedc27548a183b4edda853
//#F5EEDC
//#27548A
//#183B4E
//#DDA853 

function App() {
  console.log("Window width: " + window.innerWidth + "px");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
      
  )
}

export default App
