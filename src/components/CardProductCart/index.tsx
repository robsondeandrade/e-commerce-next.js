import { useCallback, useMemo } from 'react'
import { formatCurrency } from '@/utils/formatCurrency'
import { IParamsComponent } from './types'
import { useCart } from '@/hooks/useCart'
import * as S from './styles'

export const CardProductCart = ({ product }: IParamsComponent) => {
    const { addCart, removeFromCart } = useCart()

    const { id, title, thumbnail, quantity, available_quantity, price } = product

    const isDecreaseDisabled = quantity === 1
    const isIncreaseDisabled = quantity >= available_quantity

    const total = useMemo(() => formatCurrency(price * quantity), [price, quantity])

    const handleRemoveProduct = useCallback(() => {
        removeFromCart(id)
    }, [id])

    const handleIncreaseQuantity = useCallback(() => {
        if (quantity < available_quantity) {
            addCart({ ...product, quantity: quantity + 1 })
        }
    }, [id, quantity, available_quantity])

    const handleDecreaseQuantity = useCallback(() => {
        if (quantity > 1) {
            addCart({ ...product, quantity: quantity - 1 })
        }
    }, [id, quantity])

    return (
        <S.Container>
            <S.CloseButton onClick={handleRemoveProduct}>
                <S.CloseIcon>x</S.CloseIcon>
            </S.CloseButton>
            <S.Content>
                <S.Image
                    src={thumbnail}
                    alt={title}
                />
                <S.BoxInfo>
                    <S.Typography>{title}</S.Typography>
                    <S.BoxValue>
                        <S.ContainerQuantity>
                            <S.SpanQuantidy>Qtd:</S.SpanQuantidy>
                            <S.ContentQuantity>
                                <S.TypographyValue
                                    $isDisabled={isDecreaseDisabled}
                                    onClick={handleDecreaseQuantity}
                                >
                                    -
                                </S.TypographyValue>
                                <S.TypographyValue>{quantity}</S.TypographyValue>
                                <S.TypographyValue
                                    $isDisabled={isIncreaseDisabled}
                                    onClick={handleIncreaseQuantity}
                                >
                                    +
                                </S.TypographyValue>
                            </S.ContentQuantity>
                        </S.ContainerQuantity>
                        <S.Amount>R${total}</S.Amount>
                    </S.BoxValue>
                </S.BoxInfo>
            </S.Content>
        </S.Container>
    )
}
