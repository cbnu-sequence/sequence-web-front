export interface Post {
  _id: string;
  title: string;
  category: string;
  content: string;
  Images: Array<{ src: string }>;
  createdAt: Date;
  updatedAt: Date;
}

export interface noticeList {
  _id: string;
  createdAt: Date;
  title: string;
  writer: Writer;
  category: string;
}

export interface Writer {
  _id: string;
  name: string;
  role: 'User' | 'Admin' | 'Member';
}

export interface Project {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  participants: Array<string>;
  title: string;
  writer: Writer;
  tags: Array<string>;
  category: string;
  images: Array<Img>;
  year: string;
  githubUrl: string;
  projectUrl: string;
  __v: string;
}

export interface Img {
  _id: string;
  url: string;
  filename: string;
}
