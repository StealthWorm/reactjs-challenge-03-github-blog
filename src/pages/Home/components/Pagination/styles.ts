import styled from 'styled-components'

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
