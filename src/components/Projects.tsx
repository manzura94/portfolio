import { projects } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowTop } from './icons/ArrowTop'

const Projects = () => {
  return (
    <section id="projects" className="mt-[150px] max-[665px]:mt-[70px]">
      <h3 className="hidden max-[1023px]:block mb-7 mt-3 ml-1 text-[#64FFDA] font-mono text-[clamp(14px,5vw,16px)] font-normal">
        03. My projects
      </h3>
      <ol className="box-content overflow-visible ">
        {projects.map((item) => (
          <li
            key={item.id}
            className="mb-12 -m-5 p-5 rounded-[10px] group cursor-pointer transition-colors duration-300 hover:bg-[rgba(148,163,184,0.1)]"
          >
            <Link
              href={item.link}
              className="flex gap-5 max-[665px]:flex-col-reverse"
              target={'_blank'}
            >
              <div className="w-[25%] mt-1 max-[665px]:w-[200px] max-[665px]:h-[115px]">
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
              <div className="w-[75%] max-[665px]:w-[100%]">
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
            </Link>
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
