"use client";
import { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "@/services/ProductService/productService";
import { CardProduct } from "@/components/CardProduct";
import { calculateTotalPages } from "@/utils/pagination";
import { CustomPagination } from "../pagination";
import { SearchField } from "../SearchField";
import { LoadingOverlay } from "../Loading/LoadingOverlay";
import { SortSelect } from "../SortSelect";
import { SortOrder } from "../SortSelect/constants";
import * as S from "./styles";

export const ListProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.RELEVANCE);

  const offset = (currentPage - 1) * itemsPerPage;
  const search = searchTerm || "Ofertas";

  const { data, isLoading } = useQuery(
    ["products", currentPage, itemsPerPage, searchTerm, sortOrder],
    () => getProducts({ search, offset, limit: itemsPerPage, sort: sortOrder }),
    {
      keepPreviousData: true,
    }
  );

  const { primary_results: totalResults, limit } = data?.paging || {};
  const totalPages = calculateTotalPages(totalResults, limit);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectPerPage = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSortChange = (selectedSortOrder: SortOrder) => {
    setSortOrder(selectedSortOrder);
  };
  console.log("sortOrder", sortOrder);
  return (
    <S.Container>
      {isLoading && <LoadingOverlay />}
      <S.Title>
        {searchTerm
          ? `Resultados para "${search}"`
          : "Explorando Todas as Ofertas"}
      </S.Title>
      <S.BoxSearch>
        <S.BoxSortSelect>
          <span>Ordenar por</span>
          <SortSelect onChange={handleSortChange} />
        </S.BoxSortSelect>

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
