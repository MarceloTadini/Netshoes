import styled from "styled-components";

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
export const SvgContainer = styled.div`
    display: flex; /* ou flex, dependendo do contexto */
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -1rem;
    right: 0rem;
    background-color: ${({ theme }) => theme.colors.grey__300};
    padding: 0 0.7rem;
    border-radius: 50%;

    &:hover {
        transition: 0.2s;
        cursor: pointer;
    }

    svg {
        fill: ${({ theme }) => theme.colors.grey__300};
        width: 2rem;
    }
`



export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem 1rem;
`

export const CardTitle = styled.h3`
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