<template>
  <v-sheet border rounded>
    <v-table class="api-table">
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            class="font-weight-medium"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in items"
          :key="i"
          :class="theme.dark ? 'bg-grey-darken-3' : 'bg-grey-lighten-4'"
        >
          <td class="font-weight-medium">{{ item.name }}</td>
          <td
            class="language-ts vp-adaptive-theme"
            v-html="highlight(item.type)"
          />
          <td
            class="language-ts vp-adaptive-theme"
            v-html="highlight(item.default)"
          />
          <td class="description">
            {{ item.description }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup lang="ts">
import { defineProps, ref, type PropType } from "vue";
import { useTheme } from "vuetify";
import { useHighlighter, useShikijiOptions } from "@theme/composables/shikiji";

import type { PropsTableItem } from "@theme/composables/api";

defineProps({
  items: {
    type: Array as PropType<Array<PropsTableItem>>,
    default: () => [],
  },
});

const headers = ref<Array<string>>(["Name", "Type", "Default", "Description"]);
const { current: theme } = useTheme();
const highlighter = await useHighlighter();

function highlight(val?: string) {
  let code = "";
  if (val) {
    code = typeof val === "object" ? JSON.stringify(val) : val;
  }
  return highlighter.codeToHtml(code, {
    ...useShikijiOptions(),
  });
}
</script>

<style lang="sass" scoped></style>
