import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  createdAt: Date;
  title: string;
  slug: string;
  mainImage: string;
  description: string,
  publishedAt: Date,
  body: PortableTextBlock[],
  content: PortableTextBlock[];
}
export interface PostListProps {
  posts: Post[];
}