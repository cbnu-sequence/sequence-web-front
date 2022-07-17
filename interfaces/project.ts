import { Img, Writer } from './post';

export interface Project {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
  githubUrl: string;
  images: Img[];
  participants: string[];
  projectUrl: string;
  tags: string[];
  updatedAt: Date;
  writer: Writer;
  year: string;
  __v: number;
}
