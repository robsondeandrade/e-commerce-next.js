export interface ToastInfo {
    message: string
    color: 'success' | 'error' | 'warning' | 'info'
    isVisible: boolean
}

export interface ToastState {
    toastInfo: ToastInfo
}

export interface RootStateToast {
    toastData: toastInfo
}
