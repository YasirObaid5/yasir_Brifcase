import Posts from './components/posts'
import PostsSlideShow from './components/PostsSlideShow'
import Projects from './components/projects'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import { getProjects } from '@/sanity/sanity-utils'
import { getPosts } from '@/sanity/sanity-utils'
import { Project } from '../../types/Project';
import { Post } from '../../types/Post';

export default async function Home() {
  const posts: Post[] = await getPosts();
  const projects: Project[] = await getProjects();
  
  return (
    <>
      <Main />
      
      {/* Projects Section */}
      <section id='project' className='py-20 bg-white'>
        <div className='max-w-[1240px] mx-auto px-4'>
          <div className='text-center mb-12'>
            <p className='section-subtitle'>Portfolio</p>
            <h2 className='section-header'>My Digital Projects</h2>
          </div>
          <Projects projects={projects} />
        </div>
      </section>

      {/* Blog Section */}
      <section id='post' className='py-20 bg-slate-50/50'>
        <div className='max-w-[1240px] mx-auto px-4'>
          <PostsSlideShow posts={posts} />
          <div className='text-center mb-12'>
            <p className='section-subtitle'>Blog</p>
            <h2 className='section-header'>Latest Posts</h2>
          </div>
          <Posts posts={posts} />
        </div>
      </section>

      <About />
      <Contact />
    </>
  )
}
