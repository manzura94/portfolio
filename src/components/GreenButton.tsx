import React from 'react'
interface GreenButtonProps {
  name: string
  href: string
  download?: boolean
}

export const GreenButton = ({ name, href, download }: GreenButtonProps) => {
  return (
    <div>
      <a
        href={href}
        {...(download
          ? { download: true }
          : { target: '_blank', rel: 'noopener noreferrer' })}
        className="relative inline-block text-[#64ffda] border border-[#64ffda] px-4 py-2 
                 rounded-md font-mono text-sm transition-all duration-300 
                 hover:-translate-x-1 hover:-translate-y-1 
                 hover:shadow-[3px_3px_0_0_#64FFDA] focus-visible:outline-none"
      >
        {name}
      </a>
    </div>
  )
}
