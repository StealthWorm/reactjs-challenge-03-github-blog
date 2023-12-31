import { ReactNode, useState, useEffect, useCallback } from 'react'
import { api } from '../lib/axios'

import { createContext } from 'use-context-selector'
import { AxiosResponse } from 'axios'

interface User {
  id: number
  name: string
  login: string
  url: string
  followers: number
  bio: string
  company: string
  userPhoto: string
}

interface IssueUser {
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
  user: IssueUser
  createdAt: string
}

interface IssuesContextType {
  issues: Issue[]
  user: User
  fetchIssues: (query?: string) => Promise<void>
  fetchUserProfile: () => Promise<void>
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
  const [user, setUser] = useState<User>({} as User)

  const [issues, setIssues] = useState<Issue[]>(() => {
    const storedStateAsJSON = localStorage.getItem('@github-blog:issues-1.0.0')

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  })

  const [page, setPage] = useState(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@github-blog:current-page-1.0.0',
    )

    if (storedStateAsJSON) {
      return Number(JSON.parse(storedStateAsJSON))
    }

    return 1
  })

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

  const fetchUserProfile = useCallback(async () => {
    const response = await api.get('users/StealthWorm')

    const userData: User = {
      id: response.data.id,
      name: response.data.name,
      login: response.data.login,
      url: response.data.html_url,
      followers: response.data.followers,
      bio: response.data.bio,
      company: response.data.company,
      userPhoto: `${response.data.html_url}.png`,
    }

    setUser(userData)
  }, [])

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
        url = `repos/StealthWorm/reactjs-challenge-03-github-blog/issues`
        response = await api.get(url, { params: { page } })

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
        setIsFirstPage(!response.headers.link.includes(`rel="first"`))
        setIsLastPage(!response.headers.link.includes(`rel="last"`))
      }

      setIssues(transformedIssues)
    },
    [page],
  )

  useEffect(() => {
    fetchIssues()
    fetchUserProfile()
  }, [fetchIssues, fetchUserProfile])

  useEffect(() => {
    localStorage.setItem('@github-blog:issues-1.0.0', JSON.stringify(issues))
    localStorage.setItem(
      '@github-blog:current-page-1.0.0',
      JSON.stringify(page),
    )
  }, [issues, page])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        user,
        fetchIssues,
        fetchUserProfile,
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
