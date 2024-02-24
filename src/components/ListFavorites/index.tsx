'use client'
import { CardProduct } from '@/components/CardProduct'
import { LoadingOverlay } from '../Loading/LoadingOverlay'
import { IProducts } from '@/stores/productSlice/types'
import { useFavorite } from '@/hooks/useFavorite'
import Link from 'next/link'
import * as S from './styles'

export const ListFavorites = () => {
    const { favorites } = useFavorite()
    const isEmpty = !favorites.isLoading && favorites.data?.length === 0

    const renderFavoritesContent = () => {
        if (isEmpty) {
            return (
                <S.NoResults>
                    <span>Você ainda não adicionou nenhum produto aos favoritos.</span>
                    <Link
                        href='/'
                        passHref
                    >
                        <S.HomeButton>Voltar para a Home</S.HomeButton>
                    </Link>
                </S.NoResults>
            )
        }

        return (
            <S.Content>
                {favorites.data?.map((product: IProducts) => (
                    <CardProduct
                        key={product.id}
                        product={product}
                        isFavorite
                    />
                ))}
            </S.Content>
        )
    }

    return (
        <S.Container>
            {favorites.isLoading && <LoadingOverlay />}
            <S.Title>Meus Favoritos</S.Title>
            {renderFavoritesContent()}
        </S.Container>
    )
}
