import React from "react";
import * as S from "./styles";
import { IParamsComponent } from "./types";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "@/stores/productSlice";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

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
      <S.Content>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={80}
        />
        <S.BoxInfo>
          <S.Typography>{product.title}</S.Typography>
          <S.BoxValue>
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
            <S.Amount>
              R${formatCurrency(product.price * product.quantity)}
            </S.Amount>
          </S.BoxValue>
        </S.BoxInfo>
      </S.Content>
    </S.Container>
  );
};
