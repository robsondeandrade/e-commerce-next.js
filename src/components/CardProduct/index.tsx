import { RiShoppingBag3Line } from "react-icons/ri";
import { formatCurrency } from "@/utils/formatCurrency";
import { IParamsComponent } from "./types";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { IProducts } from "@/stores/productSlice/types";
import { addProduct } from "@/stores/productSlice";

export const CardProduct = ({ product }: IParamsComponent) => {
  const dispatch = useDispatch();

  const handleAddProduct = (product: IProducts) => {
    dispatch(addProduct(product));
  };

  return (
    <S.Container>
      <S.Photo src={product?.photo} />
      <S.ContainerDetails>
        <S.NameProduct>{product?.name}</S.NameProduct>
        <S.ContentAmount>
          <S.Amount>R${formatCurrency(product?.price)}</S.Amount>
        </S.ContentAmount>
      </S.ContainerDetails>
      <S.ContentDescription>
        <S.Description>{product?.description}</S.Description>
      </S.ContentDescription>

      <S.FooterContent onClick={() => handleAddProduct(product)}>
        <RiShoppingBag3Line />
        Comprar
      </S.FooterContent>
    </S.Container>
  );
};
