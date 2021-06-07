import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders simple todo list header", () => {
  render(<App />);
  const headElement = screen.getByText(/simple todo list/i);
  expect(headElement).toBeInTheDocument();
});

test("test", () => {
  render(<App />);
  const input = screen.queryByPlaceholderText(/enter some task.../i);
  userEvent.type(input, "Test string{enter}");
  const addedElement = screen.getByText("Test string");
  expect(addedElement).toHaveTextContent("Test string");
});
