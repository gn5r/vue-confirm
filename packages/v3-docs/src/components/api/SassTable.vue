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
          <!-- <td class="font-weight-medium">{{ item.name }}</td> -->
          <td>
            <prism-cell :code="item.name" lang="scss" />
          </td>
          <td>
            <prism-cell :code="item.default" lang="scss" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useTheme } from "vuetify";

import type { PropType } from "vue";
import type { SassTableItem } from "../../composables/sass";

import PrismCell from "./PrismCell.vue";

defineProps({
  items: {
    type: Array as PropType<Array<SassTableItem>>,
    default: () => [],
  },
});
const { current: theme } = useTheme();
</script>

<style scoped></style>
