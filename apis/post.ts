import axios from 'axios';
import { backUrl } from '../config/config';
import { noticeList, Project, ProjectResponse } from '../interfaces/post';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export async function postWrite(
  category: string | string[],
  data: { title: string; content: string; files: Array<string> },
) {
  try {
    const response = await axios.post(`post/${category}`, data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function postFile(formData: FormData) {
  try {
    const response = await axios.post('file', formData);
    return response;
  } catch (error) {
    return error.response;
  }
}

export function getTable(category: string, page: number, limit: number) {
  return axios.get(`/post/${category}?page=${page}&limit=${limit}&sort=-createdAt`).then((response) => response.data);
}

export function getPost(category: string, _id: string) {
  return axios
    .get(`/post/${category}/${_id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

export function getProjectPost(_id: string): Promise<ProjectResponse> {
  return axios
    .get(`project/${_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
}

export async function postProjectWrite(data: {
  title: string;
  content: string;
  githubUrl: string;
  projectUrl: string;
  participants: Array<string>;
  tags: Array<string>;
  year: string;
  images: Array<string>;
}) {
  try {
    const response = await axios.post('/project', data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function postModify(
  category: string | string[],
  id: string,
  data: { title: string; content: string; files: Array<string> },
) {
  try {
    const response = await axios.post(`post/${category}/${id}`, data);
    return response;
  } catch (error) {
    return error.response;
  }
}
