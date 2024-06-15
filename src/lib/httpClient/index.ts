import axios, { AxiosRequestConfig } from 'axios';
import { IHttpClient } from '@/types/lib/httpClient';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

class HttpClient implements IHttpClient {
  async get<TReturn>(url: string, config?: AxiosRequestConfig) {
    const response = await axiosInstance.get<TReturn>(url, config);
    return response.data;
  }
  async post<TReturn, Tbody>(
    url: string,
    body: Tbody,
    config?: AxiosRequestConfig
  ) {
    const response = await axiosInstance.post<TReturn>(url, body, config);
    return response.data;
  }
}

export const httpClient = new HttpClient();
