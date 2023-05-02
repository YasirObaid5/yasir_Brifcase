


import Posts from './components/posts'
import PostsSlideShow from './components/PostsSlideShow'
import Projects from './components/projects'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import { getProjects } from '@/sanity/sanity-utils'
import { getPosts } from '@/sanity/sanity-utils'
import {createClient} from 'next-sanity'
import  client  from '../../sanity/config/client-config'
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image'
import { Project, ProjectListProps } from '../../types/Project';
import { Post, PostListProps } from '../../types/Post';
import Link from 'next/link';

const builder = imageUrlBuilder(client);


export default async function Home() {
  const posts: Post[] = await getPosts();
  const projects: Project[] = await getProjects();
  return (
    <div className="h-screen container mx-auto px-4"> 
      <Main />
   
   
    <Projects projects={projects}/>
   
    <PostsSlideShow posts={posts}/>
   <Posts posts={posts}/>
   <About />
   <Contact />
   </div>
  )
}
