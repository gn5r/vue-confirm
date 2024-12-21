import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { VConfirmActions } from "../VConfirmActions";
import type { VConfirmBtn } from "@gn5r/vue-confirm";

describe("VConfirmActions.tsx", () => {
  it("render a component", () => {
    const wrapper = mount(VConfirmActions);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("not render a button when btns is empty", () => {
    const wrapper = mount(VConfirmActions);
    expect(wrapper.find(".v-confirm__actions > button").exists()).toBe(false);
  });

  it("should have justify-content value of 'end' in div's style when using default props", () => {
    const wrapper = mount(VConfirmActions);
    expect(wrapper.find(".v-confirm__actions").attributes().style).toContain(
      "justify-content: end"
    );
  });

  it("should set justify-content value to btnAlign value when specified in props", () => {
    const wrapper = mount(VConfirmActions, { props: { btnAlign: "start" } });
    expect(wrapper.find(".v-confirm__actions").attributes().style).toContain(
      "justify-content: start"
    );
  });

  it("render buttons", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
        onClick: vi.fn(),
      },
      {
        text: "NO",
        onClick: vi.fn(),
      },
    ];
    const wrapper = mount(VConfirmActions, { props: { btns: btns } });
    expect(wrapper.find(".v-confirm__actions > button").exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a text in button", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
        onClick: vi.fn(),
      },
    ];
    const wrapper = mount(VConfirmActions, { props: { btns: btns } });
    expect(wrapper.find(".v-confirm__actions > button").text()).toBe("OK");
  });

  it("should default class is .button of button", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
        onClick: vi.fn(),
      },
    ];
    const wrapper = mount(VConfirmActions, { props: { btns: btns } });
    expect(wrapper.find(".v-confirm__actions > button.button").exists()).toBe(
      true
    );
  });

  it("should set button class to the specified class value in btns", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
        class: "btn",
        onClick: vi.fn(),
      },
    ];
    const wrapper = mount(VConfirmActions, { props: { btns: btns } });
    expect(wrapper.find(".v-confirm__actions > button.button").exists()).toBe(
      false
    );
    expect(wrapper.find(".v-confirm__actions > button.btn").exists()).toBe(
      true
    );
  });

  it("render a button with class style background color", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
        color: "primary",
        onClick: vi.fn(),
      },
    ];
    const wrapper = mount(VConfirmActions, { props: { btns: btns } });
    expect(wrapper.find(".v-confirm__actions > button").classes()).toContain(
      "primary"
    );
  });

  it("render a button with css style background color", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
        color: "#fff",
        onClick: vi.fn(),
      },
    ];
    const wrapper = mount(VConfirmActions, { props: { btns: btns } });
    expect(
      wrapper.find(".v-confirm__actions > button").attributes().style
    ).toContain("background-color: rgb(255, 255, 255)");
  });

  it("render a button with class style color", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
        textColor: "white--text",
        onClick: vi.fn(),
      },
    ];
    const wrapper = mount(VConfirmActions, { props: { btns: btns } });
    expect(wrapper.find(".v-confirm__actions > button").classes()).toContain(
      "white--text"
    );
  });

  it("render a button with css style color", () => {
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
        textColor: "#fff",
        onClick: vi.fn(),
      },
    ];
    const wrapper = mount(VConfirmActions, { props: { btns: btns } });
    expect(
      wrapper.find(".v-confirm__actions > button").attributes().style
    ).toContain("color: rgb(255, 255, 255); caret-color: #fff");
  });

  it("should execute button function when button is clicked", async () => {
    const btnFunc = vi.fn();
    const btns: VConfirmBtn[] = [
      {
        text: "OK",
        onClick: btnFunc,
      },
    ];
    const wrapper = mount(VConfirmActions, { props: { btns: btns } });
    await wrapper.find(".v-confirm__actions > button").trigger("click");
    expect(btnFunc).toHaveBeenCalledTimes(1);
  });
});
