import React from 'react'
import "./App.css"
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App