<template>
  <v-card>
    <v-card-title class="text-h5">SASS Variables</v-card-title>
    <v-card-text class="pa-0">
      <v-container fluid>
        <v-row>
          <v-col>
            <span class="text-h5">theme</span>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col>
            <sass-table :items="themeItems" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="text-h5">v-confirm</span>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col>
            <sass-table :items="vconfirmItems" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

import type { SassTableItem } from "types";

import SassTable from "@/components/api/SassTable.vue";

const themeItems = ref<Array<SassTableItem>>([
  {
    name: "$light-theme",
    default: [
      "(",
      "\t'background': #eee",
      "\t'text-color': #000",
      "\t'divider': rgba(#000, 0.12)",
      ")",
    ].join("\n"),
  },
  {
    name: "$dark-theme",
    default: [
      "(",
      "\t'background': #1e1e1e",
      "\t'text-color': #fff",
      "\t'divider': rgba(#fff, 0.12)",
      ")",
    ].join("\n"),
  },
]);

const vconfirmItems = ref<Array<SassTableItem>>([
  {
    name: "$v-confirm-actions-button-height",
    default: "36px",
  },
  {
    name: "$v-confirm-actions-button-margin-size",
    default: "0 0 0 8px",
  },
  {
    name: "$v-confirm-actions-button-min-width",
    default: "64px",
  },
  {
    name: "$v-confirm-actions-padding",
    default: "8px",
  },
  {
    name: "$v-confirm-animation",
    default: "bounce 0.2s",
  },
  {
    name: "$v-confirm-button-border-radius",
    default: "4px",
  },
  {
    name: "$v-confirm-button-color",
    default: "#1867c0",
  },
  {
    name: "$v-confirm-button-font-size",
    default: "0.857rem",
  },
  {
    name: "$v-confirm-button-font-weight",
    default: "500",
  },
  {
    name: "$v-confirm-button-hover-opacity",
    default: "0.08",
  },
  {
    name: "$v-confirm-button-padding",
    default: "0 8px",
  },
  {
    name: "$v-confirm-button-white-space",
    default: "nowrap",
  },
  {
    name: "$v-confirm-content-border-radius",
    default: "3px",
  },
  {
    name: "$v-confirm-content-box-shadow",
    default: "1px 2px 3px 4px rgba(12, 12, 12, 0.2)",
  },
  {
    name: "$v-confirm-content-max-width",
    default: "95%",
  },
  {
    name: "$v-confirm-header-font-size",
    default: "24px",
  },
  {
    name: "$v-confirm-header-font-weight",
    default: "bold",
  },
  {
    name: "$v-confirm-header-min-height",
    default: "36px",
  },
  {
    name: "$v-confirm-header-padding",
    default: "8px 12px",
  },
  {
    name: "$v-confirm-message-font-size",
    default: "large",
  },
  {
    name: "$v-confirm-message-font-weigth",
    default: "normal",
  },
  {
    name: "$v-confirm-message-overflow-wrap",
    default: "break-word",
  },
  {
    name: "$v-confirm-message-padding",
    default: "8px 16px",
  },
  {
    name: "$v-confirm-message-white-space",
    default: "pre-wrap",
  },
  {
    name: "$v-confirm-overlay-background-color",
    default: "rgba(0, 0, 0, 0.5)",
  },
  {
    name: "$v-confirm-transition-enter-active",
    default: "opacity 0.2s ease-in",
  },
  {
    name: "$v-confirm-transition-leave-active",
    default: "opacity 0.3s ease-out",
  },
]);
</script>

<style lang="sass" scoped></style>
