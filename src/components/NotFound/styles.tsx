import styled from 'styled-components'

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`

export const NotFoundTitle = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`

export const NotFoundText = styled.p`
    font-size: 1.5em;
`

export const HomeButton = styled.div`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    margin-top: 20px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
        text-decoration: none;
    }
`
