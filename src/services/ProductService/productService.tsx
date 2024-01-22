// src/services/productService.ts
import api from "../api";
import { IGetProductsParams } from "./types";

export async function getProducts({ page, rows }: IGetProductsParams) {
  try {
    const response = await api.get(
      `/products?page=${page}&rows=${rows}&sortBy=id&orderBy=DESC`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
