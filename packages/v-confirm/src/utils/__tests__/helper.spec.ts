import { getSize } from "../helper";

describe("helper.ts", () => {
  it("get only a number value", () => {
    const value = "800px";
    expect(getSize(value)).toBe(800);
  });
});
