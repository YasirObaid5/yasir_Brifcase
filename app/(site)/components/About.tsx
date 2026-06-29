'use client'
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: '#4a6a8e', color: '#fff' }
};
const CodeIcon = {
  icon: <FontAwesomeIcon icon={faCode} />,
  iconStyle: { background: '#5c7fa3', color: '#fff' }
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: '#64748b', color: '#fff' }
};

function About() {
  const timeline = [
    { icon: CodeIcon, date: '', title: 'Hobbies & Interests', subtitle: '', desc: 'Popular Science Magazine and history books reading, and Swimming' },
    { icon: CodeIcon, date: 'April 2021 – Present', title: 'Self-Taught Programmer', subtitle: 'Frontend Developer', desc: 'React.js, HTML, CSS, JavaScript, and Headless CMS' },
    { icon: workIcon, date: '2006 – Present', title: 'Head of Livestock Reproduction Research Section', subtitle: 'Livestock Production Research Centre', desc: 'Directorate General of Agriculture & Livestock Research, Ministry of Agriculture, Sultanate of Oman.' },
    { icon: workIcon, date: '2000 – 2006', title: 'Animal Production Specialist', subtitle: 'Muscat, Sultanate of Oman', desc: 'Rangeland Department, General Directorate of Animal Production, Ministry of Agriculture and Fisheries.' },
    { icon: schoolIcon, date: '2002 – 2005', title: 'Master of Animal Sciences', subtitle: 'MSc Degree', desc: 'Peoples Friendship University of Russia, 2005.' },
    { icon: schoolIcon, date: '1994 – 1999', title: 'Bachelor of Animal Sciences', subtitle: 'BSc Degree', desc: 'Sultan Qaboos University, Oman, 1999.' },
  ];

  return (
    <section id='about' className='py-20 bg-white dark:bg-gray-900'>
      <div className='max-w-[1240px] mx-auto px-4'>
        {/* Section Header */}
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='section-subtitle'>About</p>
          <h2 className='section-header'>Who I Am</h2>
        </motion.div>

        {/* About text */}
        <motion.div 
          className='max-w-3xl mx-auto text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className='text-slate-600 dark:text-slate-300 leading-relaxed text-lg'>
            I am an animal reproduction researcher with 23+ years of experience in livestock 
            reproduction, currently working in the Artificial Insemination Lab. As a self-taught 
            programmer, I am proficient in React.js, HTML, CSS, and JavaScript — allowing me to 
            bring a unique skill set to my work by combining animal science expertise with 
            innovative programming technology. This enables me to tackle challenges with a fresh 
            perspective and a dedication to finding cutting-edge solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <VerticalTimeline>
            {timeline.map((t, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={{ 
                  background: '#fff', 
                  color: '#334155',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                }}
                contentArrowStyle={{ borderRight: '7px solid #e2e8f0' }}
                iconStyle={t.icon.iconStyle}
                date={t.date}
                {...t.icon}
              >
                {t.title && (
                  <>
                    <h3 className="font-semibold text-slate-800">{t.title}</h3>
                    {t.subtitle && <h4 className="text-sm text-slate-500 mt-1">{t.subtitle}</h4>}
                    {t.desc && <p className="text-sm text-slate-500 mt-2 leading-relaxed">{t.desc}</p>}
                  </>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
