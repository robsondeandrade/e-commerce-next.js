import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CustomPagination } from '.'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

describe('CustomPagination Component', () => {
    const mockHandlePageChange = jest.fn()
    const mockHandleSelectPerPage = jest.fn()
    const props = {
        selected: 10,
        totalPages: 5,
        currentPage: 3,
        handlePageChange: mockHandlePageChange,
        handleSelectPerPage: mockHandleSelectPerPage,
    }

    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <CustomPagination {...props} />
            </ThemeProvider>,
        )
        mockHandlePageChange.mockClear()
        mockHandleSelectPerPage.mockClear()
    })

    it('calls handlePageChange with the correct page when the first page button is clicked', () => {
        const firstPageButton = screen.getByText('1')
        fireEvent.click(firstPageButton)
        expect(mockHandlePageChange).toHaveBeenCalledWith(1)
    })

    it('calls handleSelectPerPage with the correct value when a new option is selected', () => {
        const selectPerPage = screen.getByTestId('select-per-page')
        fireEvent.change(selectPerPage, { target: { value: 20 } })
        expect(mockHandleSelectPerPage).toHaveBeenCalledWith(20)
    })

    it('calls handlePageChange with 1 when the first page button is clicked', () => {
        const firstPageButton = screen.getByTestId('first-page')
        fireEvent.click(firstPageButton)
        expect(mockHandlePageChange).toHaveBeenCalledWith(1)
    })
    it('calls handlePageChange with currentPage + 1 when the next page button is clicked', () => {
        const nextPageButton = screen.getByTestId('next-page')
        fireEvent.click(nextPageButton)
        expect(mockHandlePageChange).toHaveBeenCalledWith(props.currentPage + 1)
    })

    it('calls handlePageChange with currentPage - 1 when the previous page button is clicked', () => {
        const previousPageButton = screen.getByTestId('previous-page')
        fireEvent.click(previousPageButton)
        expect(mockHandlePageChange).toHaveBeenCalledWith(props.currentPage - 1)
    })

    it('calls handlePageChange with totalPages when the last page button is clicked', () => {
        const lastPageButton = screen.getByTestId('last-page')
        fireEvent.click(lastPageButton)
        expect(mockHandlePageChange).toHaveBeenCalledWith(props.totalPages)
    })
})
