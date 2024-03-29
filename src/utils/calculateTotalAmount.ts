import { IProducts } from '@/services/ProductService/types'

export const calculateTotalAmount = (products: IProducts[]) => {
    if (!Array.isArray(products)) return 0;

    let totalAmount = 0

    for (const product of products) {
        const price = product.price
        const quantity = product.quantity

        const subtotal = price * quantity

        totalAmount += subtotal
    }

    return totalAmount
}
