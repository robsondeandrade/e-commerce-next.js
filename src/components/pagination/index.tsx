import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { ICustomPaginationProps } from "./types";
import * as S from "./styles";

export const CustomPagination = ({
  totalPages,
  currentPage,
  handlePageChange,
  handleSelectPerPage,
  selected,
}: ICustomPaginationProps) => {
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const renderPageButtons = () => {
    const pageButtons = [];

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <S.PageButton
          key={page}
          $active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </S.PageButton>
      );
    }

    return pageButtons;
  };

  return (
    <S.Wrapper>
      <S.PageButton
        disabled={isPreviousDisabled}
        onClick={() => handlePageChange(1)}
      >
        <FaAngleDoubleLeft />
      </S.PageButton>

      <S.PageButton
        disabled={isPreviousDisabled}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaAngleLeft />
      </S.PageButton>

      {renderPageButtons()}

      <S.PageButton
        disabled={isNextDisabled}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaAngleRight />
      </S.PageButton>

      <S.PageButton
        disabled={isNextDisabled}
        onClick={() => handlePageChange(totalPages)}
      >
        <FaAngleDoubleRight />
      </S.PageButton>

      <S.PageSelect
        value={selected}
        onChange={(e) => handleSelectPerPage(Number(e.target.value))}
      >
        {[10, 20, 30].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.PageSelect>
    </S.Wrapper>
  );
};
