import { SearchForm } from './components/SearchForm'
import { Profile } from '../../components/Profile'
import { HomeContainer, PostsContainer, PostsGrid } from './styles'
// import { formatDistanceToNow } from 'date-fns'
// import ptBR from 'date-fns/locale/pt-BR'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <PostsContainer>
        <SearchForm />

        <PostsGrid>
          <div>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              aut est maiores, dolore libero quisquam iure id sit, soluta
              delectus fugit, iste voluptate ut voluptates ipsum saepe.
              Alias,dolor sapiente?
            </p>
          </div>
          <div>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              aut est maiores, dolore libero quisquam iure id sit, soluta
              delectus fugit, iste voluptate ut voluptates ipsum saepe.
              Alias,dolor sapiente?
            </p>
          </div>
          <div>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              aut est maiores, dolore libero quisquam iure id sit, soluta
              delectus fugit, iste voluptate ut voluptates ipsum saepe.
              Alias,dolor sapiente? asdasdasdasdadas
            </p>
          </div>
          <div>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              aut est maiores, dolore libero quisquam iure id sit, soluta
              delectus fugit, iste voluptate ut voluptates ipsum saepe.
              Alias,dolor sapiente?
            </p>
          </div>
          <div>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              aut est maiores, dolore libero quisquam iure id sit, soluta
              delectus fugit, iste voluptate ut voluptates ipsum saepe.
              Alias,dolor sapiente?
            </p>
          </div>
          <div>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              aut est maiores, dolore libero quisquam iure id sit, soluta
              delectus fugit, iste voluptate ut voluptates ipsum saepe.
              Alias,dolor sapiente?
            </p>
          </div>
          <div>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              aut est maiores, dolore libero quisquam iure id sit, soluta
              delectus fugit, iste voluptate ut voluptates ipsum saepe.
              Alias,dolor sapiente?
            </p>
          </div>
        </PostsGrid>
      </PostsContainer>
      {/* HOME
      {formatDistanceToNow(new Date('2023-09-02T11:48:32.455Z'), {
        addSuffix: true,
        locale: ptBR,
      })} */}
    </HomeContainer>
  )
}
