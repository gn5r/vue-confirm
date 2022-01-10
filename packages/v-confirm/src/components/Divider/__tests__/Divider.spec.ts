import { createLocalVue, mount } from "@vue/test-utils";
import Divider from "../Divider";

describe("Divider.ts", () => {
  const localVue = createLocalVue();

  it("should render", () => {
    const wrapper = mount(Divider, localVue);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
