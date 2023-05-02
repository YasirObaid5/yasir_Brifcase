'use client'
import React, { useState, useEffect, ReactElement } from 'react'
import  client  from '../../../sanity/config/client-config'
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image'
import Button from './Button'
import { Post, PostListProps } from '../../../types/Post';
import Link from 'next/link';
const builder = imageUrlBuilder(client);

export default function Posts({posts}: PostListProps): ReactElement {
  
  const [ postNum, setPostNum] = useState(4); // Default number of posts dislplayed
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 4) // 4 is the number of posts you want to load per click
  
  };

  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  useEffect(() => {
    setDisplayedPosts(posts);
  }, [posts]);
  return (
   
    <div id='post'>
      {/* <div className='bg-[#d0d4d6] my-2 p-4 w-full flex  items-center'>
      <div className='mt-14 text-xl tracking-widest uppercase text-[#010e0a]'>
            My Blog 
          </div>
       </div>    */}
      

      <div className="project-container flex items-center justify-between  border-y  py-10 lg:py-0 ">
         

        <div className=" grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 " >
         
        
    
        { displayedPosts.slice(0, postNum).map((post, index) => (
          <Link key={post._id} href={`/posts/${post.slug}`} className="p-4 hover:bg-blue-50">
             <div className="group cursor-pointer overflow-hidden rounded-lg border">
             <span key={index}>   
            <Image
          className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          src={builder.image(post.mainImage).width(1000).height(1000).url()}
          width={1000}
          height={1000}
          alt={post.title}
        />
         </span>
            <span className="tracking-widest uppercase text-lg font-medium text-black-400 mb-1">
              {post.title}</span>
              <div>
                <span className="py-4 text-justify sm:max-w-[70%] m-auto">
              {post.description}</span> 
              </div>
              <div>
                <span className="py-4 text-sm text-gray-500 text-justify sm:max-w-[70%] m-auto">
              {new Date(post.publishedAt).toDateString()}</span> 
              </div> 
              
            </div>
          </Link>
        ))}
         <div>
           <Button onClick={handleClick}>Load More</Button>
        </div>
        </div>
       
     
        </div>
     
    </div>
  )
}


