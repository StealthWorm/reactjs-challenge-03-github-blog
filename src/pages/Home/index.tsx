import { SearchForm } from './components/SearchForm'
import { Profile } from '../../components/Profile'
import PostCard from './components/PostCard'

import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../contexts/IssuesContext'

import { HomeContainer, PostsContainer, PostsGrid } from './styles'

export function Home() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  return (
    <HomeContainer>
      <Profile />

      <PostsContainer>
        <SearchForm />

        <PostsGrid>
          {issues.map((issue) => {
            return <PostCard key={issue.id} data={issue} />
          })}
        </PostsGrid>
      </PostsContainer>
    </HomeContainer>
  )
}
