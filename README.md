# Vue Confirm Component using Vuetify

![downloads](https://img.shields.io/npm/dt/@gn5r/vue-confirm?color=green&style=for-the-badge)
![latest](https://img.shields.io/npm/v/@gn5r/vue-confirm/latest?color=green&style=for-the-badge)
![beta version](https://img.shields.io/npm/v/@gn5r/vue-confirm/beta?color=green&style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?color=green&style=for-the-badge)](https://opensource.org/licenses/MIT)
![typed](https://img.shields.io/npm/types/@gn5r/vue-confirm?color=green&style=for-the-badge)

## Dependencies version

![vue version](https://img.shields.io/npm/dependency-version/@gn5r/vue-confirm/dev/vue?style=for-the-badge)
![@mdi/js version](https://img.shields.io/npm/dependency-version/@gn5r/vue-confirm/dev/@mdi/js?style=for-the-badge)
![vue-click-outside version](https://img.shields.io/npm/dependency-version/@gn5r/vue-confirm/vue-click-outside?style=for-the-badge)

## Demo

preparing...

<!-- [vue-common-confirm Demo](https://gn5r.github.io/vue-confirm/) -->

## Version matrix

| Vue.js version | Package version | Type definition |  Branch  |
| :------------: | :-------------: | :-------------: | :------: |
|      2.x       |       1.x       |       No        | `master` |
|      2.x       |       2.x       |       Yes       |  `2.x`   |

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
  - vue-click-outside:^1.1.0
  - @mdi/js:^6.5.95

## Usage

preparing...

## Confirm component props

|    props    |                    description                    |       type       |  default  |
| :---------: | :-----------------------------------------------: | :--------------: | :-------: |
|    value    |            show / hide flag of dialog             |     boolean      |   false   |
|  closable   |     show / hide flag of close icon to dialog      |     boolean      |   false   |
| persistent  | Clicking outside of the element not deactivate it |     boolean      |   false   |
|    width    |                  component width                  | number \| string | undefined |
|    title    |                    title text                     |      string      | undefined |
| title-icon  |       icon to display in front of the title       |      string      | undefined |
| title-color |                   toolbar color                   |      string      | undefined |
|   message   |                   message text                    |      string      | undefined |
|    btns     |                   action button                   |  VConfirmBtn[]   |    []     |

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022 shangyuan.tuolang
