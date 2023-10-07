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

# コンポーネント API

## Props

<PropsTable :items="propsItems" />

<h2 id="events" tabIndex="-1">
  イベント
  <a class="header-anchor" href="#events" aria-label="Permalink to &quot;イベント&quot;">&ZeroWidthSpace;</a>
</h2>

<EventsTable :items="eventsItems" />

<h2 id="slots" tabIndex="-1">
  スロット
  <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;スロット&quot;">&ZeroWidthSpace;</a>
</h2>

<SlotsTable :items="slotsItems" />
