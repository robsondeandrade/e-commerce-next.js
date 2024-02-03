import { useState } from "react";
import { SearchFieldProps } from "./types";
import * as S from "./styles";

export const SearchField = ({ onSearch }: SearchFieldProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <S.SearchButton onClick={handleSearch}>Buscar</S.SearchButton>
    </S.SearchContainer>
  );
};
