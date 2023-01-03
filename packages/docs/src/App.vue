<template>
  <v-app>
    <v-app-bar location="top" theme="dark" density="comfortable">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          v-if="!$vuetify.display.lgAndUp"
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
    <v-navigation-drawer v-model="drawer" location="left"></v-navigation-drawer>
  </v-app>
  <!-- <div id="app">
    <nav class="navbar navbar-dark bg-dark mb-3">
      <div class="container-fluid">
        <span class="navbar-brand">Vue Confirm</span>
        <div class="d-flex">
          <a class="text-light" href="https://github.com/gn5r/vue-confirm" target="_blank"
            :style="{ 'font-size': '24px' }">
            <i class="fab fa-github fa-lg"></i>
          </a>
          <a class="text-light ms-3" href="https://www.npmjs.com/package/@gn5r/vue-confirm" target="_blank"
            :style="{ 'font-size': '24px' }">
            <i class="fab fa-npm fa-lg"></i>
          </a>
        </div>
      </div>
    </nav>
    <main class="container">
      <div class="row justify-content-center align-items-start">
        <div class="col-12 col-md-12 col-xl-8">
          <demo />
        </div>
      </div>
    </main>

    <footer class="text-center text-muted mt-3 px-3">
      Development by
      <a href="https://github.com/gn5r" target="_blank" rel="author,noopener">&copy;shangyuan.tuolang</a>
    </footer>
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
// import Demo from "./components/Demo.vue";

// import { useVuetifyConfig } from "./composables/vuetify";
import { Display } from "types/vuetify";

export default defineComponent({
  name: "App",
  setup() {
    const display = inject<Display>("vuetify:display");
    console.debug(display);
    const drawer = ref(false);
    return { drawer };
  },
  components: {
    // Demo,
  },
});
</script>
