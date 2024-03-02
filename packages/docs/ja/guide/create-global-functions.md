---
title: グローバル関数を作成する
prev:
  text: "SASS変数"
  link: "/ja/guide/sass-variables"
next: false
---

# piniaのようなStoreを使いアクションを作成する

もし、あなたのプロジェクトで`pinia`を使用している場合、Storeを使いグローバル関数を作成することができます。

<h2 id="store-sample" tabIndex="-1">
  ストアサンプル
  <a class="header-anchor" href="#store-sample" aria-label="Permalink to &quot;ストアサンプル&quot;">&ZeroWidthSpace;</a>
</h2>

初めに、vue-confirm用のStoreを作成します。

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
        this.title = "確認";
        this.titleColor = "#2196f3";
        this.titleTextColor = "#ffffff";
        this.btns = [
          {
            text: "はい",
            textColor: "#ffffff",
            color: "#2196F3",
            onClick: () => {
              this.modelValue = false;
              return resolve(true);
            },
          },
          {
            text: "いいえ",
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
  App.vueでv-confirmを定義する
  <a class="header-anchor" href="#app-vue" aria-label="Permalink to &quot;App.vueでv-confirmを定義する&quot;">&ZeroWidthSpace;</a>
</h2>

次に、App.vueのようなトップレベルのVueコンポーネントに`v-confirm`を定義します。

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

<h2 id="usage-actions" tabIndex="-1">
  アクションの使い方
  <a class="header-anchor" href="#usage-actions" aria-label="Permalink to &quot;アクションの使い方&quot;">&ZeroWidthSpace;</a>
</h2>

Storeで定義したアクションは次のように使用できます。

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
    // 「はい」ボタンをクリックした時の処理を記述
  } else {
    // 「いいえ」ボタンをクリックした時の処理を記述
  }
}
</script>
```
