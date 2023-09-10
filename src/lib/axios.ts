import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer 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`,
  },
  params: {
    per_page: 2,
    page: 1,
  },
})
