import styled, { css } from 'styled-components'
import { ToastContainerProps } from './type'

export const ToastContainer = styled.div<ToastContainerProps>`
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1050;
    padding: 16px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s ease-out, fadeOut 0.5s ease-out ${({ duration }) => `${duration - 0.5}s`};

    ${({ color }) => colorStyles[color]}

    @keyframes fadeIn {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`

const colorStyles = {
    success: css`
        background-color: ${({ theme }) => theme.colors.success};
    `,
    error: css`
        background-color: ${({ theme }) => theme.colors.error};
    `,
}
