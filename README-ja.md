# Vue Confirm Component

![downloads](https://img.shields.io/npm/dt/@gn5r/vue-confirm?color=green&style=for-the-badge)
![latest](https://img.shields.io/npm/v/@gn5r/vue-confirm/latest?color=green&style=for-the-badge)
![beta version](https://img.shields.io/npm/v/@gn5r/vue-confirm/beta?color=green&style=for-the-badge)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?color=green&style=for-the-badge)](https://opensource.org/licenses/MIT)
![typed](https://img.shields.io/npm/types/@gn5r/vue-confirm?color=green&style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/gn5r/vue-confirm/ci?event=push&label=CI&logo=GitHub&style=for-the-badge)

## 依存関係のバージョン

![vue version](https://img.shields.io/npm/dependency-version/@gn5r/vue-confirm/dev/vue?style=for-the-badge)
![@mdi/js version](https://img.shields.io/npm/dependency-version/@gn5r/vue-confirm/dev/@mdi/js?style=for-the-badge)

## デモ

[vue-confirm Demo](https://gn5r.github.io/vue-confirm/)

## バージョンマトリクス

| Vue.js version | Package version | Type definition |                       Branch                        |
| :------------: | :-------------: | :-------------: | :-------------------------------------------------: |
|      2.x       |       1.x       |       No        | [1.x](https://github.com/gn5r/vue-confirm/tree/1.x) |
|      2.x       |       2.x       |       Yes       |                        `2.x`                        |

## インストールの仕方

- コマンド

  ```
  # npm
  npm i @gn5r/vue-confirm

  # yarn
  yarn add @gn5r/vue-confirm
  ```

- 依存関係(devDependencies)

  - vue:^2.6.14
  - @mdi/js:^6.5.95

## 使い方

## _Vue.use_ を使う場合

```ts:main.ts
import Vue from "vue";
import App from "./App.vue";
// PlugininFunction と cssをインポート
import { VConfirmPlugin } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/dist/v-confirm.min.css";

Vue.use(VConfirmPlugin);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
```

```vue:SampleComponent.vue
<template>
  <button type="button" @click="show">show</button>
  <v-confirm
    v-model="dialog"
    :title="title"
    :message="message"
    :btns="btns"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { VConfirmBtn } from "@gn5r/vue-confirm";

export default Vue.extend({
  name: "sample-component",
  data: () => ({
    dialog: false,
    title: "",
    message: "",
    btns: [] as VConfirmBtn[]
  }),
  methods: {
    show() {
      this.title = "title";
      this.message = "message!";
      this.btns = [
        {
          text: "OK",
          function: () => this.dialog = false,
        }
      ]
      this.dialog = true;
    }
  },
});
</script>
```

## _Vue.use_ を使わない場合

```vue:SampleComponent.vue
<template>
  <button type="button" @click="show">show</button>
  <v-confirm
    v-model="dialog"
    :title="title"
    :message="message"
    :btns="btns"
  />
</template>

<script lang="ts">
import Vue from "vue";
import VConfirm, { VConfirmBtn } from "@gn5r/vue-confirm";

export default Vue.extend({
  name: "sample-component",
  data: () => ({
    dialog: false,
    title: "",
    message: "",
    btns: [] as VConfirmBtn[]
  }),
  methods: {
    show() {
      this.title = "title";
      this.message = "message!";
      this.btns = [
        {
          text: "OK",
          function: () => this.dialog = false,
        }
      ]
      this.dialog = true;
    }
  },
  components: {
    VConfirm
  }
});
</script>
```

## コンポーネントプロパティ(props)

|       props        |                                                   description                                                    |       type        |  default  |
| :----------------: | :--------------------------------------------------------------------------------------------------------------: | :---------------: | :-------: |
|       value        |                                       ダイアログの表示/非表示をするフラグ                                        |      boolean      |   false   |
|      closable      |                                タイトルバーに閉じるボタンを表示/非表示するフラグ                                 |      boolean      |   true    |
|     persistent     |                             ダイアログの外側をクリックしても閉じないようにするフラグ                             |      boolean      |   false   |
| no-actions-divider |                         メッセージとアクションボタン間の境界線を表示/非表示をするフラグ                          |      boolean      |   false   |
|       width        |                                                 ダイアログの横幅                                                 | number \| string  |   800px   |
|       title        |                                          タイトルバーに表示するテキスト                                          |      string       | undefined |
|    title-color     |                                               タイトルバーの背景色                                               |      string       |  inherit  |
|  title-text-color  |                                               タイトルバーの文字色                                               |      string       |  inherit  |
|  close-icon-color  |                                          タイトルバーの閉じるボタンの色                                          |      string       |  inherit  |
|      message       |                                                メッセージテキスト                                                |      string       | undefined |
|     btn-align      | css の justify-content プロパティ<br>**start**,**cenetr**,**end**,**space-between**,**space-around**が有効値です | Alignment(string) |    end    |
|        btns        |                                                 アクションボタン                                                 |   VConfirmBtn[]   |    []     |

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022 shangyuan.tuolang
