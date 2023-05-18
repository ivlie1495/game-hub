import axios, { CanceledError, AxiosRequestConfig } from 'axios'

export { CanceledError }
export type { AxiosRequestConfig }

export interface Response<T> {
  count: number
  next: string | null
  prev: string | null
  results: T[]
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
})

class API<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) =>
    api.get<Response<T>>(this.endpoint, config).then((res) => res.data)

  get = (id: number | string) =>
    api.get<T>(`${this.endpoint}/${id}`).then((res) => res.data)
}

export default API
