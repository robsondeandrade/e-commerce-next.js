"use client";
import { useQuery } from "react-query";
import { getProducts } from "@/services/ProductService/productService";
import { CardProduct } from "@/components/CardProduct";
import { Container } from "./styles";

export const ListProducts = () => {
  const { data } = useQuery(["products", 1, 10], () =>
    getProducts({ page: 1, rows: 10 })
  );

  return (
    <Container>
      {data?.products.map((product: any) => (
        <div key={product.id}>
          <CardProduct product={product} />
        </div>
      ))}
    </Container>
  );
};
