'use client'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { FavoriteService } from '@/services/FavoriteService/favoriteService'
import { Favorite } from '@/services/FavoriteService/type'
import { parseCookies } from 'nookies'

export const useFavorite = () => {
    const cookies = parseCookies()
    const token = cookies['accessToken']
    const favoriteService = new FavoriteService()
    const queryClient = useQueryClient()

    const invalidateFavorites = () => queryClient.invalidateQueries('favorites')

    const { data: favorites, isLoading } = useQuery('favorites', favoriteService.getFavorites, {
        enabled: !!token,
    })

    const { mutate: addFavorite } = useMutation(
        (favoriteData: Favorite) => favoriteService.addFavorite(favoriteData),
        { onSuccess: invalidateFavorites },
    )

    const { mutate: removeFavorite } = useMutation(
        (favoriteId: string) => favoriteService.removeFavorite(favoriteId),
        { onSuccess: invalidateFavorites },
    )

    return { addFavorite, removeFavorite, favorites, isLoading }
}
