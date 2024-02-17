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

export const Span = styled.span`
    width: 100%;
    font-size: 10px;
    text-align: end;
    margin: -15px 0 20px;
    cursor: pointer;
`

export const TextButton = styled.button`
    width: 100%;
    font-size: 12px;
    text-align: end;
    margin: -15px 0 20px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }
`
