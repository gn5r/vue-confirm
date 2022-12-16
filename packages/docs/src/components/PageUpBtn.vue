<template>
  <mdi-icon class="d-lg-none" color="#fff" :style="styles" @click="scrollTop">{{ mdiClose }}</mdi-icon>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import { MdiIcon } from "@gn5r/vue-confirm/lib/components";

import { mdiArrowUpThick } from "@mdi/js";

export default defineComponent({
  name: "page-up-btn",
  setup() {
    const styles = ref(
      {
        position: "fixed",
        right: "8px",
        bottom: "12px",
        width: "40px !important",
        height: "40px !important",
        "background-color": "#607d8b",
        "border-radius": "50%",
        opacity: "0.8",
      }
    );
    const mdiClose = ref(mdiArrowUpThick);
    return {
      styles,
      mdiClose,
      scrollTop: () => (window.scrollTo({ top: 0, behavior: "smooth" }))
    }
  },
  components: {
    MdiIcon,
  }
});
</script>
