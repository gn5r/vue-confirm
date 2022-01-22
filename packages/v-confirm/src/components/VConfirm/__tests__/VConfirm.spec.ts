import { createLocalVue, mount, MountOptions } from "@vue/test-utils";
import VConfirm from "../VConfirm";

describe("VConfirm.ts", () => {
  const localVue = createLocalVue();

  type Instance = InstanceType<typeof VConfirm>;
  const mountFunc = (options?: MountOptions<Instance>) =>
    mount(VConfirm, { localVue, ...options });

  it("render when not active", () => {
    const wrapper = mountFunc();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a close icon in titlebar when default", () => {
    const wrapper = mountFunc({ propsData: { value: true } });
    const closeIcon = wrapper.find(
      ".v-confirm__titlebar > .v-confirm__close-icon"
    );
    expect(wrapper.html()).toMatchSnapshot();
    expect(closeIcon.exists()).toBe(true);
  });

  it("not render a close icon when closeable is false", () => {
    const wrapper = mountFunc({ propsData: { value: true, closeable: false } });
    const closeIcon = wrapper.find(
      ".v-confirm__titlebar > .v-confirm__close-icon"
    );
    expect(wrapper.html()).toMatchSnapshot();
    expect(closeIcon.exists()).toBe(false);
  });

  it("emitted change event when click to close icon", async () => {
    const wrapper = mountFunc({ propsData: { value: true } });
    await wrapper.find(".v-confirm__close-icon > button").trigger("click");
    expect(wrapper.vm.isActive).toBe(false);
    const event = wrapper.emitted().change;
    expect(event).toBeTruthy();
  });

  it("component default width is 800px", () => {
    const wrapper = mountFunc({ propsData: { value: true } });
    const dialog = wrapper.find(".v-confirm__content");
    expect(dialog.attributes().style).toContain("width: 800px");
  });

  it("render a component with custom width", () => {
    const wrapper = mountFunc({ propsData: { value: true, width: "900" } });
    const dialog = wrapper.find(".v-confirm__content");
    expect(dialog.attributes().style).toContain("width: 900px");
  });

  it("render a title text and background-color is inherit", () => {
    const wrapper = mountFunc({ propsData: { value: true, title: "title" } });
    const title = wrapper.find(".v-confirm__titlebar");
    expect(wrapper.html()).toMatchSnapshot();
    expect(title.attributes().style).toContain("background-color: inherit");
  });

  it("render a title with custom background-color", () => {
    const wrapper = mountFunc({
      propsData: { value: true, title: "title", titleColor: "#ffffff" },
    });
    const title = wrapper.find(".v-confirm__titlebar");
    expect(wrapper.html()).toMatchSnapshot();
    expect(title.attributes().style).toContain(
      "background-color: rgb(255, 255, 255)"
    );
  });

  it("render a title with custom text-color", () => {
    const wrapper = mountFunc({
      propsData: { value: true, title: "title", titleTextColor: "#ffffff" },
    });
    const title = wrapper.find(".v-confirm__titlebar > header");
    expect(wrapper.html()).toMatchSnapshot();
    expect(title.attributes().style).toContain("color: rgb(255, 255, 255)");
  });

  it("render a message text", () => {
    const wrapper = mountFunc({
      propsData: { value: true, message: "message" },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a divider and actions when set the btns props", () => {
    const wrapper = mountFunc({
      propsData: { value: true, btns: [{ text: "test", function: jest.fn() }] },
    });
    const divider = wrapper.find(".divider");
    const actions = wrapper.find(".v-confirm__actions");
    expect(wrapper.html()).toMatchSnapshot();
    expect(divider.exists()).toBe(true);
    expect(actions.exists()).toBe(true);
  });

  it("not render a divider when noActionsDivider is true", () => {
    const wrapper = mountFunc({
      propsData: {
        value: true,
        noActionsDivider: true,
        btns: [{ text: "test", function: jest.fn() }],
      },
    });
    const divider = wrapper.find(".divider");
    expect(wrapper.html()).toMatchSnapshot();
    expect(divider.exists()).toBe(false);
  });

  it("button function is execute when click the actions button", async () => {
    const btnFun = jest.fn();
    const wrapper = mountFunc({
      propsData: { value: true, btns: [{ text: "test", function: btnFun }] },
    });
    await wrapper.find(".v-confirm__actions > button").trigger("click");
    expect(btnFun).toBeCalled();
  });
});
