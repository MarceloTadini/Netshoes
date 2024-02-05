import styled from 'styled-components'
export const Loader = styled.div`
  border: 0.8rem solid #f3f3f3;
  border-top: 0.8rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 8rem;
  margin: 20rem auto 0;
  height: 8rem;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`