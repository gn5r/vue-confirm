<template>
  <pre v-html="highlight(code)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import type { PropType } from "vue"

import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import "prismjs/components/prism-sass.js";
import "prismjs/components/prism-scss.js";
import "prismjs/components/prism-typescript.js";

export default defineComponent({
  name: "prism-cell",
  props: {
    code: null,
    lang: {
      type: String as PropType<"typescript" | "sass" | "scss">,
      default: "typescript"
    }
  },
  setup(props) {
    const LANG = {
      sass: [Prism.languages.sass, "sass"] as const,
      scss: [Prism.languages.scss, "scss"] as const,
      typescript: [Prism.languages.typescript, "ts"] as const,
    };

    function highlight(val: string) {
      const code = typeof val === "object" ? JSON.stringify(val) : val;
      const [grammar, lang] = LANG[props.lang];
      const highlighted = Prism.highlight(code, grammar, lang);
      return highlighted;
    }

    return { highlight }
  },
  components: {},
});
</script>

<style scoped></style>