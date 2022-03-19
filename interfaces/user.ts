import Post from './post';

export default interface User {
  id: number;
  email: string;
  nickname: string;
  Followings: User[];
  Followers: User[];
  Posts: Post[];
}
