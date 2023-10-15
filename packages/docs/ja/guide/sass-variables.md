<script setup>
import { useThemeSassItems, useVConfirmSassItems } from "@theme/composables/sass";

import SassTable from "@theme/components/api/SassTable.vue"

const themeItems = useThemeSassItems();
const vconfirmItems = useVConfirmSassItems();
</script>

# SASS 変数

<h2 id="theme" tabIndex="-1">
  テーマ
  <a class="header-anchor" href="#theme" aria-label="Permalink to &quot;テーマ&quot;">&ZeroWidthSpace;</a>
</h2>

<SassTable :items="themeItems" />

## v-confirm

<SassTable :items="vconfirmItems" />

<h2 id="usage" tabIndex="-1">
  使い方
  <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;使い方&quot;">&ZeroWidthSpace;</a>
</h2>

### sass ファイルをインポート

```scss
// main.scss
@use "@gn5r/vue-confirm";
```

### SASS 変数を上書きする

```scss
// main.scss
@use "@gn5r/vue-confirm" with (
  $v-confirm-z-index: 1007
);
```
