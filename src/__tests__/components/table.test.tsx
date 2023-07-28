import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import TableMarket from "../../components/table-market";

describe("TableMarket", () => {
  afterEach(cleanup);

  it("should render the table market", () => {
    render(<TableMarket />);
  });
});
