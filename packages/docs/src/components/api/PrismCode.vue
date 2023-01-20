<template>
  <v-sheet
    :color="theme.dark ? 'grey-darken-3' : 'grey-lighten-4'"
    border
    rounded
  >
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

<script lang="ts">
import { defineComponent, computed } from "vue";

import type { PropType } from "vue";

import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-sass.js";
import "prismjs/components/prism-scss.js";
import "prismjs/components/prism-typescript.js";

import { useTheme } from "vuetify";

export default defineComponent({
  name: "prism-code",
  props: {
    code: String,
    lang: {
      type: String as PropType<"markup" | "typescript" | "sass" | "scss">,
      default: "markup",
    },
    inline: Boolean,
  },
  setup(props) {
    const LANG = {
      sass: [Prism.languages.sass, "sass"] as const,
      scss: [Prism.languages.scss, "scss"] as const,
      typescript: [Prism.languages.typescript, "ts"] as const,
      markup: [Prism.languages.markup, "markup"] as const,
    };

    const highlighted = computed(() => {
      const [grammar, lang] = LANG[props.lang];
      return Prism.highlight(props.code ?? "", grammar, lang);
    });

    const className = computed(() => `language-${props.lang}`);
    const { current: theme } = useTheme();

    return { highlighted, className, theme };
  },
  components: {},
});
</script>

<style lang="sass" scoped>
.v-sheet
  code,
  pre
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
