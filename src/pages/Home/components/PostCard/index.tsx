import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { NavLink } from 'react-router-dom'

interface PostProps {
  codigo: string
}
function PostCard({ codigo }: PostProps) {
  return (
    <NavLink
      to={`/${codigo}`}
      title="titulo do post"
      style={{ textDecoration: 'none' }}
    >
      <PostCardContainer>
        <header>
          <strong>JavaScript data types and data structures</strong>
          <span>
            {formatDistanceToNow(new Date('2023-09-02T11:48:32.455Z'), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </header>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aut
          est maiores, dolore libero quisquam iure id sit, soluta delectus
          fugit, iste voluptate ut voluptates ipsum saepe. Alias,dolor sapiente?
        </p>
      </PostCardContainer>
    </NavLink>
  )
}

export default PostCard
