import React from 'react'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { formatCurrency } from '@/utils/formatCurrency'
import { useFavorite } from '@/hooks/useFavorite'
import { Favorite } from '@/services/FavoriteService/type'
import { IParamsComponent } from './types'
import { useCart } from '@/hooks/useCart'
import * as S from './styles'

export const CardProduct = ({ product, isFavorite }: IParamsComponent) => {
    const { title, thumbnail, available_quantity, price, id } = product

    const { addFavorite, removeFavorite, favorites } = useFavorite()
    const { addCart } = useCart()

    const favoriteProduct =
        isFavorite || favorites?.find((favorite: Favorite) => favorite.favoriteId === id)

    const toggleFavorite = () => {
        if (favoriteProduct) {
            removeFavorite(product.id)
        } else {
            addFavorite({
                title,
                price,
                thumbnail,
                favoriteId: id,
                available_quantity,
            })
        }
    }

    const formattedPrice = `R$${formatCurrency(price)}`

    return (
        <S.Container>
            <S.FavoriteButton onClick={toggleFavorite}>
                {favoriteProduct ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
            </S.FavoriteButton>
            <S.Thumbnail src={thumbnail} />
            <S.ContainerDetails>
                <S.NameProduct>{title}</S.NameProduct>
            </S.ContainerDetails>
            <S.ContentAmount>
                <S.Amount>{formattedPrice}</S.Amount>
            </S.ContentAmount>
            <S.FooterContent
                onClick={() =>
                    addCart({
                        title,
                        price,
                        thumbnail,
                        productId: id,
                        available_quantity,
                    })
                }
            >
                <RiShoppingBag3Line />
                Adicionar ao carrinho
            </S.FooterContent>
        </S.Container>
    )
}
