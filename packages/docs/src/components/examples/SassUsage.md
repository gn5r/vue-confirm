## importing min.css

<br>

```ts
import { createApp } from "vue";
import App from "./App.vue";
// Importing PlugininFunction and css
import { VConfirmPlugin } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/dist/v-confirm.min.css";

createApp(App).use(VConfirmPlugin).mount("#app");
```

<br>

## use sass

<br>

```scss
@use "@gn5r/vue-confirm";
```

<br>

## Override SASS Variables

<br>

```scss
@use "@gn5r/vue-confirm" with (
  $v-confirm-z-index: 1007
);
```
