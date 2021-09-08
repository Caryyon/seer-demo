import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SeerButton from "./Button";

describe("SeerButton", () => {
  test("renders with moon icon", () => {
    render(<SeerButton icon="moon" />);
    const btn = screen.getByText("moon");
    expect(btn).toBeDefined();
  });
  test("renders with flash icon", async () => {
    render(<SeerButton icon="flash" />);
    const btn = screen.getByText("flash");
    expect(btn).toBeDefined();
  });
  test("renders with no icon and the text: test", async () => {
    const { getByText } = render(<SeerButton>test</SeerButton>);
    expect(getByText("test")).toBeInTheDocument();
  });
});
