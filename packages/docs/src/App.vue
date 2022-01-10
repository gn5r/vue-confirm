<template>
  <div>
    <nav class="navbar navbar-dark bg-dark mb-3">
      <div class="container-fluid">
        <span class="navbar-brand">Vue Confirm Component</span>
        <div class="d-flex">
          <a
            class="text-light"
            href="https://github.com/gn5r/vue-confirm"
            target="_blank"
            :style="{ 'font-size': '24px' }"
          >
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </nav>
    <main class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-8">
          <div class="card mb-3" style="min-height: 300px">
            <div class="card-body container-fluid">
              <div class="row justify-content-start align-items-center">
                <div class="col-sm-3 col-md-2 col-lg-1">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    @click="show"
                  >
                    show
                  </button>
                </div>
                <div class="col-sm-3 col-md-2 col-lg-1">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    @click="show2"
                  >
                    show2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <v-confirm
      v-model="dialog"
      :message="message"
      :btns="btns"
      title="titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      title-color="primary"
      closeable
      no-actions-divider
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VConfirmBtn } from "@gn5r/vue-confirm/types";

export default Vue.extend({
  name: "App",
  model: {},
  mixins: [],
  props: {},
  data: () => ({
    dialog: false,
    btns: [] as VConfirmBtn[],
  }),
  methods: {
    show() {
      this.btns = [
        {
          text: "ok",
          function: () => (this.dialog = false),
        },
      ];
      this.dialog = true;
    },
    show2() {
      this.btns = [
        {
          text: "ok",
          class: "btn btn-outline-primary btn-lg",
          function: () => (this.dialog = false),
        },
        {
          text: "no",
          class: "btn btn-outline-danger",
          function: () => (this.dialog = false),
        },
        {
          text: "none",
          function: () => (this.dialog = false),
        },
      ];
      this.dialog = true;
    },
  },
  created() {
    //
  },
  computed: {
    message(): string {
      return "message\nmessage";
    },
  },
  watch: {},
  components: {},
});
</script>

<style scoped></style>
