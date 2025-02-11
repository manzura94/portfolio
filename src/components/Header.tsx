import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='w-1/2'>
            <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>Manzura Jabbarova</h1>
            <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Front End Engineer</h2>
            <p className='mt-4 max-w-xs leading-normal text-slate-400'>I bring designs to life with accessible, high-performance web development.</p>
            <Navbar />
        </header>
    );
};

export default Header;
