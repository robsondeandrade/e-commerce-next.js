export interface ICustomPaginationProps {
    totalPages: number
    currentPage: number
    handlePageChange: (page: number) => void
    handleSelectPerPage: (value: number) => void
    selected: number
}
