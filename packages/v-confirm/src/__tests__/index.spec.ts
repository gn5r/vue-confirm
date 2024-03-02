import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { createVConfirm } from "../";

describe("createVConfirm", () => {
  describe("install", () => {
    it("should return install function", () => {
      const vconfirm = createVConfirm();
      expect("install" in vconfirm).toBe(true);
    });

    it("should install provided components", () => {
      const vconfirm = createVConfirm();
      const TestComponent = {
        name: "TestComponent",
        props: {},
        template: "<v-confirm />",
      };

      const wrapper = mount(TestComponent, {
        global: {
          plugins: [vconfirm],
        },
      });
      expect(wrapper.findComponent({ name: "v-confirm" }).exists()).toBe(true);
    });
  });
});
