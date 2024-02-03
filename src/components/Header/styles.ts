import styled from "styled-components";
import { ImCart } from "react-icons/im";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 101px;
  display: flex;
  justify-content: space-between;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const MainLogo = styled.h2`
  font-weight: 600;
  font-size: 40px;
  margin: 28px 0 29px 65px;
  @media (max-width: 500px) {
    margin: 28px 0 29px 10px;
  }
`;

export const SubLogo = styled.p`
  font-weight: 200;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const CartContainer = styled.div`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 29px 88px 27px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 500px) {
    margin: 29px 10px 27px 0;
  }
`;

export const CartIcon = styled(ImCart)`
  font-size: 19.01px;
  margin: 0 15px;
`;

export const CartValue = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;
