import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  title: string;
  slug: string;
  mainImage: string;
  destinationCode: string,
  destinationDemo: string,
  technologies: string,
  content: PortableTextBlock[];
}

export interface ProjectListProps {
  projects: Project[];
}