import { useMutation, useQuery, useQueryClient } from 'react-query'
import { FavoriteService } from '@/services/FavoriteService/favoriteService'
import { Favorite } from '@/services/FavoriteService/type'

const FAVORITES_QUERY_KEY = 'favorites'

export const useFavorite = () => {
    const favoriteService = new FavoriteService()
    const queryClient = useQueryClient()

    const invalidateFavorites = () => queryClient.invalidateQueries(FAVORITES_QUERY_KEY)

    const favorites = useQuery(FAVORITES_QUERY_KEY, favoriteService.getFavorites)

    const { mutate: addFavorite } = useMutation(
        (favoriteData: Favorite) => favoriteService.addFavorite(favoriteData),
        { onSuccess: invalidateFavorites },
    )

    const { mutate: removeFavorite } = useMutation(
        (favoriteId: string) => favoriteService.removeFavorite(favoriteId),
        { onSuccess: invalidateFavorites },
    )

    return { addFavorite, removeFavorite, favorites }
}
