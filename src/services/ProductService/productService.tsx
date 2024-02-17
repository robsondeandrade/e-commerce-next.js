import api from '../api'
import { IGetProductsParams } from './types'

export async function getProducts({
    search = 'Ofertas',
    offset = 0,
    limit = 10,
    sort = 'relevance',
}: IGetProductsParams) {
    try {
        const response = await api.get(`products`, {
            params: { search, offset, limit, sort },
        })
        return response.data
    } catch (error) {
        throw new Error('Erro ao buscar produtos. Por favor, tente novamente mais tarde.')
    }
}
