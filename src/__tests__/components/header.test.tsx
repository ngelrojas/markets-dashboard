import { describe, it, afterEach, expect } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Headers from "../../components/headers";

describe("Header", () => {
  afterEach(cleanup);

  it("should render the name dashboard market", () => {
    const { getByText } = render(<Headers />);
    expect(getByText("Dashboard Market"));
  });
});
