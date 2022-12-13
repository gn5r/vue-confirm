// Vue
import { defineComponent, h } from "vue";

// Style
import "./MdiIcon.scss";

// Helpers
import { getSize } from "../../utils/helper";
import { setTextColor } from "../../utils/colorUtil";

// Mixins
import Themeable from "../../mixins/themeable";

export default defineComponent({
  name: "icon",
  mixins: [Themeable],
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
      return Boolean(this.$attrs.click);
    },
    classes(): object {
      return {
        "mdi-icon": true,
        ...this.themeClasses,
      };
    },
  },
  render() {
    let iconName = "";
    if (this.$slots.default)
      iconName = (this.$slots.default()[0].children as string).trim();
    const fontSize = getSize(this.size);
    const data = {
      "area-hidden": !this.hasClickListener,
      type: this.hasClickListener ? "button" : undefined,
      class: this.classes,
      style: {
        width: `${fontSize}px`,
        height: `${fontSize + 12}px`,
      },
      onClick: this.hasClickListener ? this.$attrs.click : undefined,
    };
    return h(
      this.hasClickListener ? "button" : "span",
      setTextColor(this.color, data),
      [
        h(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            role: "img",
            "area-hidden": true,
            style: {
              "font-size": `${fontSize}px`,
              width: `${fontSize}px`,
              height: `${fontSize}px`,
              fill: "currentColor",
              "vertical-align": "middle",
            },
          },
          [h("path", { d: iconName })]
        ),
      ]
    );
  },
});
