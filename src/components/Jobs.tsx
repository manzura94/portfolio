import Link from 'next/link'
import React from 'react'
import { jobData } from 'src/data'
import { ArrowTop } from './icons/ArrowTop'

const Jobs = () => {
  return (
    <section id="experience" className="mt-20 overflow-visible box-content p-0">
      <h3 className="hidden max-[1023px]:block mb-7 mt-3 ml-1 text-[#64FFDA] font-mono text-[clamp(14px,5vw,16px)] font-normal">
        02. Experience
      </h3>
      <ol className="box-content overflow-visible space-y-5">
        {jobData.map((item) => (
          <li
            key={item.id}
            className="mb-12 -m-5 p-5 rounded-[10px] group cursor-pointer transition-colors duration-300 hover:bg-[rgba(148,163,184,0.1)] box-border"
          >
            <Link
              href={item.link}
              target={'_blank'}
              className="flex gap-10 max-[665px]:flex-col max-[665px]:gap-0"
            >
              <div className="w-[20%] max-[665px]:w-[100%] mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 ">
                {item.time}
              </div>
              <div>
                <h3 className="font-medium text-slate-200 group-hover:text-teal-300 ">
                  {item.position}
                  <span className="inline-block">
                    <ArrowTop />
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  {item.desc}
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {item.techs.map((val, index) => (
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
      </ol>
    </section>
  )
}

export default Jobs
