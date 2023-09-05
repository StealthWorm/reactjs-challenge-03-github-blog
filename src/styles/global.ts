import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: .25rem;               
    }
    &::-webkit-scrollbar-track {
      background: transparent;       
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['blue-700']};    
      border-radius: 20px;
    }
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }
  &:is(:hover, :active) {
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['blue-500']};
    }
  }
  body {
    background-color: ${(props) => props.theme['blue-750']};
    color: ${(props) => props.theme['blue-150']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem/1.6  Nunito, sans-serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 87.5%;
  }
`
