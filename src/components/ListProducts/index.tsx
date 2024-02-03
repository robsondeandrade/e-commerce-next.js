"use client";
import { useQuery } from "react-query";
import { getProducts } from "@/services/ProductService/productService";
import { CardProduct } from "@/components/CardProduct";
import { Container } from "./styles";
import { CustomPagination } from "../pagination";
import { useState } from "react";
import { calculateTotalPages } from "@/utils/pagination";

export const ListProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectPerPage = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const offset = (currentPage - 1) * itemsPerPage;

  const { data } = useQuery(
    ["products", currentPage, itemsPerPage],
    () => getProducts({ search: "celular", offset, limit: itemsPerPage }),
    {
      keepPreviousData: true,
    }
  );

  const { primary_results: totalResults, limit } = data?.paging || {};
  const totalPages = calculateTotalPages(totalResults, limit);

  return (
    <>
      <Container>
        {data?.results?.map((product: any) => (
          <div key={product.id}>
            <CardProduct product={product} />
          </div>
        ))}
      </Container>
      <CustomPagination
        currentPage={currentPage}
        selected={itemsPerPage}
        handlePageChange={handlePageChange}
        handleSelectPerPage={handleSelectPerPage}
        totalPages={totalPages}
      />
    </>
  );
};
