<template>
  <v-card>
    <v-card-title class="text-h5">v-confirm API</v-card-title>
    <v-card-text class="pa-0">
      <v-container fluid>
        <v-row>
          <v-col>
            <span class="text-h5">Props</span>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col>
            <props-table :items="propsItems" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <span class="text-h5">Events</span>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col>
            <events-table :items="eventsItems" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

import PropsTable from "@/components/api/PropsTable.vue";
import EventsTable from "@/components/api/EventsTable.vue";

import type { PropsTableItem, EventsTableItem } from "types";

export default defineComponent({
  name: "VCApi",
  props: {},
  setup() {
    const { t } = useI18n();
    const propsItems = ref<Array<PropsTableItem>>([
      {
        name: "btn-align",
        type: "'start' | 'center' | 'end' | 'space-between' | 'space-around'",
        default: "'end'",
        description: t("props.btn-align"),
      },
      {
        name: "btns",
        type: [
          "{",
          "\tclass: string | string[]",
          "\tcolor: string",
          "\tfunction: () => void",
          "\ttext: string",
          "\ttextColor: string",
          "}[]",
        ].join("\n"),
        default: "[]",
        description: t("props.btns"),
      },
      {
        name: "closeable",
        type: "boolean",
        default: "false",
        description: t("props.closeable"),
      },
      {
        name: "dark",
        type: "boolean",
        default: "false",
        description: t("props.dark"),
      },
      {
        name: "hide-header",
        type: "boolean",
        default: "false",
        description: t("props.hide-header"),
      },
      {
        name: "message",
        type: "string",
        default: "undefined",
        description: t("props.message"),
      },
      {
        name: "model-value",
        type: "boolean",
        default: "false",
        description: t("props.model-value"),
      },
      {
        name: "no-actions-divider",
        type: "boolean",
        default: "false",
        description: t("props.no-actions-divider"),
      },
      {
        name: "persistent",
        type: "boolean",
        default: "false",
        description: t("props.persistent"),
      },
      {
        name: "title",
        type: "string",
        default: "undefined",
        description: t("props.title"),
      },
      {
        name: "title-color",
        type: "string",
        default: "'inherit'",
        description: t("props.title-color"),
      },
      {
        name: "title-text-color",
        type: "string",
        default: "'inherit'",
        description: t("props.title-text-color"),
      },
      {
        name: "width",
        type: "string | number",
        default: "800",
        description: t("props.width"),
      },
    ]);

    const eventsItems = ref<Array<EventsTableItem>>([
      {
        name: "click:outside",
        type: "PointerEvent",
        description: t("events.click:outside"),
      },
      {
        name: "update:modelValue",
        type: "boolean",
        description: t("events.update:modelValue"),
      },
    ]);

    return { propsItems, eventsItems };
  },
  components: { PropsTable, EventsTable },
});
</script>

<style lang="sass" scoped></style>
