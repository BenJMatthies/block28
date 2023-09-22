import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import './App.css'
import home from './components/Home'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/">HOME</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blue" element={<Blue/>}/>
          <Route path="/red" element={<Red/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
