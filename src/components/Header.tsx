import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="w-1/2 flex flex-col  lg:w-[48%]">
      <h1 className=" mb-7 ml-1 text-[#64FFDA] font-mono text-[clamp(14px,5vw,16px)] font-normal">
        Hi, my name is
      </h1>
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Manzura Jabbarova
      </h2>
      <h3 className="m-0 mt-5 font-bold text-[#8892b0] leading-[0.9] text-[clamp(30px,7vw,50px)]">
        I build things for the web.
      </h3>
      <p className="mt-4 max-w-xs leading-normal text-slate-400">
        I’m a frontend developer building fast, accessible websites.
      </p>
      <Navbar />
    </header>
  )
}

export default Header
