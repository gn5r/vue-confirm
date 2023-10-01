<script setup>
import {
  usePropsTableItems,
  useEventsTableItems,
  useSlotsTableItems,
} from "../composables/api";

import PropsTable from "../components/api/PropsTable.vue"
import EventsTable from "../components/api/EventsTable.vue"
import SlotsTable from "../components/api/SlotsTable.vue"

const propsItems = usePropsTableItems();
const eventsItems = useEventsTableItems();
const slotsItems = useSlotsTableItems();
</script>

# Vue Confirm API

## Props

<PropsTable :items="propsItems" />

## Events

<EventsTable :items="eventsItems" />

## Slots

<SlotsTable :items="slotsItems" />
