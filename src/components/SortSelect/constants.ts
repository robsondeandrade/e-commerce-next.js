export enum SortOrder {
  PRICE_ASC = "price_asc",
  PRICE_DESC = "price_desc",
  RELEVANCE = "relevance",
}

export const sortOptions = [
  { value: SortOrder.RELEVANCE, label: "Mais relevantes" },
  { value: SortOrder.PRICE_ASC, label: "Menor preço" },
  { value: SortOrder.PRICE_DESC, label: "Maior preço" },
];
