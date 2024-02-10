/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { StarRatingReview } from "./StarRatingReview";

describe("StarRatingReview", () => {
  it("rating prop works well", async () => {
    render(<StarRatingReview rating={10} />);
    expect(screen.getByText(10)).toBeInTheDocument();
  });
});
