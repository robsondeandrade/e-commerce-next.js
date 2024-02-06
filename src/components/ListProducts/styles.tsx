import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1438px;
  flex-wrap: wrap;
  margin: 150px auto 0;
  justify-content: center;
  @media (max-width: 851px) {
    align-items: center;
  }
`;

export const BoxSortSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  @media (max-width: 851px) {
    justify-content: center;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  @media (min-width: 851px) {
    margin-left: 32px;
  }
`;

export const NoResults = styled.div`
  margin-top: 50px;
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 32px 32px 32px;
  gap: 16px;
  @media (max-width: 851px) {
    margin: 0 0 32px 0;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1438px;
  flex-wrap: wrap;
  justify-content: center;
`;
