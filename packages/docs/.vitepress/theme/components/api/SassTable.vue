<template>
  <v-sheet border rounded>
    <v-table class="api-table">
      <thead>
        <tr>
          <th class="font-weight-medium" style="width: 40%">Name</th>
          <th class="font-weight-medium" style="width: 60%">Default</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in items"
          :key="i"
          :class="theme.dark ? 'bg-grey-darken-3' : 'bg-grey-lighten-4'"
        >
          <td
            class="language-scss vp-adaptive-theme"
            v-html="highlight(item.name)"
          />
          <td
            class="language-scss vp-adaptive-theme"
            v-html="highlight(item.default)"
          />
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from "vue";
import { useTheme } from "vuetify";
import { useHighlighter, useShikijiOptions } from "@theme/composables/shikiji";

import type { SassTableItem } from "@theme/composables/sass";

defineProps({
  items: {
    type: Array as PropType<Array<SassTableItem>>,
    default: () => [],
  },
});

const { current: theme } = useTheme();
const highlighter = await useHighlighter();

function highlight(val?: string) {
  let code = "";
  if (val) {
    code = typeof val === "object" ? JSON.stringify(val) : val;
  }
  return highlighter.codeToHtml(code, {
    ...useShikijiOptions("scss"),
  });
}
</script>

<style lang="sass" scoped></style>
