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
      <S.Photo src={product?.thumbnail} />
      <S.ContainerDetails>
        <S.NameProduct>{product?.title}</S.NameProduct>
      </S.ContainerDetails>
      <S.ContentAmount>
        <S.Amount>R${formatCurrency(product?.price)}</S.Amount>
      </S.ContentAmount>

      <S.FooterContent onClick={() => handleAddProduct(product)}>
        <RiShoppingBag3Line />
        Adicionar ao carrinho
      </S.FooterContent>
    </S.Container>
  );
};
