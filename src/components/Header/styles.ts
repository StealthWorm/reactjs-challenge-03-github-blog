import styled from 'styled-components'
import backgroundImg from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 4rem 0 7.5rem;
  background-image: url(${backgroundImg});
  background-size: cover;
  max-height: 18.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  /* padding: 0 1.5rem; */
  display: flex;
  align-items: center;
  justify-content: center;
`
