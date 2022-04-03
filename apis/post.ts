import axios from 'axios';
import { backUrl } from '../config/config';
import { noticeList } from '../interfaces/post';

axios.defaults.baseURL = backUrl;

export function getTable(category: string, page: number) {
  return axios.get(`/post/${category}?page=${page}&limit=10`).then((response) => response.data);
}
