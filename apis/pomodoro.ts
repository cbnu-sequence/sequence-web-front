import axios from 'axios';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function firstPomodoroAPI(data: { title: string; date: Date }) {
  return axios.post('/pomodoro', data).then((response) => response.data);
}

export function secondPomodoroAPI(id, data: { date: Date }) {
  return axios.post(`/pomodoro/${id}`, data).then((response) => response.data);
}
