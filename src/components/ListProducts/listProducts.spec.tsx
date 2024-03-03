import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { getProducts } from '@/services/ProductService/productService'
import theme from '@/styles/theme'
import store from '@/stores/store'
import { ListProducts } from '.'
import { SortOrder } from '../SortSelect/constants'
import { ITEMS_PER_PAGE } from '../pagination/constants'

const queryClient = new QueryClient()

const mockProducts = [
    {
        id: '1',
        title: 'Produto 1',
        price: 100,
        quantity: 5,
        thumbnail: '',
        productId: '123',
        available_quantity: 10,
    },
    {
        id: '2',
        title: 'Produto 2',
        price: 10,
        quantity: 20,
        thumbnail: '',
        productId: '321',
        available_quantity: 10,
    },
]

jest.mock('../../services/ProductService/productService')

const renderListProducts = () =>
    render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <ListProducts />
                </Provider>
            </ThemeProvider>
        </QueryClientProvider>,
    )

describe('ListProducts Component', () => {
    beforeEach(() => {
        ;(getProducts as jest.Mock).mockResolvedValue({
            results: mockProducts,
            paging: { totalResults: 20, limit: 10 },
        })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('handles search correctly', async () => {
        renderListProducts()

        const searchField = screen.getByPlaceholderText('Buscar...')
        const searchButton = screen.getByTestId('button-seach')

        fireEvent.change(searchField, { target: { value: 'ps5' } })
        fireEvent.click(searchButton)

        await waitFor(() => {
            expect(getProducts).toHaveBeenCalledWith(expect.objectContaining({ search: 'ps5' }))
        })
    })

    it('renders correctly and fetches products on initial load', async () => {
        renderListProducts()

        expect(getProducts).toHaveBeenCalled()

        await waitFor(() => {
            mockProducts.forEach((product) => {
                expect(screen.getByText(product.title)).toBeInTheDocument()
            })
        })
    })

    it('changes sort order', async () => {
        renderListProducts()

        const sortOrderSelect = screen.getByTestId('sort-order-select')
        fireEvent.change(sortOrderSelect, { target: { value: SortOrder.PRICE_DESC } })

        await waitFor(() => {
            expect(getProducts).toHaveBeenCalledWith(
                expect.objectContaining({ sort: SortOrder.PRICE_DESC }),
            )
        })
    })

    it('handles page change correctly', async () => {
        renderListProducts()

        await waitFor(() => {
            mockProducts.forEach(() => {
                const page2Button = screen.getByTestId('next-page')
                fireEvent.click(page2Button)
                expect(getProducts).toHaveBeenCalledWith(
                    expect.objectContaining({ offset: ITEMS_PER_PAGE }),
                )
            })
        })
    })

    it('handles select per page correctly', async () => {
        renderListProducts()

        await waitFor(() => {
            mockProducts.forEach((product) => {
                const selectPerPageDropdown = screen.getByTestId('select-per-page')
                fireEvent.change(selectPerPageDropdown, { target: { value: '20' } })

                expect(getProducts).toHaveBeenCalledWith(expect.objectContaining({ limit: 20 }))
            })
        })
    })
})
