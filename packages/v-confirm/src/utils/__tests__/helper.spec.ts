import { getSize, getClass } from "../helper";
import { VNodeData } from "vue/types/umd";

describe("helper.ts", () => {
  it("get only a number value", () => {
    const value = "800px";
    expect(getSize(value)).toBe(800);
  });

  describe("getClass", () => {
    it("get empty value when args is undefined", () => {
      expect(getClass()).toEqual([]);
    });

    it("get empty value with null", () => {
      const data: VNodeData = {
        class: null,
      };
      expect(getClass(data)).toEqual([]);
    });

    it("get empty value with undefined", () => {
      const data: VNodeData = {
        class: undefined,
      };
      expect(getClass(data)).toEqual([]);
    });

    it("get empty value with blank value", () => {
      const data: VNodeData = {
        class: "",
      };
      expect(getClass(data)).toEqual([]);
    });

    it("get empty value with empty array", () => {
      const data: VNodeData = {
        class: [],
      };
      expect(getClass(data)).toEqual([]);
    });

    it("get array when exist staticClass is a word", () => {
      const data: VNodeData = {
        staticClass: "btn",
      };
      expect(getClass(data)).toEqual(["btn"]);
    });

    it("get array when staticClass is multi word", () => {
      const data: VNodeData = {
        staticClass: "btn btn-primary",
      };
      expect(getClass(data)).toEqual(["btn", "btn-primary"]);
    });

    it("get array with string value", () => {
      const data: VNodeData = {
        class: "test",
      };
      expect(getClass(data)).toEqual(["test"]);
    });

    it("get array with string array", () => {
      const data: VNodeData = {
        class: ["test", "primary"],
      };
      expect(getClass(data)).toEqual(["test", "primary"]);
    });

    it("get array with object value is true", () => {
      const data: VNodeData = {
        class: {
          test: true,
          primary: false,
        },
      };
      expect(getClass(data)).toEqual(["test"]);
    });

    it("get array with class and staticClass", () => {
      const data: VNodeData = {
        staticClass: "btn",
        class: ["test", "primary"],
      };
      expect(getClass(data)).toEqual(["btn", "test", "primary"]);
    });
  });
});
