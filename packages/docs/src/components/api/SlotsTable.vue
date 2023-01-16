<template>
  <v-sheet border rounded>
    <v-table>
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
        <template v-for="(item, i) in items" :key="i">
          <tr :class="theme.dark ? 'bg-grey-darken-3' : 'bg-grey-lighten-4'">
            <td class="font-weight-medium">{{ item.name }}</td>
            <td>
              <prism-cell :code="item.type" />
            </td>
          </tr>
        </template>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useTheme } from "vuetify";

import type { PropType } from "vue";
import type { SlotsTableItem } from "types";

import PrismCell from "./PrismCell.vue";

export default defineComponent({
  name: "slots-table",
  props: {
    items: {
      type: Array as PropType<Array<SlotsTableItem>>,
      default: () => [],
    },
  },
  setup() {
    const headers = ref<Array<string>>(["Name", "Type"]);
    const { current: theme } = useTheme();

    return { headers, theme };
  },
  components: { PrismCell },
});
</script>

<style scoped></style>
