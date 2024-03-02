---
prev:
  text: "Component API"
  link: "/guide/component-api"
next:
  text: "Create global functions"
  link: "/guide/create-global-functions"
---

<script setup>
import { useThemeSassItems, useVConfirmSassItems } from "@theme/composables/sass";

import SassTable from "@theme/components/api/SassTable.vue"

const themeItems = useThemeSassItems();
const vconfirmItems = useVConfirmSassItems();
</script>

# SASS Variables

## theme

<Suspense>
  <SassTable :items="themeItems" />
  <template #fallback>
    Loading...
  </template>
</Suspense>

## v-confirm

<Suspense>
  <SassTable :items="vconfirmItems" />
  <template #fallback>
    Loading...
  </template>
</Suspense>

## Usage

### Importing sass

```scss
// main.scss
@use "@gn5r/vue-confirm";
```

### Override SASS Variables

```scss
// main.scss
@use "@gn5r/vue-confirm" with (
  $v-confirm-z-index: 1007
);
```
