import React from 'react'

export const SayHello = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-20">
      {/* <h2 className=" mb-7 ml-1 text-[#64FFDA] font-mono text-[clamp(14px,5vw,16px)] font-normal">
        What is next?
      </h2> */}
      <h3 className="m-0 font-bold text-[#8892b0] self-center leading-[0.9] text-[clamp(20px,5vw,40px)]">
        Get In Touch
      </h3>
      <p className=" self-center text-center  text-slate-400">
        {`I'm currently looking for new opportunities, if you'd like to
        collaborate, feel free to reach out, my inbox is always open. Or just
        want to say hi, I will try my best to get back to you!`}
      </p>
      <div>
        <a
          href="https://t.me/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block text-[#64ffda] border border-[#64ffda] px-4 py-2 
                 rounded-md font-mono text-sm transition-all duration-300 
                 hover:-translate-x-1 hover:-translate-y-1 
                 hover:shadow-[3px_3px_0_0_#64FFDA] focus-visible:outline-none"
        >
          Say Hello
        </a>
      </div>
    </div>
  )
}
