<template>
  <v-card>
    <v-card-title class="text-h5">{{ t("sass-vars") }}</v-card-title>
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

        <v-row>
          <v-col>
            <span class="text-h5">{{ t("usage") }}</span>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <sass-usage />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useThemeSassItems, useVConfirmSassItems } from "@/composables/sass";

import SassTable from "@/components/api/SassTable.vue";
import SassUsage from "@/components/examples/SassUsage.md";

const themeItems = useThemeSassItems();
const vconfirmItems = useVConfirmSassItems();
const { t } = useI18n();
</script>

<style lang="sass" scoped></style>
