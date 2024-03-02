import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1438px;
    flex-wrap: wrap;
    margin: 0 auto;

    justify-content: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    @media (max-width: 851px) {
        align-items: center;
    }
`

export const Title = styled.h1`
    font-size: 24px;
    margin-top: 150px;

    @media (min-width: 851px) {
        margin-left: 32px;
    }
`

export const NoResults = styled.div`
    margin: 50px 0;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    text-align: center;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray[600]};
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: 1438px;
    flex-wrap: wrap;
    justify-content: center;
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
