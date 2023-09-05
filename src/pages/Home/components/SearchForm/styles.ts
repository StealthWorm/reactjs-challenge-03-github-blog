import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['blue-600']};
    background: ${(props) => props.theme['blue-800']};
    color: ${(props) => props.theme['blue-150']};
    padding: 1rem;
    text-decoration: none;

    &::placeholder {
      color: ${(props) => props.theme['blue-250']};
    }
  }
`
