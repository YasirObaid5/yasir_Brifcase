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

  return (
    <section id='contact' className='py-20 bg-gradient-to-b from-white to-slate-50'>
      <div className='max-w-[1240px] mx-auto px-4'>
        {/* Section Header */}
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='section-subtitle'>Contact</p>
          <h2 className='section-header'>Get In Touch</h2>
          <p className='text-slate-500 mt-2 max-w-md mx-auto'>
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
                  <label className='block text-sm font-medium text-slate-700 mb-1.5'>Name</label>
                  <input
                    {...register('name')}
                    className='form-input'
                    type='text'
                    name='name'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-slate-700 mb-1.5'>Email</label>
                  <input
                    {...register('email')}
                    className='form-input'
                    type='email'
                    name='email'
                    placeholder='your@email.com'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-slate-700 mb-1.5'>Subject</label>
                <input
                  {...register('subject')}
                  className='form-input'
                  type='text'
                  name='subject'
                  placeholder='What is this about?'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-slate-700 mb-1.5'>Message</label>
                <textarea
                  {...register('message')}
                  className='form-input resize-none'
                  rows={5}
                  name='message'
                  placeholder='Your message...'
                />
              </div>
              <button
                type='submit'
                className='w-full py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 
                           transition-colors duration-300 text-sm font-medium shadow-lg shadow-slate-800/10'
              >
                Send Message
              </button>
            </form>

            {/* Connect links */}
            <div className='mt-8 pt-6 border-t border-slate-100'>
              <p className='text-sm font-medium text-slate-600 mb-4 text-center'>Or connect with me</p>
              <div className='flex justify-center gap-3'>
                <a
                  href='https://www.linkedin.com/in/yasir-al-shukaili-2808b428/'
                  target='_blank'
                  rel='noreferrer'
                  className='p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200'
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href='https://github.com/YasirObaid5'
                  target='_blank'
                  rel='noreferrer'
                  className='p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-all duration-200'
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href='mailto:yasir.obaid5@gmail.com'
                  className='p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-red-500 transition-all duration-200'
                >
                  <AiOutlineMail size={18} />
                </a>
                <Link href='/resume' legacyBehavior>
                  <a className='p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-green-50 hover:text-green-600 transition-all duration-200'>
                    <BsFillPersonLinesFill size={18} />
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to top */}
        <div className='flex justify-center mt-12'>
          <Link href='/' legacyBehavior>
            <a className='p-3 rounded-full bg-white border border-slate-200 shadow-sm 
                          hover:shadow-md hover:-translate-y-0.5 transition-all duration-300'>
              <HiOutlineChevronDoubleUp className='text-slate-500' size={20} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
