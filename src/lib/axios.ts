import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://api.github.com/repos/StealthWorm/reactjs-challenge-03-github-blog/',
})
