<template>
  <v-sheet :color="isDark ? 'grey-darken-5' : 'grey-lighten-4'" border rounded>
    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          :icon="copied ? 'mdi-check' : 'mdi-clipboard-multiple'"
          class="mt-2 me-2 text-disabled"
          style="position: absolute; right: 0; top: 0"
          density="compact"
          variant="text"
          @click="copy"
        />
      </template>
      <span>{{ t("copy-text") }}</span>
    </v-tooltip>

    <div class="pa-4">
      <slot>
        <pre v-if="inline" :class="className">
          <code :class="className" v-html="highlighted"  />
        </pre>
        <code v-else :class="className" v-html="highlighted" />
      </slot>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";

import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-sass.js";
import "prismjs/components/prism-scss.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-json.js";

import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";

const props = defineProps({
  code: String,
  lang: {
    type: String,
    default: "markup",
  },
  inline: Boolean,
});

const { current: theme } = useTheme();
const { t } = useI18n();

const highlighted = computed(
  () =>
    props.code &&
    props.lang &&
    Prism.highlight(props.code, Prism.languages[props.lang], props.lang)
);
const className = computed(() => `language-${props.lang}`);

const copied = ref(false);
function copy() {
  if (copied.value) return;
  copied.value = true;
  const code = document.querySelector("code");
  navigator.clipboard.writeText(code?.innerText ?? "");
  setTimeout(() => {
    copied.value = false;
  }, 1000);
}

const isDark = computed(() => theme.value.dark);
</script>

<style lang="sass" scoped>
.v-sheet
  position: relative

  :deep(code),
  :deep(pre)
      background: none
      color: currentColor !important
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace
      font-size: 1rem
      font-weight: 300
      hyphens: none
      line-height: 1.5
      margin: 0
      padding: 0
      tab-size: 4
      text-align: left
      text-shadow: none
      white-space: pre-wrap
      word-break: normal
      word-spacing: normal
      word-wrap: normal

  &.v-theme--dark
    :deep(code),
    :deep(pre)
      color: #ccc !important

      &::selection, ::selection
        background-color: #113663

      .token.operator,
      .token.string
        background: none

      .token.comment,
      .token.block-comment,
      .token.prolog,
      .token.doctype,
      .token.cdata
        color: #999

      .token.punctuation
        color: #ccc

      .token.tag,
      .token.attr-name,
      .token.namespace,
      .token.deleted
        color: #e2777a

      .token.function-name
        color: #6196cc

      .token.boolean,
      .token.number,
      .token.function
        color: #f08d49

      .token.property,
      .token.class-name,
      .token.constant,
      .token.symbol
        color: #f8c555

      .token.selector,
      .token.important,
      .token.atrule,
      .token.keyword,
      .token.builtin
        color: #cc99cd

      .token.string,
      .token.char,
      .token.attr-value,
      .token.regex,
      .token.variable
        color: #7ec699

      .token.operator,
      .token.entity,
      .token.url
        color: #67cdcc

      .token.important,
      .token.bold
        font-weight: bold

      .token.italic
        font-style: italic

      .token.entity
        cursor: help

      .token.inserted
        color: green
</style>
