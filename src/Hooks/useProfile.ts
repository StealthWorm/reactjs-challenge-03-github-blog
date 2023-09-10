import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../contexts/IssuesContext'

export function useProfile() {
  const user = useContextSelector(IssuesContext, (context) => {
    return context.user
  })

  return user
}
