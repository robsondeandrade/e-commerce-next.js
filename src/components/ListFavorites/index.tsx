'use client'
import Link from 'next/link'
import { useFavorite } from '@/hooks/useFavorite'
import { CardProduct } from '@/components/CardProduct'
import { IProducts } from '@/services/ProductService/types'
import * as S from './styles'

export const ListFavorites = () => {
    const { favorites } = useFavorite()

    return (
        <S.Container>
            <S.Title>Meus Favoritos</S.Title>
            <S.NoResults>
                {favorites?.length === 0 ? (
                    <span>Você ainda não adicionou nenhum produto adicionado aos favoritos.</span>
                ) : (
                    <S.Content>
                        {favorites?.map((product: IProducts) => (
                            <CardProduct
                                key={product.id}
                                product={product}
                                isFavorite={true}
                            />
                        ))}
                    </S.Content>
                )}
                <Link
                    href='/'
                    passHref
                >
                    <S.HomeButton>Voltar para a Home</S.HomeButton>
                </Link>
            </S.NoResults>
        </S.Container>
    )
}
