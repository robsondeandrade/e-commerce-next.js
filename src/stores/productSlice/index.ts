import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts, IProductState } from './types'

const initialState: IProductState = {
    products: [],
}

const productSlice = createSlice({
    name: 'userShoppingData',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProducts>) => {
            const existingProductIndex = state.products.findIndex((p) => p.id === action.payload.id)

            if (existingProductIndex !== -1) {
                state.products[existingProductIndex].quantity += 1
            } else {
                state.products.push({ ...action.payload, quantity: 1 })
            }
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.id !== action.payload)
        },
        increaseQuantity: (state, action: PayloadAction<string>) => {
            const product = state.products.find((p) => p.id === action.payload && p.quantity >= 1)
            if (product) {
                product.quantity += 1
            }
        },
        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const product = state.products.find((p) => p.id === action.payload)
            if (product && Number(product.quantity) > 1) {
                product.quantity -= 1
            }
        },
    },
})

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } =
    productSlice.actions

export default productSlice.reducer
