# 始めましょう

## インストールの仕方

### npm を使う場合

```sh
npm i @gn5r/vue-confirm
```

### yarn を使う場合

```sh
yarn add @gn5r/vue-confirm
```

## 使い方

```ts
// main.ts
import { createApp } from "vue";

import { VConfirmPlugin } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/dist/v-confirm.min.css";

const app = createApp();
app.use(VConfirmPlugin).mount("#app");
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
