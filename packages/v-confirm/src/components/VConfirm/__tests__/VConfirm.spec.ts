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
});
