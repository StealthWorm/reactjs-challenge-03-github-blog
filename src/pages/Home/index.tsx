import { SearchForm } from './components/SearchForm'
import { Profile } from '../../components/Profile'
import PostCard from './components/PostCard'

import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../contexts/IssuesContext'

import { HomeContainer, PostsContainer, PostsGrid } from './styles'
import { Pagination } from './components/Pagination'

export function Home() {
  const context = useContextSelector(IssuesContext, (context) => ({
    issues: context.issues,
  }))

  return (
    <HomeContainer>
      <Profile />

      <PostsContainer>
        <SearchForm />

        <PostsGrid>
          {context.issues.map((issue) => {
            return <PostCard key={issue.id} data={issue} />
          })}
        </PostsGrid>

        <Pagination />
      </PostsContainer>
    </HomeContainer>
  )
}
