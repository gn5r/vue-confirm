<template>
  <v-app>
    <v-app-bar location="top" theme="dark" density="comfortable">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          v-if="$vuetify.display.mdAndDown"
          @click="drawer = !drawer"
        />
      </template>
      <v-app-bar-title v-if="$vuetify.display.lgAndUp"
        >Vue Confirm</v-app-bar-title
      >
      <template v-slot:append>
        <v-btn
          :icon="theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-5'"
          @click="toggleTheme"
        />
        <v-menu :theme="theme.dark ? 'dark' : 'light'">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-translate-variant" />
          </template>
          <v-list :items="languages" color="primary" item-props />
        </v-menu>
        <a
          class="text-white"
          href="https://github.com/gn5r/vue-confirm"
          target="_blank"
          :style="{ 'font-size': '24px' }"
        >
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          class="text-white ml-3"
          href="https://www.npmjs.com/package/@gn5r/vue-confirm"
          target="_blank"
          :style="{ 'font-size': '24px' }"
        >
          <i class="fab fa-npm fa-lg"></i>
        </a>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left">
      <v-list :items="computedItems" color="primary" item-props nav />
    </v-navigation-drawer>

    <v-main :class="theme.dark ? 'bg-grey-darken-3' : 'bg-grey-lighten-3'">
      <v-container fluid>
        <v-row justify="center" align="start">
          <v-col cols="12" lg="10">
            <router-view />
          </v-col>
        </v-row>
      </v-container>

      <v-btn
        v-show="isShowPageUpBtn"
        class="text-white"
        color="#607d8b"
        icon="mdi-arrow-up-thick"
        position="fixed"
        style="right: 8px; bottom: 12px"
        @click="scrollTop"
      />
    </v-main>

    <v-footer
      class="justify-center text-center bg-transparent"
      :class="theme.dark ? 'text-grey-lighten-2' : 'text-grey-darken-2'"
      height="24"
      app
      absolute
    >
      <span>Development by</span>
      <a href="https://github.com/gn5r" target="_blank" rel="author,noopener"
        >&copy;shangyuan.tuolang</a
      >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from "vue";

import { useDisplay, useTheme } from "vuetify";
import { useRoute } from "vue-router";
import { useNavigation } from "@/composables/navigation";
import { useI18nList } from "@/composables/i18n";

export default defineComponent({
  name: "App",
  setup() {
    const display = useDisplay();
    const drawer = ref(display.lgAndUp);
    const vuetifyTheme = useTheme();
    const { current: theme } = vuetifyTheme;

    const route = useRoute();
    const items = useNavigation();
    const computedItems = computed(() =>
      items.value.flatMap((i) => ({
        title: i.title,
        value: i.title,
        prependIcon: route.path.includes(i.to ?? "")
          ? i.activeIcon
          : i.inactiveIcon,
        to: i.to,
      }))
    );
    const languages = useI18nList();
    const linkMenu = ref<boolean>(false);

    const scrollY = ref(0);
    const isShowPageUpBtn = ref(false);
    function handleOnScroll() {
      const HIDDEN_POS_Y = 50;
      scrollY.value = window.scrollY;
      isShowPageUpBtn.value = HIDDEN_POS_Y <= scrollY.value;
    }
    function scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    onMounted(() => window.addEventListener("scroll", handleOnScroll));
    onUnmounted(() => window.removeEventListener("scroll", handleOnScroll));

    function toggleTheme() {
      vuetifyTheme.global.name.value = theme.value.dark ? "light" : "dark";
    }

    return {
      display,
      drawer,
      theme,
      computedItems,
      languages,
      linkMenu,
      isShowPageUpBtn,
      scrollTop,
      toggleTheme,
    };
  },
  components: {},
});
</script>
