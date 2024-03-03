import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { SearchField } from '.'

describe('SearchField Component', () => {
    const mockOnSearch = jest.fn()

    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <SearchField onSearch={mockOnSearch} />
            </ThemeProvider>,
        )
        mockOnSearch.mockClear()
    })

    it('calls onSearch prop when search button is clicked', () => {
        const searchInput = screen.getByPlaceholderText('Buscar...')
        const searchButton = screen.getByTestId('button-seach')

        fireEvent.change(searchInput, { target: { value: 'test' } })
        fireEvent.click(searchButton)

        expect(mockOnSearch).toHaveBeenCalledWith('test')
    })

    it('calls onSearch prop when Enter key is pressed', () => {
        const searchInput = screen.getByPlaceholderText('Buscar...')

        fireEvent.change(searchInput, { target: { value: 'novo teste' } })
        fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' })

        expect(mockOnSearch).toHaveBeenCalledWith('novo teste')
    })

    it('does not call onSearch prop when a key other than Enter is pressed', () => {
        const searchInput = screen.getByPlaceholderText('Buscar...')

        fireEvent.change(searchInput, { target: { value: 'test' } })
        fireEvent.keyDown(searchInput, { key: 'A', code: 'KeyA' })

        expect(mockOnSearch).not.toHaveBeenCalled()
    })
})
