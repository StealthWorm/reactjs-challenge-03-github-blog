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
  max-height: 10rem;

  div {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 2rem;
    background: ${(props) => props.theme['blue-650']};
    border: 2px solid transparent;
    gap: 1.25rem;
    cursor: pointer;

    &:hover {
      transition: border-color 0.5s;
      border: 2px solid ${(props) => props.theme['blue-250']};
    }

    header {
      display: flex;
      justify-items: space-between;
      align-items: flex-start;
      gap: 1rem;
      width: 100%;

      strong {
        width: 80%;
        font-size: 1.25rem;
        font-weight: bold;
        max-width: 416px;
        color: ${(props) => props.theme['blue-50']};
      }

      span {
        width: 20%;
        font-size: 0.875rem;
        color: ${(props) => props.theme['blue-200']};
        text-align: right;
      }
    }

    p {
      color: ${(props) => props.theme['blue-150']};
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`
