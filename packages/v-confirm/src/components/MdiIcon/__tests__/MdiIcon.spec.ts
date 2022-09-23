import { createLocalVue, mount, MountOptions } from "@vue/test-utils";
import Icon from "../MdiIcon";
import { mdiClose, mdiPencil } from "@mdi/js";

describe("MdiIcon.ts", () => {
  const localVue = createLocalVue();

  type Instance = InstanceType<typeof Icon>;
  const mountFunc = (options?: MountOptions<Instance>) =>
    mount(Icon, { localVue, ...options });

  it("should render mdi icon", () => {
    const wrapper = mountFunc({ slots: { default: [mdiClose] } });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render button when having click listener", () => {
    const func = jest.fn(() => "hello");
    const wrapper = mountFunc({
      slots: { default: [mdiPencil] },
      listeners: {
        click: func,
      },
    });
    const button = wrapper.find("button");
    expect(wrapper.html()).toMatchSnapshot();
    expect(button.exists()).toBe(true);
  });

  it("render a dark component", () => {
    const wrapper = mountFunc({ propsData: { dark: true } });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
