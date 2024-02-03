import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1438px;
  flex-wrap: wrap;
  margin: 200px auto 0;
  justify-content: center;
`;

export const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px;
  @media (max-width: 851px) {
    flex-direction: column;
  }
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  max-width: 1438px;
  flex-wrap: wrap;
  justify-content: center;
`;
