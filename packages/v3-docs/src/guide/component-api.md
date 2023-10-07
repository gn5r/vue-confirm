<script setup>
import {
  usePropsTableItems,
  useEventsTableItems,
  useSlotsTableItems,
} from "@theme/composables/api";

import PropsTable from "@theme/components/api/PropsTable.vue"
import EventsTable from "@theme/components/api/EventsTable.vue"
import SlotsTable from "@theme/components/api/SlotsTable.vue"

const propsItems = usePropsTableItems();
const eventsItems = useEventsTableItems();
const slotsItems = useSlotsTableItems();
</script>

# Component API

## Props

<PropsTable :items="propsItems" />

## Events

<EventsTable :items="eventsItems" />

## Slots

<SlotsTable :items="slotsItems" />
