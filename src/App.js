import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Introduction from './Components/Introduction/Introduction'
import Education from './Components/Education/Education'
import Social from './Components/Social/Social'
import Exprience from './Components/Exprience/Exprience'
import './index.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [dark,setDark] = useState(true)
  const handleDark = ()  => {
    setDark(false)
  }
  return (
    <div className='app'>
      <Navbar/>
      <Introduction/>
      <Education/>
      <Social/>
      <Exprience/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App