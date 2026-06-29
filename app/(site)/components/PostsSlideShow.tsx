'use client'
import React, { useState, useEffect, ReactElement } from 'react'
import client from '../../../sanity/config/client-config'
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image'
import { Post, PostListProps } from '../../../types/Post';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const builder = imageUrlBuilder(client);

export default function PostsSlideShow({ posts }: PostListProps): ReactElement {
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    setDisplayedPosts(posts);
  }, [posts]);

  if (!displayedPosts.length) return <></>;

  return (
    <div className="mb-16">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={600}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {displayedPosts.slice(0, 5).map((post, index) => (
          <Link key={post._id} href={`/posts/${post.slug}`}>
            <div className="relative aspect-[21/9] bg-slate-100">
              <Image
                className="w-full h-full object-cover"
                src={builder.image(post.mainImage).width(1200).height(514).url()}
                width={1200}
                height={514}
                alt={post.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1">{post.title}</h3>
                <p className="text-white/80 text-sm line-clamp-1">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  )
}
