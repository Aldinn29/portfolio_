import { useState } from 'react'

import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
