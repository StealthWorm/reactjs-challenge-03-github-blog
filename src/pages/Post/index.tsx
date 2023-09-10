import { NavLink, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useContextSelector } from 'use-context-selector'

import { HeaderContainer, MainContainer, PostContainer } from './styles'
import { IssuesContext } from '../../contexts/IssuesContext'
import { formatDateToRelativeTime } from '../../utils/formatter'

export function Post() {
  const { id } = useParams()
  const issues = useContextSelector(IssuesContext, (context) => context.issues)
  const currentIssue = issues.find((issue) => issue.id === Number(id))

  if (!id || isNaN(parseInt(id, 10)) || !currentIssue) {
    return <div>Invalid or missing issue ID</div>
  }

  const contentArray = extractContentArray(currentIssue.body)

  function extractContentArray(body: string) {
    const contentArray = []
    if (body) {
      const regex = /```([\s\S]*?)```/g
      let lastIndex = 0
      let match

      while ((match = regex.exec(body))) {
        // Extract content before the code block
        const beforeCodeBlock = body.slice(lastIndex, match.index)

        if (beforeCodeBlock.trim() !== '') {
          contentArray.push({ content: beforeCodeBlock, type: 'text' })
        }
        // Extract and add the code block
        const codeBlock = match[1].trim()

        contentArray.push({ content: codeBlock, type: 'code' })

        lastIndex = match.index + match[0].length
      }
      // Add any remaining text after the last code block (if any)
      const remainingText = body.slice(lastIndex)

      if (remainingText.trim() !== '') {
        contentArray.push({ content: remainingText, type: 'text' })
      }
    }

    return contentArray
  }

  return (
    <PostContainer>
      {currentIssue && (
        <>
          <HeaderContainer>
            <header>
              <NavLink to={`/`} title="Voltar">
                <FontAwesomeIcon icon={faChevronLeft} />
                <strong>voltar</strong>
              </NavLink>
              <a href={currentIssue?.url} target="_blank" rel="noreferrer">
                <strong>github</strong>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </header>
            <h2>{currentIssue?.title}</h2>
            <footer>
              <div>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: '#3A536B', height: '18px' }}
                />
                <span>{currentIssue?.user.login}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  style={{ color: '#3A536B', height: '18px' }}
                />
                <span>{formatDateToRelativeTime(currentIssue!.createdAt)}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ color: '#3A536B', height: '18px' }}
                />
                <span>{currentIssue?.comments}</span> comentários
              </div>
            </footer>
          </HeaderContainer>
          <MainContainer>
            {contentArray.map((block, index) => (
              <div key={index}>
                {block.type === 'code' ? (
                  <SyntaxHighlighter language="javascript" style={synthwave84}>
                    {block.content}
                  </SyntaxHighlighter>
                ) : (
                  <p>{block.content}</p>
                )}
              </div>
            ))}
          </MainContainer>
        </>
      )}
    </PostContainer>
  )
}
