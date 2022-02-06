import { isCssColor, setBackgroundColor, setTextColor } from "../colorUtil";
import { VNodeData } from "vue/types/vnode";

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

  it("setBackgroundColor with css style", () => {
    const data: VNodeData = {};
    expect(setBackgroundColor("#fff", data)).toEqual({
      style: { "background-color": "#fff" },
    });
  });

  it("setBackgroundColor with class style", () => {
    const data: VNodeData = {};
    expect(setBackgroundColor("primary", data)).toEqual({
      class: { primary: true },
    });
  });

  it("setTextColor with css style", () => {
    const data: VNodeData = {};
    expect(setTextColor("#fff", data)).toEqual({
      style: { color: "#fff" },
    });
  });

  it("setTextColor with class style", () => {
    const data: VNodeData = {};
    expect(setTextColor("white-text", data)).toEqual({
      class: { "white-text": true },
    });
  });
});
