import axios from 'axios';
export function loadMyInfoAPI() {
  return axios.get('/user').then((response) => response.data);
}

export function logInAPI(data: { email: string; password: string }) {
  return axios.post('/user/login', data).then((response) => response.data);
}

export function signUpAPI(data: { email: string; nickname: string; password: string }) {
  return axios.post('/user', data).then((response) => response.data);
}
