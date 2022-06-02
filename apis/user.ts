import axios from 'axios';
import { backUrl } from '../config/config';
import { queryKeys } from '../react-query/constants';
import { clearStoredUser } from '../user-storage/user-storage';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function loadMyInfoAPI(data) {
  if (!data) {
    return null;
  }
  return axios
    .get('auth/me')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      clearStoredUser();
    });
}

export function logInAPI(data: { email: string; password: string }) {
  return axios.post('auth/login', data).then((response) => response.data);
}

export function kakaoLogInAPI(code: string | string[]) {
  return axios.get(`auth/kakao/login?code=${code}`).then((response) => response.data);
}

export function signUpAPI(data: { email: string; name: string; password: string; phoneNumber: string }) {
  return axios.post('/auth/register', data).then((response) => response.data);
}

export function tokenConfirmAPI(data: { token: string }) {
  return axios.post('auth/valid', data).then((response) => response.data);
}

export function logOutAPI() {
  return axios.get('auth/logout').then((response) => response.data);
}


export async function getProjectMembers(){
  try{
    const response = await axios.get('/member/project');
    return response;
  } catch(error){
    return error.response;
  }
}

export async function getTechCourseMembers(){
  try{
    const response = await axios.get('/member/techCourse');
    return response;
  } catch(error){
    return error.response;
  }
}

export async function getManagerMembers(){
  try{
    const response = await axios.get('/member');
    return response;
  } catch(error){
    return error.response;
  }
}
