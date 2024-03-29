import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi'

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const LoginForm = styled.form`
    padding: 20px 50px 50px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    gap: 0.5em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
        width: 100%;
        padding: 20px 20px 60px;
    }
`

export const CartIcon = styled(FiShoppingCart)`
    font-size: 50.01px;
    margin: 0 15px;
    color: ${({ theme }) => theme.colors.primary};
`

export const TextButton = styled.button`
    width: 100%;
    font-size: 12px;
    text-align: end;
    margin-bottom: 20px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    cursor: pointer;
    margin: auto;

    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.gray[400]};
        cursor: not-allowed;
        filter: none;
    }
`
