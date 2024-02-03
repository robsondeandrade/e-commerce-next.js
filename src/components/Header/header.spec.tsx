import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
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
  it("should render the component correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
        </Provider>
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });

  it("should toggle the cart modal state correctly", () => {
    const { getByTestId, queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
        </Provider>
      </ThemeProvider>
    );

    const cartContainer = getByTestId("cart-container");
    expect(cartContainer).toHaveTextContent("0");

    fireEvent.click(cartContainer);

    expect(queryByTestId("cart-container")).toBeInTheDocument();

    const closeButton = queryByTestId("close-button");
    if (closeButton) {
      fireEvent.click(closeButton);
      expect(queryByTestId("close-button")).not.toBeInTheDocument();
    } else {
      throw new Error("Botão de fechar não encontrado");
    }
  });
});
