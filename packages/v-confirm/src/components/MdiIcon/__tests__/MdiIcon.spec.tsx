import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { MdiIcon } from "../MdiIcon";
import { mdiClose } from "@mdi/js";

describe("MdiIcon.tsx", () => {
  it("render a component", () => {
    const wrapper = mount(MdiIcon, { slots: { default: mdiClose } });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a dark component", () => {
    const wrapper = mount(MdiIcon, {
      props: { dark: true },
      slots: { default: mdiClose },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find("button.dark").exists()).toBe(true);
  });

  it("should emitted click event when clicked this component", async () => {
    const func = vi.fn();
    const wrapper = mount(MdiIcon, {
      slots: { default: mdiClose },
      attrs: { onClick: func },
    });
    await wrapper.find("button").trigger("click");
    expect(func).toHaveBeenCalledTimes(1);
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
