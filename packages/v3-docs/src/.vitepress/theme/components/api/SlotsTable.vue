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
          <td>
            <prism-cell :code="item.type" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useTheme } from "vuetify";

import type { PropType } from "vue";
import type { SlotsTableItem } from "@theme/composables/api";

import PrismCell from "./PrismCell.vue";

defineProps({
  items: {
    type: Array as PropType<Array<SlotsTableItem>>,
    default: () => [],
  },
});

const headers = ref<Array<string>>(["Name", "Type"]);
const { current: theme } = useTheme();
</script>

<style scoped></style>
