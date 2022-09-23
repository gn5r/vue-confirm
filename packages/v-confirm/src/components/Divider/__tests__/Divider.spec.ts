import { createLocalVue, mount, MountOptions } from "@vue/test-utils";
import Divider from "../Divider";

describe("Divider.ts", () => {
  const localVue = createLocalVue();

  type Instance = InstanceType<typeof Divider>;
  const mountFunc = (options?: MountOptions<Instance>) =>
    mount(Divider, { localVue, ...options });

  it("should render", () => {
    const wrapper = mountFunc();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("render a dark component", () => {
    const wrapper = mountFunc({
      propsData: { dark: true },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
