import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Home from "../../pages/home";

describe("Home", () => {
  afterEach(cleanup);

  it("should render the home page", () => {
    render(<Home />);
  });
});
