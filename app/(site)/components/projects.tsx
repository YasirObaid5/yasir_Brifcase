'use client'
import Button from './Button'
import React, { useState, useEffect, ReactElement } from 'react'
import  client  from '../../../sanity/config/client-config'
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image'
import { Project, ProjectListProps } from '../../../types/Project';
import Link from 'next/link';
const builder = imageUrlBuilder(client);

export default function Projects({projects}: ProjectListProps): ReactElement {
  const [ postNum, setPostNum] = useState(3); // Default number of posts dislplayed
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 1) // 4 is the number of posts you want to load per click
  
  };

  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  useEffect(() => {
    setDisplayedProjects(projects);
  }, [projects]);
  return (
   
    <div id='project'>
      <div className='bg-[#d0d4d6] my-2 p-4 w-full flex  items-center'>
      <div className='mt-14 text-xl tracking-widest uppercase text-[#010e0a]'>
            My Projects
          </div>
       </div> 
      <div className="project-container flex items-center justify-between  border-y  py-10 lg:py-0 ">
      

         <div className=" grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 " >
          
         
     
         { displayedProjects.slice(0, postNum).map((project, index) => (
           <Link key={project._id} href={`/projects/${project.slug}`} className="p-4 hover:bg-blue-50">
              <div className="group cursor-pointer overflow-hidden rounded-lg border">
              <span key={index}>   
             <Image
           className="rounded-xl group-hover:opacity-10 transition-transform duration-200 ease-in-out group-hover:scale-105"
           src={builder.image(project.mainImage).width(800).height(800).url()}
           width={800}
           height={800}
           alt={project.title}
         />
          </span>
             <span className="tracking-widest text-lg font-medium text-gray-900 mb-1">
               {project.title}</span>
               {/* <div>
                 <span className="py-4 text-justify sm:max-w-[70%] m-auto">
               {project.description}</span> 
               </div> */}
               {/* <div>
                 <span className="py-4 text-sm text-gray-500 text-justify sm:max-w-[70%] m-auto">
               {new Date(post.publishedAt).toDateString()}</span> 
               </div>  */}
               
             </div>
           </Link>
         ))}
          <div>
            <Button onClick={handleClick}>Load More</Button>
         </div>
         </div>
        
         {/* <PostData Url={Url}/> */}
         </div>
      
    </div>
  )
}


