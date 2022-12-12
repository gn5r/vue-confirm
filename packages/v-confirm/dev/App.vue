<template>
  <div id="app">
    <main>
      <playground />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Playground from "./Playground.vue";

export default Vue.extend({
  name: "app",
  model: {},
  mixins: [],
  props: {},
  data: () => ({}),
  methods: {},
  created() {
    //
  },
  computed: {},
  watch: {},
  components: {
    Playground,
  },
});
</script>

<style scoped></style>