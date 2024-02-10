/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  const mockOnClick = jest.fn();

  it("id prop works well", () => {
    render(<Button id="button" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("label prop works well", () => {
    render(<Button label="Label" />);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("type prop works well", () => {
    render(<Button type="button" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("onClick prop works well", () => {
    render(<Button label="label" onClick={mockOnClick} />);
    fireEvent.click(screen.getByText("label"))
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
