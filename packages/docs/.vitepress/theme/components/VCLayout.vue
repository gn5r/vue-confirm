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
  <v-btn
    v-show="isShowPageUpBtn"
    class="text-white"
    color="#607d8b"
    icon="mdi-arrow-up-thick"
    position="fixed"
    style="right: 8px; bottom: 12px; z-index: 300"
    @click="scrollTop"
  />
  <v-confirm
    v-model="config.modelValue"
    :btn-align="config.btnAlign"
    :btns="config.btns"
    :closeable="config.closeable"
    :dark="config.dark"
    :hide-header="config.hideHeader"
    :message="config.message"
    :no-actions-divider="config.noActionsDivider"
    :persistent="config.persistent"
    :title="config.title"
    :title-color="config.titleColor"
    :title-text-color="config.titleTextColor"
    :width="config.width"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

// Theme
import DefaultTheme from "vitepress/theme";

// Composables
import { useData } from "vitepress";
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";

// Store
import { useVConfirmStore } from "@theme/store/vconfirm";

const { Layout } = DefaultTheme;
const { global } = useTheme();
const { isDark, lang } = useData();
const { locale } = useI18n({ useScope: "global" });
const config = useVConfirmStore();

const isShowPageUpBtn = ref(false);

function handleOnScroll() {
  const HIDDEN_POS_Y = 50;
  isShowPageUpBtn.value = HIDDEN_POS_Y <= window.scrollY;
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncTheme() {
  global.name.value = isDark.value ? "dark" : "light";
}

function syncLocale() {
  locale.value = lang.value;
}

onMounted(() => {
  syncTheme();
  syncLocale();
  window.addEventListener("scroll", handleOnScroll);
});

onUnmounted(() => window.removeEventListener("scroll", handleOnScroll));

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
