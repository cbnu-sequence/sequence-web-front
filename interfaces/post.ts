export default interface Post {
  id: number;
  content: string;
  Images: Array<{ src: string }>;
  createdAt: string;
}
