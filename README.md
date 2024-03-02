# Vue Confirm Component

![downloads](https://img.shields.io/npm/dt/%40gn5r/vue-confirm?style=for-the-badge)
![latest](https://img.shields.io/npm/v/%40gn5r/vue-confirm/latest?style=for-the-badge&label=npm%40latest&color=green)
![stable](https://img.shields.io/npm/v/%40gn5r/vue-confirm/stable?style=for-the-badge&label=npm%40stable&color=green)

![next](https://img.shields.io/npm/v/%40gn5r/vue-confirm/next?style=for-the-badge&label=npm%40next&color=green)
![beta](https://img.shields.io/npm/v/%40gn5r/vue-confirm/beta?style=for-the-badge&label=npm%40beta&color=green)
![legacy](https://img.shields.io/npm/v/%40gn5r/vue-confirm/legacy?style=for-the-badge&label=npm%40legacy&color=green)

[![license](https://img.shields.io/npm/l/%40gn5r%2Fvue-confirm?style=for-the-badge)](https://opensource.org/licenses/MIT)
![npm type definitions](https://img.shields.io/npm/types/%40gn5r%2Fvue-confirm?style=for-the-badge&color=green)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/gn5r/vue-confirm/ci.yml?style=for-the-badge&logo=GitHub&label=CI)

[日本語版 README はこちら](README-ja.md)

## Dependencies version

![vue version](https://img.shields.io/npm/dependency-version/%40gn5r%2Fvue-confirm/dev/vue?style=for-the-badge)
![@mdi/js version](https://img.shields.io/npm/dependency-version/%40gn5r%2Fvue-confirm/dev/%40mdi%2Fjs?style=for-the-badge)

## Playground

[Playground | Vue Confirm](https://gn5r.github.io/vue-confirm/guide/playground.html)

## Version matrix

| Vue.js version | Package version | Type definition |                       Branch                        |
| :------------: | :-------------: | :-------------: | :-------------------------------------------------: |
|      2.x       |       1.x       |       No        | [1.x](https://github.com/gn5r/vue-confirm/tree/1.x) |
|      2.x       |       2.x       |       Yes       | [2.x](https://github.com/gn5r/vue-confirm/tree/2.x) |
|      3.x       |       3.x       |       Yes       | [3.x](https://github.com/gn5r/vue-confirm/tree/3.x) |
|      3.x       |       4.x       |       Yes       |                       `main`                        |

## Installation

### npm tag martix

| Package version |  tag   | Volar support | EOL |
| :-------------: | :----: | :-----------: | :-: |
|       1.x       |   -    |       -       |  ○  |
|       2.x       | legacy |       -       |  ○  |
|       3.x       | stable |      Yes      |  ×  |
|       4.x       | latest |      Yes      |  ×  |
|     \*-beta     |  beta  |       -       |  -  |
|     \*-next     |  next  |       -       |  -  |

### commands

#### npm

```
npm i @gn5r/vue-confirm
```

#### yarn

```
yarn add @gn5r/vue-confirm
```

## Usage

## Using _Vue.use_

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
// Importing Plugin Function and css
import { createVConfirm } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/styles";

const app = createApp(App);
const vconfirm = createVConfirm();
app.use(vconfirm).mount("#app");
```

```vue
<!-- SampleComponent.vue -->
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
      btns: [] as VConfirmBtn[],
    });

    function show() {
      config.value.btns = [
        {
          text: "OK",
          onClick: () => (config.value.dialog = false),
        },
      ];
      config.value.dialog = true;
    }

    return {
      config,
      show,
    };
  },
});
</script>
```

## Not using _Vue.use_

```vue
<!-- SampleComponent.vue -->
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
      btns: [] as VConfirmBtn[],
    });

    function show() {
      config.value.btns = [
        {
          text: "OK",
          onClick: () => (config.value.dialog = false),
        },
      ];
      config.value.dialog = true;
    }

    return {
      config,
      show,
    };
  },
  components: {
    VConfirm,
  },
});
</script>
```

## Confirm component props

|       props        |                                                       description                                                       |       type        |  default  |
| :----------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------: | :-------: |
|     btn-align      | justify-content css property.<br>Available options are **start**,**cenetr**,**end**,**space-between**,**space-around**. | Alignment(string) |    end    |
|        btns        |                                                     Action buttons                                                      |   VConfirmBtn[]   |    []     |
|      closable      |                                        show / hide flag of close icon to dialog                                         |      boolean      |   false   |
|        dark        |                                                    Enable dark theme                                                    |      boolean      |   false   |
|    hide-header     |                                                  hidden default header                                                  |      boolean      |   false   |
|      message       |                                                      Message text                                                       |      string       | undefined |
|     modelValue     |                                               show / hide flag of dialog                                                |      boolean      |   false   |
| no-actions-divider |                                 show / hide flag of between message and actions divider                                 |      boolean      |   false   |
|     persistent     |                                    Clicking outside of the element not deactivate it                                    |      boolean      |   false   |
|       title        |                                                       Title text                                                        |      string       | undefined |
|    title-color     |                                                      Toolbar color                                                      |      string       |  inherit  |
|  title-text-color  |                                                 Text color of title bar                                                 |      string       |  inherit  |
|       width        |                                                     Component width                                                     | number \| string  |   800px   |

### VConfirmBtn description

|   name    |                                                                  description                                                                  |           type           |  default  |
| :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------: | :-------: |
|   class   |                                                            css classes for button                                                             |    string \| string[]    | undefined |
|   color   | background-color for button.<br>It can be specify css style color (`#fff` or `transparent` or `inherit`) or class style color (`btn-primary`) |          string          | undefined |
|  onClick  |                                                 function executed when the button is clicked                                                  | Function \| VoidFunction | undefined |
|   text    |                                                                text in button                                                                 |          string          | undefined |
| textColor |    color for button text.<br>It can be specify css style color (`#fff` or `transparent` or `inherit`) or class style color (`btn-primary`)    |          string          | undefined |

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 shangyuan.tuolang
