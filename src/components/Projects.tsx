import { projects } from '@/data'
import Image from 'next/image'
import React from 'react'
import { ArrowTop } from './icons/ArrowTop'

const Projects = () => {
  return (
    <section id="projects" className="mt-[150px]">
      <ol className="box-content overflow-visible ">
        {projects.map((item) => (
          <li
            key={item.id}
            className="mb-12 -m-5 p-5 rounded-[10px] group cursor-pointer transition-colors duration-300 hover:bg-[rgba(148,163,184,0.1)]"
          >
            <div className="flex gap-5">
              <div className="w-[25%] mt-1 ">
                <div className="w-full">
                  <Image
                    src={item.picture}
                    alt="project-sample picture"
                    width={100}
                    height={100}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-[75%]">
                <h3 className="font-medium text-slate-200 group-hover:text-teal-300 ">
                  {item.name}
                  <span className="inline-block">
                    <ArrowTop />
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  {item.desc}
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {item.techniques.map((val, index) => (
                    <li key={index} className="mr-1.5 mt-2 flex">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {val}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
        <p className=" mb-7 ml-1 text-[#64FFDA] font-mono text-[clamp(14px,5vw,16px)] font-normal">
          More projects are coming soon...
        </p>
      </ol>
    </section>
  )
}

export default Projects
