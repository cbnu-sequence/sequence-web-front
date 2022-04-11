import axios from 'axios';
import { backUrl } from '../config/config';
import { noticeList } from '../interfaces/post';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export async function write(data: { title: string; content: string }) {
  try {
    const response = await axios.post('post/notice', data);
    return response.status;
  } catch (error) {
    return console.log(error);
  }
}

export async function file(formData: FormData) {
  try {
    const response = await axios.post('file', formData);
    return response.data.data._id;
  } catch (error) {
    return console.log(error);
  }
}

export function getTable(category: string, page: number) {
  return axios.get(`/post/${category}?page=${page}&limit=10`).then((response) => response.data);
}

export function getPost(category: string, _id: string) {
  return axios.get(`/post/${category}/${_id}`).then((response) => response.data);
}
