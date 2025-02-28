import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { VConfirm } from "../VConfirm";
import type { VConfirmBtn } from "@gn5r/vue-confirm";

describe("VConfirm.tsx", () => {
  it("render with not active", () => {
    const wrapper = mount(VConfirm);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a dark component", () => {
    const wrapper = mount(VConfirm, { props: { dark: true } });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a header when default", () => {
    const wrapper = mount(VConfirm);
    expect(
      wrapper.find(".v-confirm__content > .v-confirm__header").exists()
    ).toBe(true);
  });

  it("should emitted update:modelValue when clicked button on header", async () => {
    const wrapper = mount(VConfirm, {
      props: { modelValue: true, closeable: true },
    });
    await wrapper
      .find(
        ".v-confirm__content > .v-confirm__header > .v-confirm__close-icon > button"
      )
      .trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
  });

  it("not render a header when hideHeader is true", () => {
    const wrapper = mount(VConfirm, { props: { hideHeader: true } });
    expect(
      wrapper.find(".v-confirm__content > .v-confirm__header").exists()
    ).toBe(false);
  });

  it("component default width is 800px", () => {
    const wrapper = mount(VConfirm, {
      props: { modelValue: true },
    });
    expect(wrapper.find(".v-confirm__content").attributes().style).toContain(
      "width: 800px"
    );
  });

  it("render a component with custom width", () => {
    const wrapper = mount(VConfirm, {
      props: { modelValue: true, width: "90%" },
    });
    expect(wrapper.find(".v-confirm__content").attributes().style).toContain(
      "width: 90%"
    );
  });

  it("render a message text", () => {
    const wrapper = mount(VConfirm, {
      props: { modelValue: true, message: "message" },
    });
    expect(
      wrapper.find(".v-confirm__content > .v-confirm__message").text()
    ).toBe("message");
  });

  it("not render a divider when btns is empty", () => {
    const wrapper = mount(VConfirm, {
      props: { modelValue: true },
    });
    expect(wrapper.find(".v-confirm__divider").exists()).toBe(false);
  });

  it("not render buttons when btn is empty", () => {
    const wrapper = mount(VConfirm, {
      props: { modelValue: true },
    });
    expect(wrapper.find(".v-confirm__actions").exists()).toBe(false);
  });

  it("render a divider when the length of btns is 1 or more elements", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
      },
    ];
    const wrapper = mount(VConfirm, {
      props: { modelValue: true, btns: btns },
    });
    expect(wrapper.find(".v-confirm__divider").exists()).toBe(true);
  });

  it("not render a divider when the length of btns is 1 or more elements but noActionsDivider is true", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
      },
    ];
    const wrapper = mount(VConfirm, {
      props: { modelValue: true, btns: btns, noActionsDivider: true },
    });
    expect(wrapper.find(".v-confirm__divider").exists()).toBe(false);
  });

  describe("click:outside", () => {
    it("defined click-outside derective", () => {
      const wrapper = mount(VConfirm);

      expect(wrapper.vm.$options.directives?.ClickOutside).toBeDefined();
    });

    it("should emitted click:outside when clicked parent dom", async () => {
      const wrapper = mount(VConfirm, {
        props: { modelValue: true },
        attachTo: document.body,
      });

      const clickHandler =
        "ontouchstart" in document.documentElement ? "touchstart" : "click";
      await wrapper.find(".v-confirm").trigger(clickHandler);
      expect(wrapper.emitted("click:outside")).toBeTruthy();
      expect(wrapper.emitted()["update:modelValue"][0]).toEqual([false]);
    });

    it("should dont call update:modelValue when persistent is true and clicked parent dom", async () => {
      const wrapper = mount(VConfirm, {
        props: { modelValue: true, persistent: true },
        attachTo: document.body,
      });

      const clickHandler =
        "ontouchstart" in document.documentElement ? "touchstart" : "click";
      await wrapper.find(".v-confirm").trigger(clickHandler);
      expect(wrapper.emitted("click:outside")).toBeTruthy();
      expect(wrapper.emitted("update:modelValue")).toBeFalsy();
    });
  });
});
