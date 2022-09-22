import Vue from "vue";

import { VNode } from "vue/types";

import "./Divider.scss";

export default Vue.extend({
  name: "divider",
  props: {
    dark: Boolean,
  },
  computed: {
    classes(): object {
      return {
        light: !this.dark,
        dark: this.dark,
        divider: true,
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
