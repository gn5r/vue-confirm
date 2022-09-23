// Types
import { VNode } from "vue";

// Style
import "./MdiIcon.scss";

// Helpers
import { getSize } from "../../utils/helper";
import { setTextColor } from "../../utils/colorUtil";

// Mixins
import Themeable from "../../mixins/themeable";

export default Themeable.extend({
  name: "icon",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: "inherit",
    },
  },
  computed: {
    hasClickListener(): boolean {
      return Boolean(this.$listeners.click);
    },
    classes(): object {
      return {
        "mdi-icon": true,
        ...this.themeClasses,
      };
    },
  },
  render(h): VNode {
    let iconName = "";
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (this.$slots.default) iconName = this.$slots.default[0].text!.trim();
    const fontSize = getSize(this.size);
    const data = {
      attrs: {
        "area-hidden": !this.hasClickListener,
        type: this.hasClickListener ? "button" : undefined,
      },
      class: this.classes,
      style: {
        width: `${fontSize}px`,
        height: `${fontSize + 12}px`,
      },
      on: this.$listeners,
    };
    return h(
      this.hasClickListener ? "button" : "span",
      setTextColor(this.color, data),
      [
        h(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              role: "img",
              "area-hidden": true,
            },
            style: {
              "font-size": `${fontSize}px`,
              width: `${fontSize}px`,
              height: `${fontSize}px`,
              fill: "currentColor",
              "vertical-align": "middle",
            },
          },
          [
            h("path", {
              attrs: { d: iconName },
            }),
          ]
        ),
      ]
    );
  },
});
