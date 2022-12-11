import Vue from "vue";

import MdiIcon from "@gn5r/vue-confirm/src/components/MdiIcon/MdiIcon";

import { mdiArrowUpThick } from "@mdi/js";

export default Vue.extend({
  name: "page-up-btn",
  render() {
    return this.$createElement(
      MdiIcon,
      {
        class: "d-lg-none",
        style: {
          position: "fixed",
          right: "8px",
          bottom: "12px",
          width: "40px !important",
          height: "40px !important",
          "background-color": "#607d8b",
          "border-radius": "50%",
          opacity: "0.8",
        },
        props: {
          color: "#fff",
        },
        on: {
          click: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        },
      },
      [mdiArrowUpThick]
    );
  },
});
