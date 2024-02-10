/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Portal } from "./Portal";

describe("Portal", () => {
  it("works well", async () => {
    const content = "Confirmation";
    render(<Portal>{content}</Portal>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
