import styled, { css } from 'styled-components'

interface PageProps {
  isWishList?: boolean; 
}

export const Page = styled.p<PageProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 2rem;
  margin: 2rem 0;

  ${({ isWishList }) =>
    !isWishList &&
    css`
      font-weight: bold;
    `}
`

export const SubPage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 2rem;
  margin: 2rem 0;
  font-weight: bold;

  &:hover{
    text-decoration: underline;
  }
`
