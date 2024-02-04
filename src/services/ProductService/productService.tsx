import api from "../api";
import { IGetProductsParams } from "./types";

export async function getProducts({
  search = "Ofertas",
  offset = 0,
  limit = 10,
  sort = "relevance",
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
