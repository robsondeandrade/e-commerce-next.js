import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    margin: 5px;
`

export const SearchInput = styled.input`
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-right: none;
    border-radius: 20px 0 0 20px;
    font-size: 16px;
    outline: none;
    width: 250px;
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
    }
`

export const SearchButton = styled.button`
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
        border-color: ${({ theme }) => theme.colors.primaryDark};
    }
`
