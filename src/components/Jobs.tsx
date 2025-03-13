import { jobData } from '@/data'
import React from 'react'
import { ArrowTop } from './icons/ArrowTop'

const Jobs = () => {
  return (
    <section id="experience" className="mt-20 overflow-visible box-content p-0">
      <ol className="box-content overflow-visible space-y-5">
        {jobData.map((item) => (
          <li
            key={item.id}
            className="mb-12 -m-5 p-5 rounded-[10px] group cursor-pointer transition-colors duration-300 hover:bg-[rgba(148,163,184,0.1)] box-border"
          >
            <div className="flex gap-10">
              <div className="w-[20%] mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 ">
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
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Jobs
