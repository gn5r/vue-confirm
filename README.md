![npm](https://img.shields.io/npm/dt/@gn5r/vue-confirm)
[![npm version](https://badge.fury.io/js/%40gn5r%2Fvue-confirm.svg)](https://badge.fury.io/js/%40gn5r%2Fvue-confirm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# vue-common-confirm

## デモページ

準備中...

<!-- [vue-common-confirm Demo](https://gn5r.github.io/vue-confirm/) -->

## インストール

- インストールコマンド

  `npm i @gn5r/vue-confirm`

- 依存関係(公開時バージョン)

  - vue:^2.6.11

## 使い方

```vue
<template>
  <div>
    <button @click="addData">追加</button>
    <v-confirm
      :dialog.sync="confirmObj.dialog"
      :title="confirmObj.title"
      :title-icon="confirmObj.titleIcon"
      :title-color="confirmObj.titleColor"
      :message="confirmObj.message"
      :buttons="confirmObj.buttons"
    />
  </div>
</template>

<script>
import VConfirm from "@gn5r/vue-confirm";
import mixin from "@gn5r/vue-confirm/lib/mixin";

export default {
  name: "sample",
  mixins: [mixin],
  data: () => ({}),
  methods: {
    addData() {
      // なんか処理
      this.confirm("データを追加しますか?", () => {
        // ダイアログで"はい"を押した後にコールバック関数が実行されるので
        // コールバック関数を記述する。または引数で関数を渡しておく
      });
    },
  },
  components: {
    VConfirm,
  },
};
</script>
```

## Confirm component props

|    props    |                                          説明                                           |        型        | default   |
| :---------: | :-------------------------------------------------------------------------------------: | :--------------: | --------- |
|   dialog    | ダイアログ表示フラグ。sync 修飾子を付与することで呼び出し側でフラグを反転する必要がない |     Boolean      | false     |
|    title    |                 ダイアログツールバーに表示するタイトル。各関数にて設定                  |      String      | ""        |
| title-icon  |    ダイアログツールバーの左に表示するアイコン。confirm、warning、error の 3 つで使用    |      String      | ""        |
| title-color |                      ダイアログツールバーの背景色。各関数にて設定                       |      String      | ""        |
|   message   |             ダイアログ内に表示するメッセージ。各関数に渡すことで表示される              |      String      | ""        |
|   buttons   |                     ダイアログ内に表示するボタン類。各関数にて設定                      |      Array       | []        |
|    width    |                                     ダイアログの幅                                      | Number or String | undefined |
|  max-width  |          ダイアログの最大幅。スマホサイズでは自動的に 80%になるようにしている           | Number or String | 500       |

## 関数一覧

- confirm(message, callback = null)

  ```
  標準的な確認用ダイアログ
  message:ダイアログ内に表示するメッセージ
  callback:ダイアログの"はい"を押下後に実行されるコールバック関数
  ```

- warning(message, callback = null)

  ```
  警告の意味を強めた確認用ダイアログ
  message:ダイアログ内に表示するメッセージ
  callback:ダイアログの"はい"を押下後に実行されるコールバック関数
  ```

- error(message)

  ```
  エラー発生時用ダイアログ
  message:ダイアログ内に表示するメッセージ
  ```

- complete(message)

  ```
  処理などが完了した時用ダイアログ
  message:ダイアログ内に表示するメッセージ
  ```

- modal(message)

  ```
  javascriptのalert関数のオリジナル版。ヘッダーも無いのでalertと似た感覚で使用できる筈
  message:ダイアログ内に表示するメッセージ
  ```
