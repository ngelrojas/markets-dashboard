import { describe, it, afterEach } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import SearchBox from "../../components/search-box";

describe("SearchBox", () => {
  afterEach(cleanup);

  it("should render the search input", () => {
    render(<SearchBox />);
  });

  it("should render the search input with label", () => {
    render(<SearchBox />);
    screen.getByRole("search-markets");
  });
});
