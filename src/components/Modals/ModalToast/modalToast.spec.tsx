import { useState } from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { act } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from '@/stores/store'
import { ModalToast } from '.'
import theme from '@/styles/theme'

interface ModalToastTestWrapperProps {
    message: string
    duration: number
}

const queryClient = new QueryClient()

const ModalToastTestWrapper = ({ message, duration }: ModalToastTestWrapperProps) => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <ModalToast
                        message={message}
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                        duration={duration}
                    />
                </Provider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

describe('ModalToast Component', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.clearAllMocks()
        jest.useRealTimers()
    })

    it('automatically hides after the specified duration', async () => {
        const message = 'Test message'
        const duration = 5000

        render(
            <ModalToastTestWrapper
                message={message}
                duration={duration}
            />,
        )

        expect(screen.getByText(message)).toBeVisible()

        act(() => {
            jest.advanceTimersByTime(duration)
        })

        const toastElement = screen.queryByText(message)
        expect(toastElement).not.toBeVisible()
    })
})
