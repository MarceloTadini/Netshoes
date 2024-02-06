import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: 136.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 10rem;
  padding: 2rem 0;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3rem;
  }
`
export const Logo = styled.h1`
  font-weight: 900;
  font-size: 2.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.03rem;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0;
    font-style: italic;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.text};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 2.2rem;
      fill: transparent; 
    }

    :hover{
      fill: ${({ theme }) => theme.colors.white};
    }

  }

  

  @media (min-width: 768px) {
    justify-content: space-between;

    p {
      font-size: 1.6rem;
    }
  }
`

export const UserMenuItem = styled.nav`
  position: relative;
  cursor: pointer;
`

export const UserMenu = styled.ul`
  position: absolute;
  width: 13rem;
  top: 100%;
  right: 1.5rem;
  background: #ffffff;
  padding: 10px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: .2s;

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.text};
    margin: 0;
    padding: 0.1rem;
  }

  &:hover{
      font-weight: bold;
    }
`