'use client'
import Image from 'next/image';
import React from 'react';
import HeroImg from '../../../public/assets/hero.png'
import Skills from './Skills'
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Main = () => {
  return (
    <section id='home' className='relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden'>
      {/* Subtle background geometric elements */}
      <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/30 dark:from-blue-900/10 to-transparent rounded-bl-full' />
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-100/40 dark:from-slate-800/20 to-transparent rounded-tr-full' />

      <div className='max-w-[1240px] mx-auto px-6 w-full z-10 py-20 lg:py-0'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          
          {/* Left — Text */}
          <motion.div 
            className='flex-1 text-center lg:text-left'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className='text-xs sm:text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 mb-4 font-medium'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Front-End Developer &amp; Researcher
            </motion.p>
            
            <motion.h1 
              className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-3 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Yasir Obaid<br />
              <span className='gradient-text'>
                Al-Shukaili
              </span>
            </motion.h1>
            
            <motion.p 
              className='text-base text-slate-500 dark:text-slate-400 mb-1 max-w-md mx-auto lg:mx-0 font-medium'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              Animal Production Specialist
            </motion.p>
            
            <motion.p 
              className='text-slate-400 dark:text-slate-500 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed text-sm'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Combining 23+ years of livestock research with modern web development. 
              Building digital solutions with React, Next.js &amp; Headless CMS.
            </motion.p>

            <motion.div 
              className='flex gap-3 justify-center lg:justify-start mb-10 lg:mb-12'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <a 
                href='#project'
                className='px-6 py-2.5 bg-slate-800 dark:bg-white text-white dark:text-slate-900 rounded-lg 
                           hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-300 
                           text-sm font-medium shadow-lg shadow-slate-800/10 dark:shadow-white/5'
              >
                View Projects
              </a>
              <a 
                href='#contact'
                className='px-6 py-2.5 border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-slate-300 
                           rounded-lg hover:border-slate-400 dark:hover:border-gray-500 hover:bg-slate-50 
                           dark:hover:bg-gray-800 transition-all duration-300 text-sm font-medium'
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div 
            className='flex-1 flex justify-center lg:justify-end'
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className='relative'>
              {/* Decorative background behind image */}
              <div className='absolute -inset-2 bg-gradient-to-br from-blue-200/30 dark:from-blue-900/20 to-slate-300/30 dark:to-slate-700/20 rounded-2xl' />
              <div className='absolute inset-0 bg-white/10 dark:bg-gray-800/10 rounded-2xl' />
              <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 dark:shadow-black/30 border border-white/60 dark:border-gray-700/60'>
                <Image 
                  src={HeroImg}
                  width={440}
                  height={586}
                  alt='Yasir Obaid Al-Shukaili'
                  className='object-cover w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] h-auto'
                  priority
                />
              </div>
              {/* Status badge */}
              <div className='absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg 
                              px-3 py-1.5 flex items-center gap-2 border border-slate-100 dark:border-gray-700'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                <span className='text-xs font-medium text-slate-600 dark:text-slate-400'>Available for Work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className='absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <HiArrowDown className='text-slate-300 dark:text-slate-600 w-5 h-5' />
          </motion.div>
        </motion.div>
      </div>

      {/* Skills section — integrated at bottom of hero on desktop */}
      <div className='absolute bottom-0 left-0 right-0 hidden lg:block'>
        <div className='max-w-[1240px] mx-auto px-6'>
          <div className='border-t border-slate-200 dark:border-gray-800 py-5'>
            <Skills />
          </div>
        </div>
      </div>

      {/* Mobile/tablet skills */}
      <div className='lg:hidden w-full px-6 pt-8 pb-4'>
        <p className='text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3 text-center'>
          Skills
        </p>
        <Skills />
      </div>
    </section>
  );
};

export default Main;
