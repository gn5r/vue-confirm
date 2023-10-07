<template>
  <pre v-html="highlight(code)" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import type { PropType } from "vue";

import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import "prismjs/components/prism-sass.js";
import "prismjs/components/prism-scss.js";
import "prismjs/components/prism-typescript.js";

const props = defineProps({
  code: null,
  lang: {
    type: String as PropType<"typescript" | "sass" | "scss">,
    default: "typescript",
  },
});
const LANG = {
  sass: [Prism.languages.sass, "sass"] as const,
  scss: [Prism.languages.scss, "scss"] as const,
  typescript: [Prism.languages.typescript, "ts"] as const,
};

function highlight(val: string) {
  const code = typeof val === "object" ? JSON.stringify(val) : val;
  const [grammar, lang] = LANG[props.lang];
  return Prism.highlight(code, grammar, lang);
}
</script>

<style lang="sass" scoped></style>
