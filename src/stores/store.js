import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'

const store = configureStore({
    reducer: {
        userShoppingData: productReducer,
    },
})

export default store
