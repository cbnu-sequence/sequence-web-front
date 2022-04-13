export interface Post {
  id: number;
  content: string;
  Images: Array<{ src: string }>;
  createdAt: string;
}

export interface noticeList {
  _id: string;
  createdAt: Date;
  title: string;
  writer: string;
  category: string;
}
