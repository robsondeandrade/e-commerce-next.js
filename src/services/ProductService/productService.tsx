import api from "../api";
import { IGetProductsParams } from "./types";

export async function getProducts({
  search,
  offset,
  limit,
  sort,
}: IGetProductsParams) {
  try {
    const response = await api.get(`/search?q=${search}&sort=${sort}`, {
      params: {
        offset,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
