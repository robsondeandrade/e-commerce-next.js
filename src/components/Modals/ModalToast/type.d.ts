export interface ModalToastProps {
    message: string
    color?: 'success' | 'error'
    duration?: number
    isVisible: boolean
    setIsVisible: (isVisible: boolean) => void
}

export interface ToastContainerProps {
    isVisible: boolean
    color: 'success' | 'error'
    duration: number
}
