import api from '../api'
import { Favorite } from './type'

export class FavoriteService {
    async getFavorites() {
        try {
            const { data } = await api.get('/favorites')
            return data
        } catch (error) {
            throw error
        }
    }

    async addFavorite(favoriteData: Favorite) {
        try {
            const { data } = await api.post(`/favorites`, favoriteData)
            return data
        } catch (error) {
            throw error
        }
    }

    async removeFavorite(favoriteId: string) {
        try {
            const { data } = await api.delete(`/favorites/${favoriteId}`)
            return data
        } catch (error) {
            throw error
        }
    }
}
