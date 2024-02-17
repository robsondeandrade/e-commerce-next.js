import { IProducts } from '@/stores/productSlice/types'

export const calculateTotalAmount = (products: IProducts[]) => {
    let totalAmount = 0

    for (const product of products) {
        const price = product.price
        const quantity = product.quantity

        const subtotal = price * quantity

        totalAmount += subtotal
    }

    return totalAmount
}
