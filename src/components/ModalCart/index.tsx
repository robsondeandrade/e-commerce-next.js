import { useSelector } from 'react-redux'
import { CardProductCart } from '../CardProductCart'
import { calculateTotalAmount } from '@/utils/calculateTotalAmount'
import { formatCurrency } from '@/utils/formatCurrency'
import { IProducts, RootState } from '@/stores/productSlice/types'
import { IParamsComponent } from './types'
import * as S from './styles'

export const ModalCart = ({ isOpen, onClose }: IParamsComponent) => {
    const products = useSelector((state: RootState) => state.userShoppingData.products)

    if (!isOpen) return null
    const total = calculateTotalAmount(products)

    return (
        <S.ModalOverlay onClick={() => onClose()}>
            <S.ModalContent
                data-testid='cart-modal'
                onClick={(e) => e.stopPropagation()}
            >
                <S.HeaderContent>
                    <S.TitleModal>Carrinho de compras</S.TitleModal>

                    <S.CloseButton
                        data-testid='close-button'
                        onClick={onClose}
                    >
                        <S.CloseIcon>x</S.CloseIcon>
                    </S.CloseButton>
                </S.HeaderContent>
                <S.BodyContent>
                    {products.length ? (
                        <>
                            {products?.map((product: IProducts) => (
                                <CardProductCart
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </>
                    ) : (
                        <S.Description>Ainda não tem produtos adicionado no carrinho</S.Description>
                    )}
                </S.BodyContent>

                {products.length !== 0 && (
                    <S.FooterContent>
                        <S.ContentValue>
                            <S.ValueCurrency>Total:</S.ValueCurrency>
                            <S.ValueCurrency>R${formatCurrency(total)}</S.ValueCurrency>
                        </S.ContentValue>
                        <S.ContentBotton>
                            <S.FinishPurchase>Finalizar Compra</S.FinishPurchase>
                        </S.ContentBotton>
                    </S.FooterContent>
                )}
            </S.ModalContent>
        </S.ModalOverlay>
    )
}
