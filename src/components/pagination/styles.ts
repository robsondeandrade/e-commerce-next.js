import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.primary};
    margin: 2rem 0;
    @media (max-width: 540px) {
        gap: 0.5rem;
    }
`

export const PageButton = styled.button<{
    disabled?: boolean
    $active?: boolean
}>`
    background-color: ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
    color: ${({ $active, theme }) => ($active ? theme.colors.secondary : theme.colors.gray[700])};
    padding: 0.5rem 1rem;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    outline: none;
    border: ${({ $active, theme }) =>
        $active ? `2px solid ${theme.colors.secondary}` : '2px solid transparent'};
    box-shadow: ${({ $active }) => ($active ? '0px 2px 5px rgba(0, 0, 0, 0.2)' : 'none')};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ disabled, $active, theme }) =>
            !disabled && !$active ? theme.colors.lightPrimary : ''};
        border-color: ${({ disabled, theme }) => (!disabled ? theme.colors.primary : '')};
    }

    @media (max-width: 540px) {
        padding: 0.2rem 0.2rem;
    }
`

export const PageSelect = styled.select`
    margin-left: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition: border-color 0.3s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.secondary};
    }
    @media (max-width: 540px) {
        margin-left: 0;
        padding: 0.2rem;
    }
`
