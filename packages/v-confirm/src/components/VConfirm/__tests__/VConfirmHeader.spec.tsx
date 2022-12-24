import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { VConfirmHeader } from "../VConfirmHeader";

describe("VConfirmHeader.tsx", () => {
  it("render a component", () => {
    const wrapper = mount(VConfirmHeader);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("not render a spacer in header when default props", () => {
    const wrapper = mount(VConfirmHeader);
    expect(wrapper.find("header > .v-confirm__spacer").exists()).toBe(false);
  });

  it("not render a close icon in header when default props", () => {
    const wrapper = mount(VConfirmHeader);
    expect(wrapper.find("header > .v-confirm__close-icon").exists()).toBe(
      false
    );
  });

  it("render a spacer in header when closeable is true", () => {
    const wrapper = mount(VConfirmHeader, { props: { closeable: true } });
    expect(wrapper.find("header > .v-confirm__spacer").exists()).toBe(true);
  });

  it("render a close icon in header when closeable is true", () => {
    const wrapper = mount(VConfirmHeader, { props: { closeable: true } });
    expect(wrapper.find("header > .v-confirm__close-icon").exists()).toBe(true);
  });

  it("should emitted click event when clicked to mdi-icon", async () => {
    const wrapper = mount(VConfirmHeader, { props: { closeable: true } });
    await wrapper
      .find("header > .v-confirm__close-icon > button")
      .trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("render a title in header", () => {
    const wrapper = mount(VConfirmHeader, { slots: { default: "Title" } });
    expect(wrapper.find("header > div").text()).toBe("Title");
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("default background color of header is inherit", () => {
    const wrapper = mount(VConfirmHeader);
    expect(wrapper.find("header").attributes().style).toContain(
      "background-color: inherit"
    );
  });

  it("default text color of header is inherit", () => {
    const wrapper = mount(VConfirmHeader, { slots: { default: "Title" } });
    expect(wrapper.find("header > div").attributes().style).toContain(
      "color: inherit"
    );
  });

  it("render a header with class style background color", () => {
    const wrapper = mount(VConfirmHeader, {
      props: { color: "primary" },
      slots: { default: "Title" },
    });
    expect(wrapper.find("header").classes()).toContain("primary");
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a header with css style background color", () => {
    const wrapper = mount(VConfirmHeader, {
      props: { color: "#fff" },
      slots: { default: "Title" },
    });
    expect(wrapper.find("header").attributes().style).toContain(
      "background-color: rgb(255, 255, 255)"
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a header with class style color", () => {
    const wrapper = mount(VConfirmHeader, {
      props: { textColor: "primary" },
      slots: { default: "Title" },
    });
    expect(wrapper.find("header > div").classes()).toContain("primary");
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a header with css style color", () => {
    const wrapper = mount(VConfirmHeader, {
      props: { textColor: "#fff" },
      slots: { default: "Title" },
    });
    expect(wrapper.find("header > div").attributes().style).toContain(
      "color: rgb(255, 255, 255)"
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a dark MdiIcon", () => {
    const wrapper = mount(VConfirmHeader, {
      props: { closeable: true, dark: true },
    });
    expect(
      wrapper.find("header > .v-confirm__close-icon > .mdi-icon.dark").exists()
    ).toBe(true);
  });
});
