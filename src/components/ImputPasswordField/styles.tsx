import styled from 'styled-components'
import { FiEye, FiEyeOff } from 'react-icons/fi'

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

export const IconFiEye = styled(FiEye)`
    color: ${({ theme }) => theme.colors.primary};
`

export const IconFiEyeOff = styled(FiEyeOff)`
    color: ${({ theme }) => theme.colors.primary};
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 5px;
    position: relative;
    border: 1px solid #ccc;
`

export const StyledInput = styled.input`
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 10px;
    width: 315px;
    @media (max-width: 480px) {
        width: 92%;
    }
`

export const IconContainer = styled.div`
    cursor: pointer;
    margin-left: 5px;
`

export const Error = styled.span`
    color: ${({ theme }) => theme.colors.error};
    font-size: 10px;
    margin: -10px 0 10px;
`
