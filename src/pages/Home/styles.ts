import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 0 1.5rem 5rem;
  /* padding: 0 18rem 5rem; */
`

export const PostsContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto 0;
`

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-top: 3rem;
  gap: 2rem;
  overflow-y: scroll;
  max-height: 20rem;
`

export const PaginationContainer = styled.footer`
  display: flex;
  padding: 0.5rem 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['blue-150']};
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme['blue-500']};
      transition: color 0.2s;
    }
  }
`
