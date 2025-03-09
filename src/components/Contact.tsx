import React from 'react';
import Github from './icons/Github';
import { Gmail } from './icons/Gmail';
import { Instagram } from './icons/Instagram';
import { LinkedIn } from './icons/LinkedIn';

const socialLinks = [
    { id: 'github', href: 'https://github.com/manzura94', icon: <Github /> },
    { id: 'linkedin', href: 'https://www.linkedin.com/in/manzura-jabbarova-19066712a/', icon: <LinkedIn /> },
    { id: 'instagram', href: '#', icon: <Instagram /> },
    { id: 'gmail', href: 'mailto:manzurajabbarova1994@gmail.com', icon: <Gmail /> },
];

const Contact = () => {
    return (
        <div className='mt-auto'>
            <ul className='ml-1 mt-8 flex items-center'>
                {socialLinks.map(({ id, href, icon }) => (
                    <li key={id} className='mr-5 shrink-0 text-xs'>
                        <a href={href} className='block text-[#94A3B8] hover:text-slate-200'>
                            {icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;
