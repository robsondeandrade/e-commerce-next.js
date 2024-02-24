'use client'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { parseCookies } from 'nookies'
import { CartService } from '@/services/CartService/cartService'
import { Cart } from '@/services/CartService/type'

export const useCart = () => {
    const cookies = parseCookies()
    const token = cookies['accessToken']
    const cartService = new CartService()
    const queryClient = useQueryClient()

    const invalidateAndRefetch = () => {
        queryClient.invalidateQueries('cart')
    }

    const { data: products, isLoading } = useQuery('cart', cartService.getCart, {
        enabled: !!token,
    })

    const { mutate: addCart } = useMutation((cartData: Cart) => cartService.addToCart(cartData), {
        onSuccess: invalidateAndRefetch,
    })

    const { mutate: removeFromCart } = useMutation(
        (productId: string) => cartService.removeFromCart(productId),
        {
            onSuccess: invalidateAndRefetch,
        },
    )

    const { mutate: clearCart } = useMutation(() => cartService.clearCart(), {
        onSuccess: invalidateAndRefetch,
    })

    return { addCart, removeFromCart, products, clearCart, isLoading }
}
