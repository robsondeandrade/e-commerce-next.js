"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyle";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry.tsx";
import { Provider } from "react-redux";
import store from "@/stores/store.js";

const queryClient = new QueryClient();
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pt">
        <body className={montserrat.className}>
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
  );
}
