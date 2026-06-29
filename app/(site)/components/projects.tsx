'use client'
import React, { useState, useEffect, ReactElement } from 'react'
import client from '../../../sanity/config/client-config'
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image'
import { Project, ProjectListProps } from '../../../types/Project';
import Link from 'next/link';
import { motion } from 'framer-motion';

const builder = imageUrlBuilder(client);

export default function Projects({ projects }: ProjectListProps): ReactElement {
  const [postNum, setPostNum] = useState(6);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);

  useEffect(() => {
    setDisplayedProjects(projects);
  }, [projects]);

  function handleClick() {
    setPostNum(prev => prev + 3);
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.slice(0, postNum).map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="content-card group">
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={builder.image(project.mainImage).width(600).height(340).url()}
                    width={600}
                    height={340}
                    alt={project.title}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800 text-sm mb-1 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {project.description || 'View project details →'}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {postNum < displayedProjects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleClick}
            className="px-6 py-2.5 border border-slate-200 text-slate-600 rounded-lg 
                       hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-sm font-medium"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}
