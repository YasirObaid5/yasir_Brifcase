'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../../../public/assets/logo.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMounted(true); }, []);

  const navigations = [
    { _id: 0, label: 'Home', path: '/' },
    { _id: 1, label: 'Projects', path: '/#project' },
    { _id: 2, label: 'Blog', path: '/#post' },
    { _id: 3, label: 'About', path: '/#about' },
    { _id: 4, label: 'Contact', path: '/#contact' },
    { _id: 5, label: 'CV', path: '/cv' },
  ];

  const navIcons = [
    { _id: 1, icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/yasir-al-shukaili-2808b428/' },
    { _id: 2, icon: <FaGithub />, path: 'https://github.com/YasirObaid5' },
    { _id: 3, icon: <AiOutlineMail />, path: '/#contact' },
    { _id: 4, icon: <BsFillPersonLinesFill />, path: '/resume' },
  ];

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
      <button
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        className='p-2 rounded-lg bg-slate-100 dark:bg-gray-700 hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors'
        aria-label='Toggle theme'
      >
        {currentTheme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>
    );
  };

  return (
    <>
      <nav
        className={
          scrolled
            ? 'fixed w-full z-[100] bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-slate-200/60 dark:border-gray-700/60 shadow-sm transition-all duration-300'
            : 'fixed w-full z-[100] bg-transparent transition-all duration-300'
        }
      >
        <div className='max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' legacyBehavior>
            <a className='flex items-center gap-3 flex-shrink-0'>
              <Image
                src={NavLogo}
                alt='Yasir Logo'
                width={36}
                height={36}
                className='rounded-full ring-2 ring-slate-200 dark:ring-gray-600 shadow-sm'
              />
              <span className='hidden sm:block text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wide'>
                Yasir
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center gap-1'>
            {navigations.map(nav => (
              <Link key={nav._id} href={nav.path}>
                <span className='px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 
                                 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 cursor-pointer'>
                  {nav.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Theme toggle */}
          <div className='flex items-center'>
            {renderThemeChanger()}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={handleNav}
            className='md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors ml-2'
            aria-label='Menu'
          >
            <AiOutlineMenu size={22} className='text-slate-700 dark:text-slate-300' />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={nav ? 'md:hidden fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm' : 'hidden'}
        onClick={handleNav}
      >
        <div
          className='fixed left-0 top-0 w-[80%] max-w-[320px] h-screen bg-white dark:bg-gray-900 shadow-2xl p-6 z-[201]'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex items-center justify-between mb-8'>
            <Link href='/' legacyBehavior>
              <a onClick={() => setNav(false)}>
                <Image src={NavLogo} width={40} height={40} alt='Logo' className='rounded-full' />
              </a>
            </Link>
            <button onClick={handleNav} className='p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors'>
              <AiOutlineClose size={20} className='text-slate-600 dark:text-slate-400' />
            </button>
          </div>
          <ul className='flex flex-col gap-1'>
            {navigations.map(nav => (
              <li key={nav._id}>
                <Link href={nav.path}>
                  <span onClick={() => setNav(false)}
                    className='block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer font-medium'>
                    {nav.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className='mt-8 pt-6 border-t border-slate-100 dark:border-gray-800'>
            <p className='text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4'>Connect</p>
            <div className='flex gap-3'>
              {navIcons.map(icon => (
                <a key={icon._id} href={icon.path} target='_blank' rel='noreferrer'
                  className='p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 text-slate-600 dark:text-slate-400 
                             hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-slate-900 dark:hover:text-white transition-all'>
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
