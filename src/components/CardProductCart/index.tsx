import React from "react";
import * as S from "./styles";
import { IParamsComponent } from "./types";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "@/stores/productSlice";

export const CardProductCart = ({ product }: IParamsComponent) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeProduct(productId));
  };

  const handleIncreaseQuantity = (productId: string) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId: string) => {
    dispatch(decreaseQuantity(productId));
  };
  return (
    <S.Container>
      <S.CloseButton onClick={() => handleRemoveProduct(product.id)}>
        <S.CloseIcon>x</S.CloseIcon>
      </S.CloseButton>
      <S.GridContainer>
        <S.Photo src={product.photo} />
        <S.Typography>{product.name}</S.Typography>
        <S.ContainerQuantity>
          <S.SpanQuantidy>Qtd:</S.SpanQuantidy>
          <S.ContentQuantity>
            <S.TypographyValue
              onClick={() => handleDecreaseQuantity(product.id)}
            >
              -
            </S.TypographyValue>
            <S.TypographyValue>{product.quantity}</S.TypographyValue>
            <S.TypographyValue
              onClick={() => handleIncreaseQuantity(product.id)}
            >
              +
            </S.TypographyValue>
          </S.ContentQuantity>
        </S.ContainerQuantity>
        <S.Amount>R${product.price * product.quantity}</S.Amount>
      </S.GridContainer>
    </S.Container>
  );
};
