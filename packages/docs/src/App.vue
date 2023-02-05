<template>
  <v-app>
    <app-bar v-model="drawer" />

    <app-drawer v-model="drawer" />

    <v-main :class="theme.dark ? 'bg-grey-darken-3' : 'bg-grey-lighten-3'">
      <v-container fluid>
        <v-row justify="center" align="start">
          <v-col cols="12" lg="10">
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
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

    <app-footer />
  </v-app>
</template>

<script setup lang="ts">
// Utilities
import { ref, onMounted, onUnmounted } from "vue";

// Composables
import { useDisplay, useTheme } from "vuetify";

// Components
import AppBar from "@/components/app/AppBar.vue";
import AppDrawer from "@/components/app/AppDrawer.vue";
import AppFooter from "@/components/app/AppFooter.vue";

const display = useDisplay();
const drawer = ref(display.lgAndUp);
const { current: theme } = useTheme();

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
</script>
