'use client'
import React, { useEffect, useMemo, useState } from 'react'

const Navbar = () => {
  const navbarMenu = useMemo(() => ['about', 'experience', 'projects'], [])
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      let newActiveSection = activeSection

      for (let i = 0; i < navbarMenu.length; i++) {
        const section = document.getElementById(navbarMenu[i])
        if (section) {
          const rect = section.getBoundingClientRect()

          if (
            rect.top < viewportHeight * 0.5 &&
            rect.bottom > viewportHeight * 0.2
          ) {
            newActiveSection = navbarMenu[i]
          }
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection, navbarMenu])

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navbarMenu.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`group flex items-center py-3 transition-all ${
                activeSection === id ? 'text-white' : 'text-slate-500'
              } hover:text-white`}
            >
              <span
                className={`nav-indicator mr-4 h-px transition-all ${
                  activeSection === id
                    ? 'w-16 bg-white'
                    : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-white'
                }`}
              ></span>
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  activeSection === id ? 'text-white' : 'text-slate-500'
                } group-hover:text-white`}
              >
                {id}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
