import Vue from "vue";

import { VNode } from "vue/types";

import "./Divider.scss";

export default Vue.extend({
  name: "divider",
  render(h): VNode {
    return h("hr", {
      attrs: { role: "separator", "area-orientation": "horizontal" },
      class: "divider",
    });
  },
});
