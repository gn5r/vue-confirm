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

        <v-row>
          <v-col>
            <span class="text-h5">Slots</span>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col>
            <slots-table :items="slotsItems" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import {
  usePropsTableItems,
  useEventsTableItems,
  useSlotsTableItems,
} from "@/composables/api";

import PropsTable from "@/components/api/PropsTable.vue";
import EventsTable from "@/components/api/EventsTable.vue";
import SlotsTable from "@/components/api/SlotsTable.vue";

const propsItems = usePropsTableItems();
const eventsItems = useEventsTableItems();
const slotsItems = useSlotsTableItems();
</script>

<style lang="sass" scoped></style>
