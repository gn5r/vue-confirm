<template>
  <v-app>
    <v-main>
      <playground />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Playground from "./Playground.vue";

export default defineComponent({
  name: "app",
  components: {
    Playground,
  },
});
</script>

<style scoped></style>
