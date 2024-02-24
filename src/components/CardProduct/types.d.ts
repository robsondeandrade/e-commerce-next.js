import { IProducts } from '@/services/ProductService/types'

export interface IParamsComponent {
    product: IProducts
    isFavorite?: boolean
}
