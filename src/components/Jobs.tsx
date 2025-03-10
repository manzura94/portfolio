import React from 'react'
import { ArrowTop } from './icons/ArrowTop'

const Jobs = () => {
  return (
    <section id="experience" className="mt-20">
      <ol>
        <li className="mb-12 p-5 rounded-[10px] group cursor-pointer transition-colors duration-300 hover:bg-[rgba(148,163,184,0.1)]">
          <div className="flex gap-10">
            <div className="w-[20%] mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 ">
              Nov 2024 - PRESENT
            </div>
            <div>
              <h3 className="font-medium text-slate-200 group-hover:text-teal-300 ">
                Frontend developer - Vosyn AI{' '}
                <span className="inline-block">
                  <ArrowTop />
                </span>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate-400">
                Build and maintain critical components used to construct
                frontend for projects, across the whole product. Work closely
                with cross-functional teams, including developers, designers,
                and product managers, to implement and advocate for best
                practices in web accessibility.
              </p>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2 flex">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Javascript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    Typescript
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </section>
  )
}

export default Jobs
