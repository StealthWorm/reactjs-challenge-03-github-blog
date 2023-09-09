import { Content, PostCardContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { Issue } from '../../../../contexts/IssuesContext'
import { formatDateToRelativeTime } from '../../../../utils/formatter'

interface PostProps {
  data: Issue
}

function PostCard({ data }: PostProps) {
  return (
    <NavLink
      to={`/${data.id}`}
      title={data.title}
      style={{ textDecoration: 'none' }}
    >
      <PostCardContainer>
        <header>
          <strong>{data.title}</strong>
          <span>{formatDateToRelativeTime(data.createdAt)}</span>
        </header>

        <Content>
          <p>{data.body}</p>
        </Content>
      </PostCardContainer>
    </NavLink>
  )
}

export default PostCard
