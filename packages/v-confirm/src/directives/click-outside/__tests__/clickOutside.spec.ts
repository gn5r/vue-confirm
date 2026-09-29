import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import ClickOutside from "../";
import { defineComponent } from "vue";

const TestComponent = defineComponent({
  directives: {
    ClickOutside,
  },
  template: `
        <div class="parent">
          <div v-click-outside="onClickOutside" class="child"></div>
        </div>
      `,
  setup(_, { emit }) {
    function onClickOutside(e: Event) {
      emit("click:outside", e);
    }
    return { onClickOutside };
  },
});

describe("clickOutside", () => {
  it("should emit click:outside when parent DOM is clicked", async () => {
    const wrapper = mount(TestComponent, {
      attachTo: document.body,
    });
    const clickHandler =
      "ontouchstart" in document.documentElement ? "touchstart" : "click";
    await wrapper.find(".parent").trigger(clickHandler);
    expect(wrapper.emitted("click:outside")).toBeTruthy();
    wrapper.unmount();
  });

  it("should remove event listener when unmounted", async () => {
    const wrapper = mount(TestComponent, {
      attachTo: document.body,
    });
    const spy = vi.spyOn(document, "removeEventListener");
    wrapper.unmount();
    const clickHandler =
      "ontouchstart" in document.documentElement ? "touchstart" : "click";
    await document.body.dispatchEvent(new Event(clickHandler));
    expect(spy).toHaveBeenCalled();
    expect(wrapper.emitted("click:outside")).toBeFalsy();
  });
});
