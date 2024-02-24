import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import toastReducer from './toast'

const store = configureStore({
    reducer: {
        userData: userReducer,
        toastData: toastReducer,
    },
})

export default store
