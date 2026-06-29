'use client'
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:yasir.obaid5@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  const labelClass = 'block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5';
  const iconBtnClass = 'p-3 rounded-xl bg-slate-50 dark:bg-gray-800 text-slate-600 dark:text-slate-400 transition-all duration-200';

  return (
    <section id='contact' className='py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-900'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='section-subtitle'>Contact</p>
          <h2 className='section-header'>Get In Touch</h2>
          <p className='text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto'>
            Have a question or want to work together? Send me a message.
          </p>
        </motion.div>

        <div className='max-w-2xl mx-auto'>
          <motion.div 
            className='card p-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              <div className='grid sm:grid-cols-2 gap-5'>
                <div>
                  <label className={labelClass}>Name</label>
                  <input {...register('name')} className='form-input' type='text' name='name' placeholder='Your name' />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input {...register('email')} className='form-input' type='email' name='email' placeholder='your@email.com' />
                </div>
              </div>
              <div>
                <label className={labelClass}>Subject</label>
                <input {...register('subject')} className='form-input' type='text' name='subject' placeholder='What is this about?' />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea {...register('message')} className='form-input resize-none' rows={5} name='message' placeholder='Your message...' />
              </div>
              <button
                type='submit'
                className='w-full py-3 bg-slate-800 dark:bg-white text-white dark:text-slate-900 rounded-lg 
                           hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-300 
                           text-sm font-medium shadow-lg shadow-slate-800/10 dark:shadow-white/5'
              >
                Send Message
              </button>
            </form>

            <div className='mt-8 pt-6 border-t border-slate-100 dark:border-gray-700'>
              <p className='text-sm font-medium text-slate-600 dark:text-slate-400 mb-4 text-center'>Or connect with me</p>
              <div className='flex justify-center gap-3'>
                <a href='https://www.linkedin.com/in/yasir-al-shukaili-2808b428/' target='_blank' rel='noreferrer'
                  className={`${iconBtnClass} hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400`}>
                  <FaLinkedinIn size={18} />
                </a>
                <a href='https://github.com/YasirObaid5' target='_blank' rel='noreferrer'
                  className={`${iconBtnClass} hover:bg-slate-200 dark:hover:bg-gray-700 hover:text-slate-900 dark:hover:text-white`}>
                  <FaGithub size={18} />
                </a>
                <a href='mailto:yasir.obaid5@gmail.com'
                  className={`${iconBtnClass} hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-500 dark:hover:text-red-400`}>
                  <AiOutlineMail size={18} />
                </a>
                <Link href='/resume' legacyBehavior>
                  <a className={`${iconBtnClass} hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400`}>
                    <BsFillPersonLinesFill size={18} />
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='flex justify-center mt-12'>
          <Link href='/' legacyBehavior>
            <a className='p-3 rounded-full bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 
                          shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300'>
              <HiOutlineChevronDoubleUp className='text-slate-500 dark:text-slate-400' size={20} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
