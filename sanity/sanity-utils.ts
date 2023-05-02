import { createClient, groq} from "next-sanity"
import clientConfig from './config/client-config'
import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Post } from "@/types/Post";


export async function getProjects(): Promise<Project[]>{

  return  createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            destinationCode,
            destinationDemo,
            technologies,
            content,

        }`
    )

}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        destinationCode,
        destinationDemo,
        technologies,
        publishedAt,
        content,
        body,
      }`,
      { slug: slug }
    )
  }
  
  export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
      }`
    )
  }
  
  export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
      }`,
      { slug }
    )
  }
  
  

export async function getPosts(): Promise<Post[]>{

    return  createClient(clientConfig).fetch(
        groq`*[_type == "post"]{
            _id,
            _createdAt,
            title,
            description,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            publishedAt,
            content,

        }`
        )

}

export async function getPost(slug: string): Promise<Post>{

    return  createClient(clientConfig).fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            description,
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            publishedAt,
            body,
            content,

        }`,
        { slug }
        )

}