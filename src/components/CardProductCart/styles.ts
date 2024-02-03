import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  width: 379px;
  height: 95px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin: 5px auto 28px;
  box-shadow: -2px 2px 10px 0px #0000000d;

  @media (max-width: 480px) {
    width: 359px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-right: 20px;
`;

export const BoxValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-right: 20px;
`;

export const Typography = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  margin-right: 12px;
`;

export const ContainerQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: -10px;
  gap: 2px;
`;

export const ContentQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
  height: 19px;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  x & > * {
    flex: 1;
    text-align: center;
    border-right: 0.3px solid #bfbfbf;
    &:last-child {
      border-right: none;
    }
  }
`;

export const TypographyValue = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 10px;
  font-weight: 400;
  line-height: 17px;
  margin: auto;
  cursor: pointer;
`;

export const SpanQuantidy = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 8px;
  font-weight: 400;
  line-height: 6px;
`;

export const Amount = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  margin-left: 40px;
  @media (max-width: 480px) {
    margin-left: 30px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: -27px;
  top: -43px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  margin: 39px 22px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const CloseIcon = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 3px;
`;
