import Post from './post';

export interface User {
  _id: String;
  email: string;
  name: string;
  posts: Post[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
