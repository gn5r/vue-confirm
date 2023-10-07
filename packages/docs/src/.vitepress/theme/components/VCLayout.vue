<!-- https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue -->
<template>
  <Layout>
    <template #nav-bar-content-after>
      <a
        class="text-white ml-3"
        href="https://www.npmjs.com/package/@gn5r/vue-confirm"
        target="_blank"
        :style="{ 'font-size': '24px' }"
      >
        <i class="fab fa-npm fa-lg"></i>
      </a>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";

import { watch } from "vue";

const { Layout } = DefaultTheme;
const { global } = useTheme();
const { isDark, lang } = useData();
const { locale } = useI18n({ useScope: "global" });

syncTheme();
syncLocale();

function syncTheme() {
  global.name.value = isDark.value ? "dark" : "light";
}

function syncLocale() {
  locale.value = lang.value;
}

watch(isDark, () => {
  console.debug("isDark:", isDark.value);
  syncTheme();
});

watch(lang, () => {
  console.debug("lang:", lang.value);
  syncLocale();
});
</script>

<style lang="sass" scoped></style>
