import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ClickOutside from "../";
import { defineComponent } from "vue";

describe("clickOutside", () => {
  it("", async () => {
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
          console.debug("onclick outside");
          emit("click:outside", e);
        }
        return { onClickOutside };
      },
    });

    const wrapper = mount(TestComponent, {
      attachTo: document.body,
    });
    const clickHandler =
      "ontouchstart" in document.documentElement ? "touchstart" : "click";
    console.debug("clickHandler:", clickHandler);
    await wrapper.find(".parent").trigger(clickHandler);
    console.debug(wrapper.emitted());
    expect(wrapper.emitted("click:outside")).toBeTruthy();
  });
});
