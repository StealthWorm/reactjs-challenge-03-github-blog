import { ReactNode, useState, useEffect, useCallback } from 'react'
import { api } from '../lib/axios'

import { createContext } from 'use-context-selector'
import { AxiosResponse } from 'axios'

interface User {
  id: number
  login: string
  url: string
}

export interface Issue {
  id: number
  number: number
  comments: number
  title: string
  url: string
  body: string
  user: User
  createdAt: string
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
  page: number
  nextPage: () => void
  previousPage: () => void
  isLastPage: boolean
  isFirstPage: boolean
}

interface IssuesContextProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [page, setPage] = useState(1)
  const [isFirstPage, setIsFirstPage] = useState(true)
  const [isLastPage, setIsLastPage] = useState(false)

  function nextPage() {
    if (!isLastPage) {
      setPage((state) => state + 1)
    }
  }

  function previousPage() {
    if (!isFirstPage) {
      setPage((state) => state - 1)
    }
  }

  const fetchIssues = useCallback(
    async (query?: string) => {
      let response: AxiosResponse
      let transformedIssues: Issue[]
      let url

      if (query) {
        url = `search/issues?q=${query}+repo:StealthWorm/reactjs-challenge-03-github-blog`
        response = await api.get(url)

        transformedIssues = response.data.items.map((issue: any) => {
          const issueData: Issue = {
            id: issue.id,
            number: issue.number,
            comments: issue.comments,
            title: issue.title,
            url: issue.html_url,
            body: issue.body,
            user: {
              id: issue.user.id,
              login: issue.user.login,
              url: issue.user.html_url,
            },
            createdAt: issue.created_at,
          }
          return issueData
        })
      } else {
        // url = `repositories/686629445/issues`
        url = `repos/StealthWorm/reactjs-challenge-03-github-blog/issues`
        response = await api.get(url, { params: { page } })

        console.log(response.data.length)

        transformedIssues = response.data.map((issue: any) => {
          const issueData: Issue = {
            id: issue.id,
            number: issue.number,
            comments: issue.comments,
            title: issue.title,
            url: issue.html_url,
            body: issue.body,
            user: {
              id: issue.user.id,
              login: issue.user.login,
              url: issue.user.html_url,
            },
            createdAt: issue.created_at,
          }
          return issueData
        })
      }

      if (response.headers.link) {
        console.log(response.headers.link)
        setIsFirstPage(!response.headers.link.includes(`rel="first"`))
        setIsLastPage(!response.headers.link.includes(`rel="last"`))
      }

      setIssues(transformedIssues)
    },
    [page],
  )

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        fetchIssues,
        page,
        nextPage,
        previousPage,
        isFirstPage,
        isLastPage,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
