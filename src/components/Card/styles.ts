import styled, { css } from "styled-components";

interface SvgContainerProps {
  $isInWishlist?: boolean;
  $isSelected?: boolean; // Adiciona a propriedade isSelected
}

export const SvgContainer = styled.div<SvgContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0rem;
  right: 0.7rem;
  
  cursor: pointer;

  svg {
    fill: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.red : theme.colors.grey__300)};
    width: 4rem;
    background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.red : theme.colors.grey__300)};
    border-radius: 50%;
    padding: 0 1rem;
  }

  ${({ $isInWishlist }) =>
    $isInWishlist &&
    css`
      svg {
        fill: ${({ theme }) => theme.colors.grey__300}; 
        background-color: transparent;
        transition: .4s;
      
        &:hover {
          fill: ${({ theme }) => theme.colors.grey__500}; 
        }
      }
      
    `}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 22rem;

    border-radius: 8px; /* Borda arredondada */
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.1);

    &:hover{
        transition: .2s;
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    img{
        max-width: 16rem;
        max-height: 16rem;
    }

`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    position: relative;
    margin-top: 1rem;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem 1rem;
`

export const CardTitleBox = styled.div`
    min-height: 8rem;
`

export const CardTitle = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: 500;
`
export const OldPrice = styled.p`
    color: ${({ theme }) => theme.colors.grey__300};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1.6rem;
    text-decoration: line-through;
`

export const NewPrice = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 2.2rem;
    font-weight: bold;

`
