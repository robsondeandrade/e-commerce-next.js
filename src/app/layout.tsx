'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/globalStyle'
import StyledComponentsRegistry from './lib/registry.tsx'
import { Provider } from 'react-redux'
import store from '@/stores/store.js'
import Header from '@/components/Header'

const queryClient = new QueryClient()
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang='pt'>
                <body className={poppins.className}>
                    <QueryClientProvider client={queryClient}>
                        <ThemeProvider theme={theme}>
                            <StyledComponentsRegistry>
                                <Provider store={store}>
                                    <GlobalStyle />
                                    <Header />
                                    {children}
                                </Provider>
                            </StyledComponentsRegistry>
                        </ThemeProvider>
                    </QueryClientProvider>
                </body>
            </html>
        </>
    )
}
