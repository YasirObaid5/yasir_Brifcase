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
  { icon: Google, label: 'Google Earth Engine' },
  { icon: Animal, label: 'Animal Production' },
];

const Skills = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
      {skills.map((skill, i) => (
        <div key={i} className='skill-card flex items-center gap-3'>
          <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center'>
            <Image src={skill.icon} width={36} height={36} alt={skill.label} />
          </div>
          <span className='text-sm font-medium text-slate-700'>{skill.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
