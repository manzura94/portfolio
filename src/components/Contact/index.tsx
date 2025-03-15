import { socialLinks } from '@/data'
import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className="mt-auto left-[50px] bottom-[150px] fixed  max-xl:bottom-[50px] contact-div">
      <ul className="ml-1 mt-8 relative flex items-center xl2:flex-col gap-5 after:content-[''] after:w-[1.5px] after:h-[150px] after:top-[130px] after:left-[50%] after:-translate-x-1/2 after:bg-[#a8b2d19c] after:absolute hide-after">
        {socialLinks.map(({ id, href, icon }) => (
          <li key={id} className=" shrink-0 text-xs">
            <a
              href={href}
              className="block text-[#94A3B8] transition-all duration-300 ease-in-out hover:text-slate-200 hover:-translate-y-[2px]"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contact
