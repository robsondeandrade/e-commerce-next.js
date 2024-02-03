"use client";
import { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "@/services/ProductService/productService";
import { CardProduct } from "@/components/CardProduct";
import { calculateTotalPages } from "@/utils/pagination";
import { CustomPagination } from "../pagination";
import { SearchField } from "../SearchField";
import * as S from "./styles";

export const ListProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectPerPage = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const offset = (currentPage - 1) * itemsPerPage;
  const search = searchTerm || "Ofertas";

  const { data } = useQuery(
    ["products", currentPage, itemsPerPage, searchTerm],
    () => getProducts({ search, offset, limit: itemsPerPage }),
    {
      keepPreviousData: true,
    }
  );

  const { primary_results: totalResults, limit } = data?.paging || {};
  const totalPages = calculateTotalPages(totalResults, limit);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <S.Container>
      <S.BoxSearch>
        <h2>
          {searchTerm
            ? `Resultados para "${search}"`
            : "Explorando Todas as Ofertas"}
        </h2>
        <SearchField onSearch={handleSearch} />
      </S.BoxSearch>

      <S.Content>
        {data?.results?.map((product: any) => (
          <div key={product.id}>
            <CardProduct product={product} />
          </div>
        ))}
      </S.Content>
      <CustomPagination
        currentPage={currentPage}
        selected={itemsPerPage}
        handlePageChange={handlePageChange}
        handleSelectPerPage={handleSelectPerPage}
        totalPages={totalPages}
      />
    </S.Container>
  );
};
