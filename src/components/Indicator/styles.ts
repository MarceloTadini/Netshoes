import styled from 'styled-components'

export const Container = styled.div`
  
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 2rem;
    font-weight: bold;
    padding-right: 0.6rem;

    &:not(.slash) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 0;
    margin: 1rem 0;
  }
`

export const BreadCrumbContainer = styled.div`
  padding: 2rem 0 0 0;
  display: flex;
  align-items: center;
  flex-wrap: 1;
  
  .slash {
    margin: 0 0rem;
  }
`