import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 240px;
  height: 300px;
  margin: 5px 22px 28px;
  box-shadow: 0px 2px 8px 0px #00000022;
  position: relative;
  max-width: 938px;
`;

export const Photo = styled.img`
  height: 100px;
  margin: 18px 0 16px;
`;

export const NameProduct = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  margin-left: 13px;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  align-items: flex-start;
  margin-top: -10px;
  gap: 2px;
`;

export const ContentDescription = styled.div`
  display: flex;
  width: 100%;
  margin: 8px 26px;
`;

export const SpanQuantidy = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 5px;
  font-weight: 400;
  line-height: 6px;
`;

export const ContentAmount = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 0 10px;
  min-width: 84px;
  height: 26px;
  border-radius: 5px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 40px;
  right: 0;
`;

export const Amount = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
`;

export const FooterContent = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  width: 240px;
  height: 31.91px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 8px 8px;
  border: none;
  bottom: 0;
  font-size: 14px;
  font-weight: 600;
  gap: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
