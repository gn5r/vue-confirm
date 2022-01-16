<template>
  <div class="card">
    <div class="card-body container-fluid">
      <div class="row">
        <div class="col-auto me-auto">
          <h3>Component Options</h3>
        </div>
      </div>

      <div class="row g-2 mb-3">
        <div class="col-12">
          <div class="form-check form-check-inline">
            <input
              v-model="closeable"
              class="form-check-input"
              type="checkbox"
              id="input-closeable"
            />
            <label class="form-check-label" for="input-closeable"
              >Closeable?</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="persistent"
              class="form-check-input"
              type="checkbox"
              id="input-persistent"
            />
            <label class="form-check-label" for="input-persistent"
              >Persistent?</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="noActionsDivider"
              class="form-check-input"
              type="checkbox"
              id="input-no-actions-divider"
            />
            <label class="form-check-label" for="input-no-actions-divider"
              >NoActionsDivider?</label
            >
          </div>
        </div>

        <div class="col-4 col-md-4 col-xl-2">
          <label for="input-title-color" class="form-label">Title Color</label>
          <input
            v-model="titleColor"
            class="form-control form-control-color"
            type="color"
            id="input-title-color"
          />
        </div>

        <div class="col-6 col-md-4 col-xl-2">
          <label for="input-title-text-color" class="form-label"
            >Title Text Color</label
          >
          <input
            v-model="titleTextColor"
            class="form-control form-control-color"
            type="color"
            id="input-title-text-color"
          />
        </div>

        <div class="col-6 col-md-4 col-xl-2">
          <label for="input-close-icon-color" class="form-label"
            >Close Icon Color</label
          >
          <input
            v-model="closeIconColor"
            class="form-control form-control-color"
            type="color"
            id="input-close-icon-color"
          />
        </div>

        <div class="col-12">
          <label for="input-title" class="form-label">Title</label>
          <input
            v-model="title"
            class="form-control"
            type="text"
            id="input-title"
          />
        </div>

        <div class="col-12">
          <label for="input-message" class="form-label">Message</label>
          <textarea
            v-model="message"
            class="form-control"
            type="text"
            rows="3"
            id="input-message"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-auto me-auto">
          <h3>Action Buttons</h3>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-12">
          <div class="row g-2">
            <div class="col-6 col-md-4 col-xl-2">
              <label for="input-btn-background-color" class="form-label"
                >Background Color</label
              >
              <input
                v-model="btns[0].backgroundColor"
                class="form-control form-control-color"
                type="color"
                id="input-btn-background-color"
              />
            </div>
            <div class="col-6 col-md-4 col-xl-2">
              <label for="input-btn-text-color" class="form-label"
                >Text Color</label
              >
              <input
                v-model="btns[0].textColor"
                class="form-control form-control-color"
                type="color"
                id="input-btn-text-color"
              />
            </div>
            <div class="col-6 col-md-4 col-xl-3">
              <label for="input-btn-align" class="form-label">
                Btn align
              </label>
              <select
                v-model="btnAlign"
                id="input-btn-align"
                class="form-select"
              >
                <template v-for="(align, i) in alignments">
                  <option :key="i" :value="align.id" v-text="align.value" />
                </template>
              </select>
            </div>
            <div class="col-12 col-md-6">
              <label for="input-btn-text" class="form-label">Btn Text</label>
              <input
                v-model="btns[0].text"
                class="form-control"
                type="text"
                id="input-btn-text"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="input-btn-class" class="form-label">Btn Class</label>
              <input
                v-model="btns[0].class"
                class="form-control"
                type="text"
                id="input-btn-class"
                placeholder="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-6 col-md-4 col-xl-3">
          <button
            class="btn btn-outline-primary"
            type="button"
            @click="dialog = true"
          >
            Show dialog
          </button>
        </div>
      </div>
    </div>

    <v-confirm
      v-model="dialog"
      :closeable="closeable"
      :persistent="persistent"
      :no-actions-divider="noActionsDivider"
      :width="`${width}px`"
      :title="title"
      :title-color="titleColor"
      :title-text-color="titleTextColor"
      :close-icon-color="closeIconColor"
      :message="message"
      :btn-align="btnAlign"
      :btns="btns"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Alignment, VConfirmBtn } from "@gn5r/vue-confirm/types";

export default Vue.extend({
  name: "component-example",
  model: {},
  mixins: [],
  props: {},
  data() {
    return {
      dialog: false,
      closeable: true,
      persistent: false,
      noActionsDivider: false,
      width: 800,
      title: "titleeeeeeeeeeee",
      titleColor: "#2196f3",
      titleTextColor: "#ffffff",
      closeIconColor: "#ffffff",
      message: "test\nmessage",
      btnAlign: "end" as Alignment,
      alignments: [
        {
          id: "start",
          value: "start",
        },
        {
          id: "center",
          value: "center",
        },
        {
          id: "end",
          value: "end",
        },
        {
          id: "space-between",
          value: "space-between",
        },
        {
          id: "space-around",
          value: "space-around",
        },
      ] as Array<{ id: Alignment; value: Alignment }>,
      btns: [] as VConfirmBtn[],
    };
  },
  methods: {},
  created() {
    this.btns = [
      {
        text: "ok",
        textColor: "#ffffff",
        backgroundColor: "#2196F3",
        class: "",
        function: () => (this.dialog = false),
      },
      {
        text: "NO",
        textColor: "",
        backgroundColor: "",
        class: "btn btn-outline-danger fw-bold",
        function: () => (this.dialog = false),
      },
    ];
  },
  computed: {},
  watch: {},
  components: {},
});
</script>

<style scoped></style>
