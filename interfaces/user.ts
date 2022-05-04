import { Post } from './post';

export interface User {
  _id: string;
  email: string;
  name: string;
  role: string;
  posts: Post[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface SignUpData {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
}

export interface LogInData {
  email: string;
  password: string;
}
