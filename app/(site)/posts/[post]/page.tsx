"use client"
import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"
import  client  from '../../../../sanity/config/client-config'
import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
const builder = imageUrlBuilder(client);
type Props = {
  params: { post: string }
}

export default async function Post({params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);

  return (
    <>
  <div>
    <Head >
        <title>{post.title}</title>
      </Head>
    <main className="container mx-auto prose prose-lg p-4 margin-inline-start: 10px">
    <div key={post._id}>
    <h1 className="mt-14 text-xl tracking-widest uppercase text-[#010e0a]">{post.title}</h1>
    <Image
        
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post.title}
        />
    

    <PortableText value={post.body}/>
        <h5>{new Date(post.publishedAt).toDateString()}</h5>
    </div>
    </main>
   
  </div>
  </>
  )
} 