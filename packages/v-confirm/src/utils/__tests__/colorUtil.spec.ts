import { describe, it, expect } from "vitest";
import { isCssColor } from "../colorUtil";

describe("colorUtil.ts", () => {
  it("valid CSS color #fff is true", () => {
    expect(isCssColor("#fff")).toBe(true);
  });

  it("valid CSS variable is true", () => {
    expect(isCssColor("var(--primary)")).toBe(true);
  });

  it("valid CSS color transparent is true", () => {
    expect(isCssColor("transparent")).toBe(true);
  });

  it("valid CSS keyword inherit is true", () => {
    expect(isCssColor("inherit")).toBe(true);
  });

  it("invalid CSS color primary is false", () => {
    expect(isCssColor("primary")).toBe(false);
  });

  it("undefined value is false", () => {
    expect(isCssColor()).toBe(false);
  });
});
