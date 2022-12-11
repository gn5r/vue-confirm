# Vue Confirm Component

![downloads](https://img.shields.io/npm/dt/@gn5r/vue-confirm?color=green&style=for-the-badge)
![latest](https://img.shields.io/npm/v/@gn5r/vue-confirm/latest?color=green&style=for-the-badge)
![beta version](https://img.shields.io/npm/v/@gn5r/vue-confirm/beta?color=green&style=for-the-badge)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?color=green&style=for-the-badge)](https://opensource.org/licenses/MIT)
![typed](https://img.shields.io/npm/types/@gn5r/vue-confirm?color=green&style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/gn5r/vue-confirm/ci?event=push&label=CI&logo=GitHub&style=for-the-badge)

[日本語版 README はこちら](README-ja.md)

## Dependencies version

![vue version](https://img.shields.io/npm/dependency-version/@gn5r/vue-confirm/dev/vue?style=for-the-badge)
![@mdi/js version](https://img.shields.io/npm/dependency-version/@gn5r/vue-confirm/dev/@mdi/js?style=for-the-badge)

## Demo

[vue-confirm Demo](https://gn5r.github.io/vue-confirm/)

## Version matrix

| Vue.js version | Package version | Type definition |                       Branch                        |
| :------------: | :-------------: | :-------------: | :-------------------------------------------------: |
|      2.x       |       1.x       |       No        | [1.x](https://github.com/gn5r/vue-confirm/tree/1.x) |
|      2.x       |       2.x       |       Yes       |                        `2.x`                        |

## Installation

- commands

  ```
  # npm
  npm i @gn5r/vue-confirm

  # yarn
  yarn add @gn5r/vue-confirm
  ```

- dependencies

  - vue:^2.6.14
  - @mdi/js:^6.5.95

## Usage

## Using _Vue.use_

```ts:main.ts
import Vue from "vue";
import App from "./App.vue";
// Importing PlugininFunction and css
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

## Not using _Vue.use_

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

## Confirm component props

|       props        |                                                       description                                                       |       type        |  default  |
| :----------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------: | :-------: |
|        btns        |                                                     Action buttons                                                      |   VConfirmBtn[]   |    []     |
|        dark        |                                                    Enable dark theme                                                    |      boolean      |   false   |
|       title        |                                                       Title text                                                        |      string       | undefined |
|       value        |                                               show / hide flag of dialog                                                |      boolean      |   false   |
|       width        |                                                     Component width                                                     | number \| string  |   800px   |
|      closable      |                                        show / hide flag of close icon to dialog                                         |      boolean      |   false   |
|      message       |                                                      Message text                                                       |      string       | undefined |
|     btn-align      | justify-content css property.<br>Available options are **start**,**cenetr**,**end**,**space-between**,**space-around**. | Alignment(string) |    end    |
|     persistent     |                                    Clicking outside of the element not deactivate it                                    |      boolean      |   false   |
|    hide-header     |                                                  hidden default header                                                  |      boolean      |   false   |
|    title-color     |                                                      Toolbar color                                                      |      string       |  inherit  |
|  close-icon-color  |                                              Close icon color of title bar                                              |      string       |  inherit  |
|  title-text-color  |                                                 Text color of title bar                                                 |      string       |  inherit  |
| no-actions-divider |                                 show / hide flag of between message and actions divider                                 |      boolean      |   false   |

### VConfirmBtn description

|   name    |                                                                  description                                                                  |           type           |  default  |
| :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------: | :-------: |
|   text    |                                                                text in button                                                                 |          string          | undefined |
| textColor |    color for button text.<br>It can be specify css style color (`#fff` or `transparent` or `inherit`) or class style color (`btn-primary`)    |          string          | undefined |
|   color   | background-color for button.<br>It can be specify css style color (`#fff` or `transparent` or `inherit`) or class style color (`btn-primary`) |          string          | undefined |
|   class   |                                                            css classes for button                                                             |    string \| string[]    | undefined |
| function  |                                                 function executed when the button is clicked                                                  | Function \| VoidFunction | undefined |

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022 shangyuan.tuolang
