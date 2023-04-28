import axios, { CanceledError, AxiosRequestConfig } from 'axios';

export { CanceledError };
export type { AxiosRequestConfig };

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'dfcc832e69594acf9eacb5ffbded13e4',
  },
});
