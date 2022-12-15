import { isCssColor } from "../colorUtil";

describe("colorUtil.ts", () => {
  it("#fff is true", () => {
    expect(isCssColor("#fff")).toBe(true);
  });

  it("var is true", () => {
    expect(isCssColor("var(--primary)")).toBe(true);
  });

  it("transparent is true", () => {
    expect(isCssColor("transparent")).toBe(true);
  });

  it("inherit is true", () => {
    expect(isCssColor("inherit")).toBe(true);
  });

  it("primary is false", () => {
    expect(isCssColor("primary")).toBe(false);
  });

  it("undefined value is false", () => {
    expect(isCssColor()).toBe(false);
  });
});
