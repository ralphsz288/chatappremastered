import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import "@testing-library/jest-dom";

test("should render Home.js", () => {
  render(<Home />);
  const home = screen.getByTestId("home-1");
  expect(home).toBeInTheDocument();
  expect(home).toHaveTextContent("Hello, world!");
});
