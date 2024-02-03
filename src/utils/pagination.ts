export const calculateTotalPages = (
  totalItems: number | undefined,
  itemsPerPage: number | undefined
) => {
  return totalItems && itemsPerPage ? Math.floor(totalItems / itemsPerPage) : 0;
};
