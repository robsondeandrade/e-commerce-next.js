import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from ".";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
  }),
}));

describe("Header", () => {
  it("should be return component correct", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  });
});
