export interface IGetProductsParams {
    search?: string
    offset?: number
    limit?: number
    sort?: string
}
export interface IProducts {
    id: string
    title: string
    thumbnail: string
    productId: string
    available_quantity: number
    price: number
    quantity: number
}
