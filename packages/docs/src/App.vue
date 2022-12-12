<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark mb-3">
      <div class="container-fluid">
        <span class="navbar-brand">Vue Confirm</span>
        <div class="d-flex">
          <a
            class="text-light"
            href="https://github.com/gn5r/vue-confirm"
            target="_blank"
            :style="{ 'font-size': '24px' }"
          >
            <i class="fab fa-github fa-lg"></i>
          </a>
          <a
            class="text-light ms-3"
            href="https://www.npmjs.com/package/@gn5r/vue-confirm"
            target="_blank"
            :style="{ 'font-size': '24px' }"
          >
            <i class="fab fa-npm fa-lg"></i>
          </a>
        </div>
      </div>
    </nav>
    <main class="container">
      <div class="row justify-content-center align-items-start">
        <div class="col-12 col-md-12 col-xl-8">
          <component-example />
        </div>
      </div>
    </main>

    <footer class="text-center text-muted mt-3 px-3">
      Development by
      <a href="https://github.com/gn5r" target="_blank" rel="author,noopener"
        >&copy;shangyuan.tuolang</a
      >
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentExample from "./components/ComponentExample.vue";

export default defineComponent({
  name: "App",
  components: {
    ComponentExample,
  },
});
</script>
