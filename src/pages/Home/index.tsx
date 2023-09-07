import { SearchForm } from './components/SearchForm'
import { Profile } from '../../components/Profile'
import { HomeContainer, PostsContainer, PostsGrid } from './styles'
import PostCard from './components/PostCard'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface User {
  id: number
  login: string
  url: string
}

interface Issue {
  id: number
  number: number
  comments: number
  title: string
  url: string
  body: string
  user: User
  createdAt: string
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues() {
    const response = await api.get('issues', {
      headers: {
        Authorization: `Bearer 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`,
      },
    })

    console.log(response)
    const transformedIssues = response.data.map((issue: any) => ({
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
    }))

    setIssues(transformedIssues)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  console.log(issues)

  return (
    <HomeContainer>
      <Profile />

      <PostsContainer>
        <SearchForm />

        <PostsGrid>
          <PostCard codigo="1" />
          <PostCard codigo="2" />
          <PostCard codigo="3" />
        </PostsGrid>
      </PostsContainer>
    </HomeContainer>
  )
}
