import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ToastInfo, ToastState } from './types'

const initialState: ToastState = {
    toastInfo: {
        message: '',
        color: 'success',
        isVisible: false,
    },
}

const toastSlice = createSlice({
    name: 'toastData',
    initialState,
    reducers: {
        showToast: (state, action: PayloadAction<ToastInfo>) => {
            state.toastInfo = { ...action.payload, isVisible: true }
        },

        hideToast: (state) => {
            state.toastInfo.isVisible = false
        },
    },
})

export const { showToast, hideToast } = toastSlice.actions

export default toastSlice.reducer
