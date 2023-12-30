---
next:
  text: "SASS Variables"
  link: "/guide/sass-variables"
---

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

<Suspense>
  <PropsTable :items="propsItems" />
  <template #fallback>
    Loading...
  </template>
</Suspense>

## Events

<Suspense>
  <EventsTable :items="eventsItems" />
  <template #fallback>
    Loading...
  </template>
</Suspense>

## Slots

<Suspense>
  <SlotsTable :items="slotsItems" />
  <template #fallback>
    Loading...
  </template>
</Suspense>
