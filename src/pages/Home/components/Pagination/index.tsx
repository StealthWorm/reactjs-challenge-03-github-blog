import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../../../contexts/IssuesContext'

import { PaginationContainer } from './styles'

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Pagination() {
  const context = useContextSelector(IssuesContext, (context) => ({
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
    <PaginationContainer>
      <button onClick={handlePreviousPage} disabled={context.firstPage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {context.currentPage}
      <button onClick={handleNextPage} disabled={context.lastPage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </PaginationContainer>
  )
}
