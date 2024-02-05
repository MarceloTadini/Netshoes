import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 136.6rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const MainWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 0 5rem 0;

  @media (max-width: 1359px) {
    max-width: 80rem;
  }

  @media (max-width: 859px) {
    max-width: 50rem;
  }
`
