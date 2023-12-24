# Getting Started

## Installation

::: code-group

```sh [npm]
npm i @gn5r/vue-confirm
```

```sh [yarn]
yarn add @gn5r/vue-confirm
```

:::

## Usage

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import { createVConfirm } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/styles";

const app = createApp(App);
const vconfirm = createVConfirm();
app.use(vconfirm).mount("#app");
```

```vue
<!-- App.vue -->
<template>
  <button type="button" @click="show">show</button>
  <v-confirm
    v-model="config.modelValue"
    :title="config.title"
    :message="config.message"
    :btns="config.btns"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VConfirmProps } from "@gn5r/vue-confirm";

const config = ref<VConfirmProps>({
  modelValue: false,
  title: "title",
  message: "message!",
  btns: [],
});

function show() {
  config.value.btns = [
    {
      text: "OK",
      onClick: () => (config.value.modelValue = false),
    },
  ];
  config.value.modelValue = true;
}
</script>
```
