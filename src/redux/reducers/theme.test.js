import reducer, { toggle } from "./theme";

describe("Theme Reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ theme: true });
  });
  test("should return false", () => {
    let prevState = { theme: true };
    expect(reducer(prevState, toggle())).toEqual({ theme: false });
  });
});
