'use client'
import Image from 'next/image';
import React from 'react';
import HeroImg from '../../../public/assets/hero.png'
import Skills from './Skills'
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Main = () => {
  return (
    <section id='home' className='relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden'>
      {/* Subtle background geometric element */}
      <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 to-slate-200/20 rounded-bl-full -z-0' />
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-100/50 to-blue-50/30 rounded-tr-full -z-0' />

      <div className='max-w-[1240px] mx-auto px-4 w-full z-10 py-20 lg:py-0'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          
          {/* Left — Text */}
          <motion.div 
            className='flex-1 text-center lg:text-left'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className='text-sm uppercase tracking-[0.25em] text-slate-500 mb-4 font-medium'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Front-End Developer &amp; Researcher
            </motion.p>
            
            <motion.h1 
              className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Yasir Obaid<br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600'>
                Al-Shukaili
              </span>
            </motion.h1>
            
            <motion.p 
              className='text-lg text-slate-600 mb-2 max-w-md mx-auto lg:mx-0'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Animal Production Specialist
            </motion.p>
            
            <motion.p 
              className='text-slate-500 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Combining 23+ years of livestock research with modern web development. 
              Building digital solutions with React, Next.js &amp; Headless CMS.
            </motion.p>

            <motion.div 
              className='flex gap-4 justify-center lg:justify-start'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <a 
                href='#project'
                className='px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300 text-sm font-medium shadow-lg shadow-slate-800/20'
              >
                View Projects
              </a>
              <a 
                href='#contact'
                className='px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 text-sm font-medium'
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
              {/* Decorative frame */}
              <div className='absolute -inset-3 bg-gradient-to-br from-blue-400/20 to-slate-400/20 rounded-2xl blur-sm' />
              <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-white/60'>
                <Image 
                  src={HeroImg}
                  width={480}
                  height={640}
                  alt='Yasir Obaid Al-Shukaili'
                  className='object-cover w-full max-w-[380px] lg:max-w-[420px] h-auto'
                  priority
                />
              </div>
              {/* Small accent badge */}
              <div className='absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 border border-slate-100'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                <span className='text-xs font-medium text-slate-600'>Available for Work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className='absolute bottom-8 left-1/2 -translate-x-1/2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <HiArrowDown className='text-slate-400 w-5 h-5' />
          </motion.div>
        </motion.div>
      </div>

      {/* Skills section — integrated below hero */}
      <div className='absolute bottom-0 left-0 right-0 hidden lg:block'>
        <div className='max-w-[1240px] mx-auto px-4'>
          <div className='border-t border-slate-200 py-6'>
            <Skills />
          </div>
        </div>
      </div>

      {/* Mobile skills */}
      <div className='lg:hidden w-full px-4 mt-8'>
        <div className='border-t border-slate-200 pt-8'>
          <p className='text-xs uppercase tracking-[0.2em] text-slate-400 mb-4 text-center'>Skills</p>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Main;
