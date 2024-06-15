import { AxiosRequestConfig } from 'axios';

export interface IHttpClient {
  get<TReturn>(url: string, config?: AxiosRequestConfig): Promise<TReturn>;
  post<TReturn, Tbody>(
    url: string,
    body: Tbody,
    config?: AxiosRequestConfig
  ): Promise<TReturn>;
}
