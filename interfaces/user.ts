import { InitResponse } from './common';
import { Post } from './post';

export interface User {
  valid: boolean;
  member: any;
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

export interface LogInAPI extends InitResponse {
  userId: string;
}

export interface KakaoLogInAPI extends InitResponse {
  data: string;
}

export interface SignUpAPI extends InitResponse {
  data: {
    email: string;
    password: string;
    name: string;
    phoneNumber: string;
    role: 'User' | 'Admin' | 'Member' | 'Operator'; 
    valid: boolean;
    id: string;
    createdAt: string;
    updatedAt: string;
    member: string;
  }
}