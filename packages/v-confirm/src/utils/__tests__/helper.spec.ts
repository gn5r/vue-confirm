import { describe, it, expect } from "vitest";
import { getSize, convertToUnit } from "../helper";

describe("helper.ts", () => {
  it("should return proper value in getSize", () => {
    expect(getSize()).toBe(undefined);
    expect(getSize("")).toBe(undefined);
    expect(getSize(null)).toBe(undefined);
    expect(getSize(undefined)).toBe(undefined);

    expect(getSize("800px")).toBe(800);
    expect(getSize(800)).toBe(800);
  });

  it("should return proper value in convertToUnit", () => {
    expect(convertToUnit()).toBe(undefined);
    expect(convertToUnit("")).toBe(undefined);
    expect(convertToUnit(null)).toBe(undefined);
    expect(convertToUnit(undefined)).toBe(undefined);

    expect(convertToUnit(800)).toBe("800px");
    expect(convertToUnit(800, "pt")).toBe("800pt");
    expect(convertToUnit("800px")).toBe("800px");
    expect(convertToUnit("800rem")).toBe("800rem");
    expect(convertToUnit("80%")).toBe("80%");
    expect(convertToUnit(800, "em")).toBe("800em");
  });
});
