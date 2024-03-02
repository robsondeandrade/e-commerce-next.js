import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from '@/stores/store'
import theme from '@/styles/theme'
import { ModalCart } from '.'
import { QueryClient, QueryClientProvider } from 'react-query'

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

const queryClient = new QueryClient()

jest.mock('../../../hooks/useCart', () => ({
    useCart: () => ({
        products: mockProducts,
        clearCart: jest.fn(),
    }),
}))

describe('ModalCart Component', () => {
    const onCloseMock = jest.fn()
    const setup = (isOpen = true) =>
        render(
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <Provider store={store}>
                        <ModalCart
                            isOpen={isOpen}
                            onClose={onCloseMock}
                        />
                    </Provider>
                </ThemeProvider>
            </QueryClientProvider>,
        )

    beforeEach(() => {
        onCloseMock.mockClear()
    })

    it('should render correctly when open', () => {
        setup(true)
        expect(screen.getByTestId('cart-modal')).toBeInTheDocument()
        expect(screen.getByTestId('close-button')).toBeInTheDocument()
        expect(screen.getByText('Carrinho de compras')).toBeInTheDocument()
    })

    it('should not render when not open', () => {
        const { container } = setup(false)
        expect(container).toBeEmptyDOMElement()
    })

    it('renders products correctly', () => {
        setup(true)
        mockProducts.forEach((product) => {
            expect(screen.getByText(product.title)).toBeInTheDocument()
        })
    })

    it('closes the modal when the overlay is clicked', () => {
        setup(true)
        fireEvent.click(screen.getByTestId('modal-overlay'))
        expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('closes the modal when the close button is clicked', () => {
        setup(true)
        fireEvent.click(screen.getByTestId('close-button'))
        expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('completes the purchase correctly', () => {
        const clearCartMock = jest.fn()
        jest.mock('../../../hooks/useCart', () => ({
            useCart: () => ({
                products: mockProducts,
                clearCart: clearCartMock,
            }),
        }))

        setup(true)
        fireEvent.click(screen.getByText(/Finalizar Compra/i))
        expect(clearCartMock).toHaveBeenCalledTimes(0)
    })
})
