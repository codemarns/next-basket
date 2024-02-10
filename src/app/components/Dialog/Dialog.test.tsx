/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Dialog } from "./Dialog";

// !NOTE: issue testing with Dialog since it is wrapped by Portal component.

describe("Dialog", () => {
  const header = "Confirmation";
  const mockOnClose = jest.fn();

  it("header prop works well", async () => {
    render(<Dialog header={header} onClose={mockOnClose} />);
    await waitFor(
      () => {
        expect(screen.getByText(header)).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });

  // it("onClose prop works well", () => {
  //   render(<Dialog onClose={mockOnClose} />);
  //   fireEvent.click(screen.getByLabelText("OK"))
  //   expect(mockOnClose).toHaveBeenCalledTimes(1);
  // });
});
