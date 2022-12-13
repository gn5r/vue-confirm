// Vue
import { defineComponent, h } from "vue";

// Mixins
import Themeable from "../../mixins/themeable";

// Style
import "./Divider.scss";

export default defineComponent({
  name: "divider",
  mixins: [Themeable],
  computed: {
    classes(): object {
      return {
        divider: true,
        ...this.themeClasses,
      };
    },
  },
  render() {
    return h("hr", {
      role: "separator",
      "area-orientation": "horizontal",
      class: this.classes,
    });
  },
});
