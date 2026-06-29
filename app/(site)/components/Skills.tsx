import Image from 'next/image';
import Css from '../../../public/assets/skills/css.png';
import Javascript from '../../../public/assets/skills/javascript.png';
import ReactImg from '../../../public/assets/skills/react.png';
import Tailwind from '../../../public/assets/skills/tailwind.png';
import NextJS from '../../../public/assets/skills/nextjs.png';
import Google from '../../../public/assets/skills/googleEarth.png';
import Sanity from '../../../public/assets/skills/sanity.png';
import Animal from '../../../public/assets/skills/ai.png';

const skills = [
  { icon: Css, label: 'CSS' },
  { icon: Javascript, label: 'JavaScript' },
  { icon: ReactImg, label: 'React' },
  { icon: NextJS, label: 'Next.js' },
  { icon: Tailwind, label: 'Tailwind' },
  { icon: Sanity, label: 'Sanity.io' },
  { icon: Google, label: 'Google Earth\nEngine' },
  { icon: Animal, label: 'Animal\nProduction' },
];

const Skills = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
      {skills.map((skill, i) => (
        <div key={i} className='skill-card'>
          <div className='flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-lg bg-slate-50 dark:bg-gray-700/50 p-1.5'>
            <Image src={skill.icon} width={32} height={32} alt={skill.label} className='object-contain' />
          </div>
          <span className='text-xs font-medium text-slate-700 dark:text-slate-300 leading-tight whitespace-pre-line'>
            {skill.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
