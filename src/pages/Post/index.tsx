import { NavLink, useParams } from 'react-router-dom'
import { HeaderContainer, MainContainer, PostContainer } from './styles'
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

function Post() {
  // const { id } = useParams()

  const codeSnippet = `
    let foo = 42; // foo is now a number 
    foo = ‘bar’; // foo is now a
    string foo = true; // foo is now a boolean
  `

  const customDarkTheme = {
    ...synthwave84,
    backgroundColor: '#112131',
    borderRadius: '4px',
  }

  return (
    <PostContainer>
      <HeaderContainer>
        <header>
          <NavLink to={`/`} title="Voltar" style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: '#3294F8', height: '18px' }}
            />
            <strong>voltar</strong>
          </NavLink>
          <a href="lnk para a issue" target="_blank" rel="noreferrer">
            <strong>github</strong>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <h2>JavaScript data types and data structures</h2>
        <footer>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>StealthWorm</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCalendarDay}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>Bsoft</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faComment}
              style={{ color: '#3A536B', height: '18px' }}
            />
            <span>32</span> comentários
          </div>
        </footer>
      </HeaderContainer>
      <MainContainer>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
        <code>
          <SyntaxHighlighter
            language="javascript"
            style={synthwave84}
            customStyle={customDarkTheme}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </code>
      </MainContainer>
    </PostContainer>
  )
}

export default Post
