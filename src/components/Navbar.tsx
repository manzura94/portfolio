import React from 'react'

const Navbar = () => {
  const navbarMenu = ['About', 'Experience', 'Projects']
  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navbarMenu.map((name, index) => (
          <li key={index}>
            <a href="#" className="group flex items-center py-3 active">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
