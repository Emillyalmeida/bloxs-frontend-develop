import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/header";

describe("Component Header", () => {
  test("should be able to render header", () => {
    render(<Header title={"test"} />);

    expect(screen.getByText(/test/)).toBeInTheDocument();
  });
});
