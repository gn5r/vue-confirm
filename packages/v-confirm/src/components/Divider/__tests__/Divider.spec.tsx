import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { Divider } from "../Divider";

describe("Divider.tsx", () => {
  it("render a component", () => {
    const wrapper = shallowMount(Divider);
    expect(wrapper.html()).toMatchSnapshot();
    const hr = wrapper.find("hr.light");
    expect(hr.exists()).toBe(true);
  });

  it("render a dark component", () => {
    const wrapper = shallowMount(Divider, { props: { dark: true } });
    expect(wrapper.html()).toMatchSnapshot();
    const hr = wrapper.find("hr.dark");
    expect(hr.exists()).toBe(true);
  });
});
