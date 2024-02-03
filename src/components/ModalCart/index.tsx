import { CardProductCart } from "../CardProductCart";
import { calculateTotalAmount } from "@/utils/calculateTotalAmount";
import { IParamsComponent } from "./types";
import { formatCurrency } from "@/utils/formatCurrency";
import { useSelector } from "react-redux";
import { IProducts } from "@/stores/productSlice/types";
import * as S from "./styles";

export const CartModal = ({ isOpen, onClose }: IParamsComponent) => {
  const products = useSelector((state: any) => state.product.products);

  if (!isOpen) return null;
  const total = calculateTotalAmount(products);

  return (
    <S.ModalOverlay>
      <S.ModalContent data-testid="cart-modal">
        <S.HeaderContent>
          <S.TitleModal>
            Carrinho <br /> de compras
          </S.TitleModal>

          <S.CloseButton data-testid="close-button" onClick={onClose}>
            <S.CloseIcon>x</S.CloseIcon>
          </S.CloseButton>
        </S.HeaderContent>
        <S.BodyContent>
          {products.length ? (
            <>
              {products?.map((product: IProducts) => (
                <CardProductCart key={product.id} product={product} />
              ))}
            </>
          ) : (
            <S.Description>
              Ainda não tem produtos adicionado no carrinho
            </S.Description>
          )}
        </S.BodyContent>

        <S.FooterContent>
          <S.ContentValue>
            <S.ValueCurrency>Total:</S.ValueCurrency>
            <S.ValueCurrency>R${formatCurrency(total)}</S.ValueCurrency>
          </S.ContentValue>
          <S.ContentBotton>
            <S.FinishPurchase>Finalizar Compra</S.FinishPurchase>
          </S.ContentBotton>
        </S.FooterContent>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
