import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import theme from '@/styles/theme'
import store from '@/stores/store'
import Header from '.'
import * as NextNavigation from 'next/navigation'

jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useRouter: jest.fn().mockReturnValue({ back: jest.fn(), push: jest.fn() }),
    usePathname: jest.fn().mockReturnValue('/mock-path'),
}))

const queryClient = new QueryClient()

const renderHeader = () =>
    render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Header />
                </Provider>
            </ThemeProvider>
        </QueryClientProvider>,
    )

describe('Header Component', () => {
    describe('Rendering and Interaction', () => {
        it('renders correctly', () => {
            renderHeader()
            expect(screen.getByTestId('cart-container')).toBeInTheDocument()
        })

        it('toggles the cart modal correctly', () => {
            renderHeader()

            const cartContainer = screen.getByTestId('cart-container')
            expect(cartContainer).toHaveTextContent('0')
            fireEvent.click(cartContainer)
            expect(screen.queryByTestId('cart-modal')).toBeInTheDocument()

            const closeButton = screen.queryByTestId('close-button')
            if (!closeButton) throw new Error('Close button not found')

            fireEvent.click(closeButton)
            expect(screen.queryByTestId('cart-modal')).not.toBeInTheDocument()
        })

        it('should redirect to the home page when the logo is clicked', () => {
            const { getByTestId } = renderHeader()

            fireEvent.click(getByTestId('logo-container'))
            expect(NextNavigation.useRouter().push).toHaveBeenCalledWith('/')
        })
    })

    describe('Route-based Rendering', () => {
        let usePathnameMock: jest.Mock

        beforeEach(() => {
            jest.clearAllMocks()
            usePathnameMock = jest.spyOn(NextNavigation, 'usePathname') as jest.Mock
        })

        it('does not render on excluded routes', () => {
            usePathnameMock.mockReturnValue('/login')
            const { container } = renderHeader()
            expect(container.innerHTML).toBe('')
        })

        it('renders on non-excluded routes', () => {
            usePathnameMock.mockReturnValue('/home')
            const { container } = renderHeader()
            expect(container.innerHTML).not.toBe('')
        })
    })
})
