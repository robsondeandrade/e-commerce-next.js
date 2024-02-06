import styled from "styled-components";

export const StyledSelect = styled.select`
  padding: 10px 30px 10px 15px;
  border-radius: 8px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  margin: 10px 0;
  cursor: pointer;
  max-width: 235px;
  width: 100%;
  appearance: none;
  background-color: white;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" fill="%23007bff"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
  transition: border-color 0.25s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
