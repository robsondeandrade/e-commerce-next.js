"use client";
import { useState } from "react";
import { CartModal } from "../ModalCart";
import * as S from "./styles";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state: any) => state.product.products);

  const [openModal, setOpenModal] = useState(false);
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.MainLogo>RBS</S.MainLogo>
        <S.SubLogo>Sistemas</S.SubLogo>
      </S.LogoContainer>

      <S.CartContainer onClick={() => setOpenModal(true)}>
        <S.CartIcon />
        <S.CartValue>{products?.length}</S.CartValue>
      </S.CartContainer>
      <CartModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </S.HeaderContainer>
  );
};

export default Header;
