import { useEffect } from 'react'
import { ModalToastProps } from './type'
import * as S from './styles'

export const ModalToast: React.FC<ModalToastProps> = ({
    message,
    isVisible,
    setIsVisible,
    duration = 5000,
    color = 'success',
}) => {
    useEffect(() => {
        if (!isVisible || !message) return

        const timer = setTimeout(() => setIsVisible(false), duration)
        return () => clearTimeout(timer)
    }, [isVisible, message, duration, setIsVisible])

    return (
        <S.ToastContainer
            isVisible={isVisible}
            color={color}
            duration={duration / 1000}
        >
            {message}
        </S.ToastContainer>
    )
}
