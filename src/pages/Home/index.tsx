import { SearchForm } from './components/SearchForm'
import { Profile } from '../../components/Profile'
import PostCard from './components/PostCard'

import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../contexts/IssuesContext'

import {
  HomeContainer,
  PaginationContainer,
  PostsContainer,
  PostsGrid,
} from './styles'

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Home() {
  const context = useContextSelector(IssuesContext, (context) => ({
    issues: context.issues,
    nextPage: context.nextPage,
    previousPage: context.previousPage,
    currentPage: context.page,
    firstPage: context.isFirstPage,
    lastPage: context.isLastPage,
  }))

  function handleNextPage() {
    context.nextPage()
  }
  function handlePreviousPage() {
    context.previousPage()
  }
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

        <PaginationContainer>
          <button onClick={handlePreviousPage} disabled={context.firstPage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {context.currentPage}
          <button onClick={handleNextPage} disabled={context.lastPage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </PaginationContainer>
      </PostsContainer>
    </HomeContainer>
  )
}
