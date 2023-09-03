import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: calc(100vh - 10rem);

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 87.5%;
    /* padding: 2rem; */
  }
`
