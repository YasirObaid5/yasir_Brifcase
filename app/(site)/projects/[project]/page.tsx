"use client"
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"
import  client  from '../../../../sanity/config/client-config'
import imageUrlBuilder from "@sanity/image-url";
import React, {useState} from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Button from '../../components/Button';
const builder = imageUrlBuilder(client);
type Props = {
  params: { project: string }
}
// const ProjectData = () => {
//     const [loading, setLoading] = useState(false);
  
//     const downloadJson = async () => {
//       setLoading(true);
//       const apiUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=%2F%2F%20*%5B_type%20%3D%3D%20%22project%22%5D%0A*%5Btitle%20%3D%3D%20%22Travel%20Oman%22%5D`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'sanity-data.json';
//       link.click();
//       URL.revokeObjectURL(url);
//       setLoading(false);
//       return (
//         <button onClick={downloadJson} disabled={loading} className={` space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
//         text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
//         hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100`}>
//           {loading ? 'Downloading...' : 'Download JSON'}
//         </button>
//       );
    // };
export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          // className='absolute z-1'
         
          className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' 
          // className="object-cover rounded-lg border border-gray-500"
          // src={builder.image(project.mainImage).width(200).height(200).url()}
          src={project.mainImage}
          width={1000}
          height={1000}
          alt={project.title}
        /> 
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{project.title}</h2>
          <h3>{project.technologies}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <PortableText value={project.content} />
          <Link
            href={project.destinationCode}
            target='_blank'
            rel='noreferrer'
          >
            <Button className='px-8 py-2 mt-4 mr-8'>Code</Button>
          </Link>
          <Link
            href={project.destinationDemo}
            target='_blank'
            rel='noreferrer'
          >
            <Button className='px-8 py-2 mt-4'>Demo</Button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>{project.technologies}</p>
            
          </div>
        </div>
        <Link href='/#projects'>
          <p className={` space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100`}>Back</p>
        </Link>
      </div>
      {/* <ProjectData /> */}
    </div>
  );
} 