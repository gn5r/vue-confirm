# Vue Confirm Component

![downloads](https://img.shields.io/npm/dt/@gn5r/vue-confirm?color=green&style=for-the-badge)
![latest](https://img.shields.io/npm/v/@gn5r/vue-confirm/latest?color=green&style=for-the-badge)
![beta version](https://img.shields.io/npm/v/@gn5r/vue-confirm/beta?color=green&style=for-the-badge)
![legacy version](https://img.shields.io/npm/v/@gn5r/vue-confirm/legacy?color=green&style=for-the-badge)

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
|      2.x       |       2.x       |       Yes       | [2.x](https://github.com/gn5r/vue-confirm/tree/2.x) |
|      3.x       |       3.x       |       Yes       |                      `master`                       |

## インストールの仕方

### npm タグマトリクス

| Package version |  tag   | Volar support |
| :-------------: | :----: | :-----------: |
|       1.x       |   -    |       -       |
|       2.x       | legacy |       -       |
|       3.x       | latest |      Yes      |
|     \*-beta     |  beta  |       -       |
|     \*-next     |  next  |       -       |

- コマンド

  ```
  # npm
  npm i @gn5r/vue-confirm

  # yarn
  yarn add @gn5r/vue-confirm
  ```

## 使い方

## _Vue.use_ を使う場合

```ts:main.ts
import { createApp } from "vue";
import App from "./App.vue";
// PlugininFunction と cssをインポート
import { VConfirmPlugin } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/dist/v-confirm.min.css";

createApp(App).use(VConfirmPlugin).mount("#app")
```

```vue:SampleComponent.vue
<template>
  <button type="button" @click="show">show</button>
  <v-confirm
    v-model="config.dialog"
    :title="config.title"
    :message="config.message"
    :btns="config.btns"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VConfirmBtn } from "@gn5r/vue-confirm";

export default defineComponent({
  name: "sample-component",
  setup() {
    const config = ref({
      dialog: false,
      title: "title",
      message: "message!",
      btns: [] as VConfirmBtn[]
    });

    function show() {
      config.value.btns = [
        {
          text: "OK",
          function: () => config.value.dialog = false,
        },
      ];
      config.value.dialog = true;
    }

    return {
      config,
      show,
    }
  }
});
</script>
```

## _Vue.use_ を使わない場合

```vue:SampleComponent.vue
<template>
  <button type="button" @click="show">show</button>
  <v-confirm
    v-model="config.dialog"
    :title="config.title"
    :message="config.message"
    :btns="config.btns"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VConfirm, { VConfirmBtn } from "@gn5r/vue-confirm";

export default defineComponent({
  name: "sample-component",
  setup() {
    const config = ref({
      dialog: false,
      title: "title",
      message: "message!",
      btns: [] as VConfirmBtn[]
    });

    function show() {
      config.value.btns = [
        {
          text: "OK",
          function: () => config.value.dialog = false,
        },
      ];
      config.value.dialog = true;
    }

    return {
      config,
      show,
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
|     btn-align      | css の justify-content プロパティ<br>**start**,**cenetr**,**end**,**space-between**,**space-around**が有効値です | Alignment(string) |    end    |
|        btns        |                                                 アクションボタン                                                 |   VConfirmBtn[]   |    []     |
|      closable      |                                タイトルバーに閉じるボタンを表示/非表示するフラグ                                 |      boolean      |   false   |
|        dark        |                                          ダークテーマを有効にするフラグ                                          |      boolean      |   false   |
|    hide-header     |                                  デフォルトで描画されるヘッダーを非表示にします                                  |      boolean      |   false   |
|      message       |                                                メッセージテキスト                                                |      string       | undefined |
|     modelValue     |                                       ダイアログの表示/非表示をするフラグ                                        |      boolean      |   false   |
| no-actions-divider |                          メッセージとアクションボタン間の境界線を表示/非表示するフラグ                           |      boolean      |   false   |
|     persistent     |                             ダイアログの外側をクリックしても閉じないようにするフラグ                             |      boolean      |   false   |
|       title        |                                          タイトルバーに表示するテキスト                                          |      string       | undefined |
|    title-color     |                                               タイトルバーの背景色                                               |      string       |  inherit  |
|  title-text-color  |                                               タイトルバーの文字色                                               |      string       |  inherit  |
|       width        |                                                 ダイアログの横幅                                                 | number \| string  |   800px   |

### VConfirmBtn

|   name    |                                                              description                                                              |           type           |  default  |
| :-------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :----------------------: | :-------: |
|   class   |                                                ボタンに対する css クラスを指定できます                                                |    string \| string[]    | undefined |
| function  |                                                ボタンをクリックした時に実行される関数                                                 | Function \| VoidFunction | undefined |
|   color   |     ボタンの背景色<br>css color スタイル (`#fff`、`transparent` 、`inherit`) または class スタイル (`btn-primary`) を指定できます     |          string          | undefined |
|   text    |                                                            ボタンテキスト                                                             |          string          | undefined |
| textColor | ボタンのテキストカラー<br>css color スタイル (`#fff`、`transparent` 、`inherit`) または class スタイル (`btn-primary`) を指定できます |          string          | undefined |

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 shangyuan.tuolang
