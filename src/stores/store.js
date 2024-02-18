import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        userData: userReducer,
        userShoppingData: productReducer,
    },
})

export default store
