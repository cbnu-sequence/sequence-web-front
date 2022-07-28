import axios from 'axios';
import { backUrl } from '../config/config';
import { firstPomodoroData, myPomosData, secondPomodoroData } from '../interfaces/pomodoro';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;


export function firstPomodoroAPI(data: { title: string; date: Date }): Promise<firstPomodoroData> {
  return axios.post('/pomodoro', data).then((response) => response.data);
}

export function secondPomodoroAPI(id: string, data: { date: Date }): Promise<secondPomodoroData> {
  return axios.post(`/pomodoro/${id}`, data).then((response) => response.data);
}

export function myPomosAPI(): Promise<myPomosData> {
  return axios.get('/pomodoro/user/me').then((response) => response.data);
}

export function getPomoRanking(range: string) {
  return axios.get(`/pomodoro/ranking/${range}`).then((response) => response.data);
}
