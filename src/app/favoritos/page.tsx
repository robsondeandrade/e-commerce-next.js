import { ListFavorites } from '@/components/ListFavorites'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Favoritos | RBS',
}
const favoritePage = async () => {
    return <ListFavorites />
}

export default favoritePage
