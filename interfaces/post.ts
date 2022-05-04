export interface Post {
  _id: number;
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
  writer: string;
  category: string;
}
