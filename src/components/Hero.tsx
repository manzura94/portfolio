import React from 'react'
import About from './About'
import Jobs from './Jobs'
import Projects from './Projects'
import { Resume } from './Resume'
import { SayHello } from './SayHello'

const Hero = () => {
  return (
    <div>
      <About />
      <Resume />
      <Jobs />
      <Projects />
      <SayHello />
    </div>
  )
}

export default Hero
