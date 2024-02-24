import api from '../api'
import { Cart } from './type'

export class CartService {
    async getCart() {
        try {
            const { data } = await api.get('/cart')
            return data
        } catch (error) {
            throw error
        }
    }

    async addToCart(cartData: Cart) {
        try {
            const { data } = await api.post('/cart', cartData)
            return data
        } catch (error) {
            throw error
        }
    }

    async removeFromCart(favoriteId: string) {
        try {
            const { data } = await api.delete(`/cart/${favoriteId}`)
            return data
        } catch (error) {
            throw error
        }
    }
    async clearCart() {
        try {
            const { data } = await api.delete('/cart')
            return data
        } catch (error) {
            throw error
        }
    }
}
