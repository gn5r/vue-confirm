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
});
