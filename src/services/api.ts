import axios, { CanceledError, AxiosRequestConfig } from 'axios';

export { CanceledError };
export type { AxiosRequestConfig };

export interface Response<T> {
  count: number;
  next: string | null;
  prev: string | null;
  results: T[];
}

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'dfcc832e69594acf9eacb5ffbded13e4',
  },
});

class API<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getList = async (config: AxiosRequestConfig) =>
    api.get<Response<T>>(this.endpoint, config).then((res) => res.data);
}

export default API;
