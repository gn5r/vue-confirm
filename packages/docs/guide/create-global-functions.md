---
title: Create global functions
prev:
  text: "SASS Variables"
  link: "/guide/sass-variables"
next: false
---

# Create actions using store such as pinia

If you use `pinia` in your project, you can create a store with defined global functions.

## Store sample

First, create a Store for vue-confirm.

```ts
// src/store/vconfirm.ts
import { defineStore } from "pinia";

import type { VConfirmProps } from "@gn5r/vue-confirm";

interface State extends VConfirmProps {}

export const useVConfirmStore = defineStore("vconfirm", {
  state: (): State => ({
    btnAlign: "end",
    btns: [],
    closeable: false,
    dark: false,
    hideHeader: false,
    message: "",
    modelValue: false,
    noActionsDivider: false,
    persistent: false,
    title: "",
    titleColor: "",
    titleTextColor: "",
    width: 800,
  }),
  actions: {
    confirm(message?: string): Promise<boolean> {
      return new Promise<boolean>((resolve) => {
        if (message) this.message = message;
        this.title = "Confirm";
        this.titleColor = "#2196f3";
        this.titleTextColor = "#ffffff";
        this.btns = [
          {
            text: "OK",
            textColor: "#ffffff",
            color: "#2196F3",
            onClick: () => {
              this.modelValue = false;
              return resolve(true);
            },
          },
          {
            text: "NO",
            onClick: () => {
              this.modelValue = false;
              return resolve(false);
            },
          },
        ];
        this.modelValue = true;
      });
    },
  },
});
```

<h2 id="app-vue" tabIndex="-1">
  Define v-confirm component in App.vue
  <a class="header-anchor" href="#app-vue" aria-label="Permalink to &quot;Define v-confirm component in App.vue&quot;">&ZeroWidthSpace;</a>
</h2>

Next, define `v-confirm` in a top-level vue component, such as App.vue.

```vue
<!-- App.vue -->
<template>
  <v-confirm
    v-model="config.modelValue"
    :btn-align="config.btnAlign"
    :btns="config.btns"
    :closeable="config.closeable"
    :dark="config.dark"
    :hide-header="config.hideHeader"
    :message="config.message"
    :no-actions-divider="config.noActionsDivider"
    :persistent="config.persistent"
    :title="config.title"
    :title-color="config.titleColor"
    :title-text-color="config.titleTextColor"
    :width="config.width"
  />
</template>
<script setup lang="ts">
import VConfirm from "@gn5r/vue-confirm";
import { useVConfirmStore } from "@/store/vconfirm";

const config = useVConfirmStore();
</script>
```

## Usage actions

Actions defined in Store can be used as follows.

```vue
<!-- Child.vue -->
<template>
  <div>
    <!-- some DOMs... -->
    <button @click="submit">confirm</button>
  </div>
</template>
<script setup lang="ts">
import { useVConfirmStore } from "@/store/vconfirm";

const vconfirm = useVConfirmStore();

async function submit() {
  if (await vconfirm.confirm("Confirm submission?")) {
    // Describe the process when the "OK" button is clicked.
  } else {
    // Describe the process when the "NO" button is clicked.
  }
}
</script>
```
