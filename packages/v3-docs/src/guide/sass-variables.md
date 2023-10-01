<script setup>
import { useThemeSassItems, useVConfirmSassItems } from "../composables/sass";

import SassTable from "../components/api/SassTable.vue"

const themeItems = useThemeSassItems();
const vconfirmItems = useVConfirmSassItems();
</script>

# SASS Variables

## theme

<SassTable :items="themeItems" />

## v-confirm

<SassTable :items="vconfirmItems" />

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
