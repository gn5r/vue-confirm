<template>
  <v-app>
    <v-app-bar location="top" theme="dark" density="comfortable" absolute>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          v-if="$vuetify.display.mdAndDown"
          @click="drawer = !drawer"
        />
      </template>
      <v-app-bar-title>Vue Confirm</v-app-bar-title>
      <template v-slot:append>
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
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :value="item"
          :to="item.to"
          color="primary"
          link
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-3">
      <v-container fluid>
        <v-row justify="center" align="start">
          <v-col cols="12" lg="10">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
      class="justify-center text-center text-grey-darken-2 bg-transparent"
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
import { defineComponent, ref } from "vue";

import { useDisplay } from "vuetify";
import { useNavigation } from "@/composables/navigation";

export default defineComponent({
  name: "App",
  setup() {
    const display = useDisplay();
    const drawer = ref(display.lgAndUp);
    const items = useNavigation();

    return { drawer, display, items };
  },
  components: {},
});
</script>
