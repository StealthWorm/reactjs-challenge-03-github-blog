import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from './contexts/IssuesContext'

export function Router() {
  const issues = useContextSelector(IssuesContext, (context) => context.issues)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
