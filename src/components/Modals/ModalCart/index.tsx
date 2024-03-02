import { useDispatch, useSelector } from 'react-redux'
import { CardProductCart } from '../../CardProductCart'
import { calculateTotalAmount } from '@/utils/calculateTotalAmount'
import { formatCurrency } from '@/utils/formatCurrency'
import { IParamsComponent } from './types'
import { useCart } from '@/hooks/useCart'
import { hideToast, showToast } from '@/stores/toast'
import { IProducts } from '@/services/ProductService/types'
import * as S from './styles'
import { ModalToast } from '../ModalToast'
import { RootStateToast } from '@/stores/toast/types'

export const ModalCart = ({ isOpen, onClose }: IParamsComponent) => {
    const { products, clearCart } = useCart()
    const dispatch = useDispatch()
    const toast = useSelector((state: RootStateToast) => state.toastData.toastInfo)

    if (!isOpen) return null
    const total = calculateTotalAmount(products)

    const handleCompletePurchase = () => {
        onClose()
        dispatch(
            showToast({
                message:
                    'Sucesso! Sua compra foi realizada com êxito. 🎉 Prepare-se para momentos incríveis!',
                color: 'success',
                isVisible: true,
            }),
        )
        clearCart()
    }

    return (
        <S.ModalOverlay
            data-testid='modal-overlay'
            onClick={() => onClose()}
        >
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
                    {products?.length ? (
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

                {products?.length !== 0 && (
                    <S.FooterContent>
                        <S.ContentValue>
                            <S.ValueCurrency>Total:</S.ValueCurrency>
                            <S.ValueCurrency>R${formatCurrency(total)}</S.ValueCurrency>
                        </S.ContentValue>
                        <S.ContentBotton onClick={handleCompletePurchase}>
                            <S.FinishPurchase>Finalizar Compra</S.FinishPurchase>
                        </S.ContentBotton>
                    </S.FooterContent>
                )}
                <ModalToast
                    color={toast.color}
                    message={toast.message}
                    isVisible={toast.isVisible}
                    setIsVisible={() => dispatch(hideToast())}
                />
            </S.ModalContent>
        </S.ModalOverlay>
    )
}
