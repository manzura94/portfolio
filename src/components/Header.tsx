import React from 'react'
import Navbar from './Navbar'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <header className="w-1/2 flex flex-col  fixed  h-full min-w-[35vw] max-w-[40vw] ml-[0px] max-[1023px]:static max-[1023px]:w-full max-[1023px]:max-w-[100%]">
      <h1 className=" mb-7 ml-1 text-[#64FFDA] font-mono text-[clamp(14px,5vw,16px)] font-normal">
        Hi, my name is
      </h1>
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Manzura Jabbarova
      </h2>
      <h3 className="m-0 mt-2 inline-block min-h-[100px] max-[600px]:min-h-[70px]  font-bold text-[#8892b0] leading-[0.9] text-[clamp(30px,7vw,50px)] w-[85%]">
        <Typewriter
          words={[
            'I build things for the web.',
            'I create modern websites.',
            'I make the web user-friendly.',
          ]}
          loop={100}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={5000}
        />
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
