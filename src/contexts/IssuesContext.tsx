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
}

interface IssuesContextProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async (query?: string) => {
    let response: AxiosResponse
    let transformedIssues: Issue[]

    if (query) {
      response = await api.get(
        `search/issues?q=${query}+repo:StealthWorm/reactjs-challenge-03-github-blog`,
        {
          headers: {
            Authorization: `Bearer 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`,
          },
        },
      )

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
      response = await api.get(
        `repos/StealthWorm/reactjs-challenge-03-github-blog/issues?q=${query}+in:title`,
        {
          headers: {
            Authorization: 'Bearer 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',
          },
          params: {
            per_page: 4,
            page: 1,
          },
        },
      )

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

    setIssues(transformedIssues)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        fetchIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
