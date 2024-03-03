import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import { ICustomPaginationProps } from './types'
import * as S from './styles'
import { ITEMS_PER_PAGE_OPTIONS } from './constants'

export const CustomPagination = ({
    selected,
    totalPages,
    currentPage,
    handlePageChange,
    handleSelectPerPage,
}: ICustomPaginationProps) => {
    const isPreviousDisabled = currentPage === 1
    const isNextDisabled = currentPage === totalPages

    const renderPageButtons = () => {
        const pageButtons = []

        const startPage = Math.max(1, currentPage - 2)
        const endPage = Math.min(totalPages, currentPage + 2)

        for (let page = startPage; page <= endPage; page++) {
            pageButtons.push(
                <S.PageButton
                    key={page}
                    $active={page === currentPage}
                    disabled={page === currentPage}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </S.PageButton>,
            )
        }

        return pageButtons
    }

    return (
        <S.Wrapper>
            <S.PageButton
                data-testid='first-page'
                disabled={isPreviousDisabled}
                onClick={() => handlePageChange(1)}
            >
                <FaAngleDoubleLeft />
            </S.PageButton>

            <S.PageButton
                data-testid='previous-page'
                disabled={isPreviousDisabled}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                <FaAngleLeft />
            </S.PageButton>

            {renderPageButtons()}

            <S.PageButton
                disabled={isNextDisabled}
                data-testid='next-page'
                onClick={() => handlePageChange(currentPage + 1)}
            >
                <FaAngleRight />
            </S.PageButton>

            <S.PageButton
                data-testid='last-page'
                disabled={isNextDisabled}
                onClick={() => handlePageChange(totalPages)}
            >
                <FaAngleDoubleRight />
            </S.PageButton>

            <S.PageSelect
                value={selected}
                onChange={(e) => handleSelectPerPage(Number(e.target.value))}
                data-testid='select-per-page'
            >
                {ITEMS_PER_PAGE_OPTIONS.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </S.PageSelect>
        </S.Wrapper>
    )
}
