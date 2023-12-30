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

<Suspense>
  <SassTable :items="themeItems" />
  <template #fallback>
    読み込み中...
  </template>
</Suspense>

## v-confirm

<Suspense>
  <SassTable :items="vconfirmItems" />
  <template #fallback>
    読み込み中...
  </template>
</Suspense>

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
