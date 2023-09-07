import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 864px;

  margin: 0 auto;

  align-items: center;
  margin-top: -5rem;
`

export const HeaderContainer = styled.header`
  display: inline-block;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['blue-700']};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: ${(props) => props.theme['blue-500']};
    font-size: 0.75rem;

    a {
      display: flex;
      text-align: center;
      align-items: center;
      gap: 0.5rem;

      text-transform: uppercase;
      font-size: 0.75rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        transition: text-decoration 2s;
        text-underline-offset: 4px;
      }

      &:visited {
        text-decoration: none;
        color: ${(props) => props.theme['blue-500']};
      }
    }
  }

  footer {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;

    div {
      gap: 0.5rem;
      display: flex;
      align-items: center;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1.25rem;
    color: ${(props) => props.theme['blue-50']};
  }
`

export const MainContainer = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  max-height: 20rem;
  overflow-y: auto;
  flex-direction: column;
  padding: 2.5rem 2rem;

  code {
    margin-top: 1.5rem;
  }
`
