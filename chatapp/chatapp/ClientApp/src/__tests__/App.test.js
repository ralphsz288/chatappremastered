import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import App from "../App";
import "@testing-library/jest-dom";

test("checking that home-1 div exists", () => {
  renderWithProviders(<App/>)
  const home = screen.getByTestId("app-1");
  expect(home).toBeInTheDocument();
  expect(home).toHaveTextContent("Hello, world!");
});
