import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg{
        width: 1.6rem;
        fill: ${({ theme }) => theme.colors.yellow}
    }
`

export const RateNumber = styled.p`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.grey__500};
    font-family: ${({ theme }) => theme.fonts.text};
`