// Mixins
import Themeable from "../../mixins/themeable";

// Types
import { VNode } from "vue/types";

// Style
import "./Divider.scss";

export default Themeable.extend({
  name: "divider",
  computed: {
    classes(): object {
      return {
        divider: true,
        ...this.themeClasses,
      };
    },
  },
  render(h): VNode {
    return h("hr", {
      attrs: { role: "separator", "area-orientation": "horizontal" },
      class: this.classes,
    });
  },
});
