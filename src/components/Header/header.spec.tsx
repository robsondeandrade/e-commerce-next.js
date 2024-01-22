import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from ".";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { Provider } from "react-redux";
import store from "@/stores/store";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
  }),
}));

describe("Header", () => {
  it("should be return component correct", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
        </Provider>
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });

  it("toggles the cart modal state correctly", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
        </Provider>
      </ThemeProvider>
    );

    const cartContainer = getByTestId("cart-container");
    expect(cartContainer).toHaveTextContent("0");
  });
});
