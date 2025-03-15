import React from 'react'
import { GreenButton } from './GreenButton'

export const SayHello = () => {
  return (
    <footer className="flex flex-col items-center gap-10 mt-20 mb-20">
      <h3 className="m-0 font-bold text-[#8892b0] self-center leading-[0.9] text-[clamp(20px,5vw,40px)]">
        Get In Touch
      </h3>
      <p className=" self-center text-center  text-slate-400">
        {`I'm currently looking for new opportunities, if you'd like to
        collaborate, feel free to reach out, my inbox is always open. Or just
        want to say hi, I will try my best to get back to you!`}
      </p>
      <GreenButton name="Say Hello" href="https://t.me/+393463114062" />
    </footer>
  )
}
