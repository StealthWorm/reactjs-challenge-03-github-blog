import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
  params: {
    per_page: 2,
    page: 1,
  },
})
