import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import ContainerMarket from "../../components/container-market";

describe("ContainerMarket", () => {
  afterEach(cleanup);

  it("should render the container market", () => {
    render(<ContainerMarket />);
  });
});
