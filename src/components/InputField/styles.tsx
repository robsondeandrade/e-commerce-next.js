import styled from 'styled-components'

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    & label {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        margin-bottom: 2px;
    }
`

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    margin-bottom: 2px;
`

export const Input = styled.input`
    width: 340px;
    display: block;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        outline: none;
    }
    @media (max-width: 480px) {
        width: 92%;
    }
`
