import axios, { AxiosRequestConfig } from 'axios';
import { backUrl } from '../config/config';

const config: AxiosRequestConfig = { baseURL: backUrl };
export const axiosInstance = axios.create(config);
