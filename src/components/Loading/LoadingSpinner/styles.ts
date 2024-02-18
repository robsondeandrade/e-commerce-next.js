import styled, { keyframes } from 'styled-components'
import { LoadingSpinnerProps } from './type'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Spinner = styled.div<LoadingSpinnerProps>`
    border: ${({ size = 20 }) => size / 10}px solid rgba(255, 255, 255, 0.2);
    border-top: ${({ size = 20 }) => size / 10}px solid ${({ color = '#fff' }) => color};
    border-radius: 50%;
    width: ${({ size = 20 }) => size}px;
    height: ${({ size = 20 }) => size}px;
    animation: ${spin} 1s linear infinite;
`
