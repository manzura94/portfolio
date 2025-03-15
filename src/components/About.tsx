import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="mb-10 scroll-mt-16 md:mb-14 lg:mb-16 lg:scroll-mt-24"
    >
      <h3 className="hidden max-[1023px]:block mb-7 mt-3 ml-1 text-[#64FFDA] font-mono text-[clamp(14px,5vw,16px)] font-normal">
        01. About me
      </h3>
      <p className="mb-4 leading-normal text-slate-400">
        {`I am a frontend developer with a strong passion for creating functional, user-centric websites using modern technologies like HTML, CSS, JavaScript, React, and
                Next.js. I prioritize clean code, performance, and accessibility to ensure seamless digital experiences.`}
      </p>
      <p className="mb-4 leading-normal text-slate-400">
        {`My journey into coding comes from a background in business and economics, complemented by a master’s degree in international management. Despite this, I’ve found my
                true passion in software development, continuously expanding my knowledge and skills.`}
      </p>
      <p className="mb-4 leading-normal text-slate-400">
        {`Currently, I'm a Junior Front-End Engineer at `}
        <a href="https://vosyn.ai/" className="text-white hover:text-[#64ffda]">
          Vosyn AI
        </a>
        {`, specializing in accessibility. I contribute to the creation and
        maintenance of UI components that power frontend of our projects,
        ensuring our platform meets web accessibility standards and best
        practices to deliver an inclusive user experience.`}
      </p>
      <p className="mb-4 leading-normal text-slate-400">
        {` I have hands-on experience working as a junior frontend developer at  `}
        <a className="text-white hover:text-[#64ffda]" href="https://appx.uz/">
          APPX
        </a>
        {`, where I contributed to building admin panels and enhancing user
        interfaces. I also actively work on personal and open-source projects,
        striving for excellence in both design and functionality. Debugging and
        problem-solving are key parts of my process, as I view every challenge
        as an opportunity to learn and improve.`}
      </p>
    </section>
  )
}

export default About
