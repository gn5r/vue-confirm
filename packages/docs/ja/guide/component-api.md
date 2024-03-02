---
next:
  text: "SASS変数"
  link: "/ja/guide/sass-variables"
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

# コンポーネント API

## Props

<Suspense>
  <PropsTable :items="propsItems" />
  <template #fallback>
    読み込み中...
  </template>
</Suspense>

<h2 id="events" tabIndex="-1">
  イベント
  <a class="header-anchor" href="#events" aria-label="Permalink to &quot;イベント&quot;">&ZeroWidthSpace;</a>
</h2>

<Suspense>
  <EventsTable :items="eventsItems" />
  <template #fallback>
    読み込み中...
  </template>
</Suspense>

<h2 id="slots" tabIndex="-1">
  スロット
  <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;スロット&quot;">&ZeroWidthSpace;</a>
</h2>

<Suspense>
  <SlotsTable :items="slotsItems" />
  <template #fallback>
    読み込み中...
  </template>
</Suspense>
