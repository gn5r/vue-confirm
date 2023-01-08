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
        <tr
          v-for="(item, i) in items"
          :key="i"
          :class="theme.dark ? 'bg-grey-darken-3' : 'bg-grey-lighten-4'"
        >
          <td class="font-weight-medium">{{ item.name }}</td>
          <td>
            <prism-cell :code="item.type" />
          </td>
          <td>
            <prism-cell :code="item.default" />
          </td>
          <td class="description">
            {{ item.description }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useTheme } from "vuetify";

import type { PropType } from "vue";
import type { PropsTableItem } from "types";

import PrismCell from "./PrismCell.vue";

export default defineComponent({
  name: "props-table",
  props: {
    items: {
      type: Array as PropType<Array<PropsTableItem>>,
      default: () => [],
    },
  },
  setup() {
    const headers = ref<Array<string>>([
      "Name",
      "Type",
      "Default",
      "Description",
    ]);

    const { current: theme } = useTheme();

    return { headers, theme };
  },
  components: { PrismCell },
});
</script>

<style lang="scss"></style>
