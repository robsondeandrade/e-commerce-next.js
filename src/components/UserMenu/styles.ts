import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
`

export const UserCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin: auto;
    cursor: pointer;
    position: relative;
`

export const DropdownMenu = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    min-width: 160px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    border-radius: 8px;
`

export const MenuItem = styled.a`
    padding: 12px 16px;
    display: block;
    font-size: 16px;
    font-weight: 500;

    color: black;
    text-decoration: none;
    &:hover {
        border-radius: 8px;
        background-color: ${({ theme }) => theme.colors.gray[100]};
    }
`

export const LoginButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.05);
    }
`
