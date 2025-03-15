import React from 'react'
import About from './About'
import Jobs from './Jobs'
import Projects from './Projects'
import { GreenButton } from './GreenButton'
import { SayHello } from './SayHello'

const Hero = () => {
  return (
    <div>
      <About />
      <GreenButton name="Resume" href="/CVV.pdf" />
      <Jobs />
      <Projects />
      <SayHello />
    </div>
  )
}

export default Hero
