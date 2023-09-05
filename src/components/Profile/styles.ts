import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 864px;
  border-radius: 10px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  align-items: center;
  gap: 2rem;
  margin-top: -5rem;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['blue-700']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */

  header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.3;
      color: ${(props) => props.theme['blue-50']};
    }

    a {
      display: flex;
      text-align: center;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['blue-500']};
      text-transform: uppercase;
      font-size: 0.75rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        transition: text-decoration 2s;
        text-underline-offset: 4px;
      }
    }
  }

  main {
    font-size: 1rem;
    color: ${(props) => props.theme['blue-150']};
    margin: 0.5rem 0;
    width: 100%;
    max-height: 4rem;
    overflow-y: auto;

    @media (max-width: 768px) {
      width: fit-content;
      font-size: 87.5%;
    }
  }

  footer {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;

    div {
      gap: 0.5rem;
      display: flex;
      align-items: center;
    }
  }
`
