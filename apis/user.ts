import axios from 'axios';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function loadMyInfoAPI() {
  return axios.get('/user').then((response) => response.data);
}

export function logInAPI(data: { email: string; password: string }) {
  return axios.post('/user/login', data).then((response) => response.data);
}

export function signUpAPI(data: { email: string; name: string; password: string; phoneNumber: string }) {
  return axios.post('/register', data).then((response) => response.data);
}

export function tokenConfirmAPI(token) {
  return axios.post('/register', token).then((response) => response.data);
}
