<template>
  <div class="card">
    <div class="card-body container-fluid">
      <div class="row align-items-center mb-1">
        <div class="col-auto">
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
          <div class="form-check form-check-inline">
            <input
              v-model="dark"
              class="form-check-input"
              type="checkbox"
              id="input-dark"
            />
            <label class="form-check-label" for="input-dark">Dark?</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="hideHeader"
              class="form-check-input"
              type="checkbox"
              id="input-hide-header"
            />
            <label class="form-check-label" for="input-hide-header"
              >HideHeader?</label
            >
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <label for="input-width" class="col-4 col-md-2 col-xl-2 col-form-label"
          >Width</label
        >
        <div class="col-4 col-md-2 col-xl-2">
          <input
            v-model="width"
            class="form-control"
            type="text"
            id="input-width"
          />
        </div>
      </div>

      <div class="row align-items-center mb-1">
        <div class="col-auto">
          <h3>Title Options</h3>
        </div>
      </div>

      <div class="row">
        <label
          for="input-title-color"
          class="col-4 col-md-2 col-xl-2 col-form-label"
          >Color</label
        >
        <div class="col-2 col-md-1 col-xl-1">
          <input
            v-model="titleColor"
            class="form-control form-control-color"
            type="color"
            id="input-title-color"
          />
        </div>
        <div class="col-6 col-md-3 col-xl-2">
          <input v-model="titleColor" class="form-control" type="text" />
        </div>

        <label
          for="input-title-text-color"
          class="col-4 col-md-2 col-xl-2 col-form-label"
          >Text Color</label
        >
        <div class="col-2 col-md-1 col-xl-1">
          <input
            v-model="titleTextColor"
            class="form-control form-control-color"
            type="color"
            id="input-title-text-color"
          />
        </div>
        <div class="col-6 col-md-3 col-xl-2">
          <input v-model="titleTextColor" class="form-control" type="text" />
        </div>
      </div>

      <div class="row">
        <label
          for="input-close-icon-color"
          class="col-4 col-md-2 col-xl-2 col-form-label"
          >Icon Color</label
        >
        <div class="col-2 col-md-1 col-xl-1">
          <input
            v-model="closeIconColor"
            class="form-control form-control-color"
            type="color"
            id="input-close-icon-color"
          />
        </div>
        <div class="col-6 col-md-3 col-xl-2">
          <input v-model="closeIconColor" class="form-control" type="text" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="input-title" class="col-4 col-md-2 col-xl-2 col-form-label"
          >Text</label
        >
        <div class="col-8 col-md-10 col-xl-10">
          <input
            v-model="title"
            class="form-control"
            type="text"
            id="input-title"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-auto me-auto">
          <h3>Message Option</h3>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-12">
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

      <div class="row">
        <label
          for="input-btn-background-color"
          class="col-4 col-md-2 col-xl-2 col-form-label"
          >Color</label
        >
        <div class="col-2 col-md-1 col-xl-1">
          <input
            v-model="btns[0].color"
            class="form-control form-control-color"
            type="color"
            id="input-btn-background-color"
          />
        </div>
        <div class="col-6 col-md-3 col-xl-2">
          <input v-model="btns[0].color" class="form-control" type="text" />
        </div>

        <label
          for="input-btn-text-color"
          class="col-4 col-md-2 col-xl-2 col-form-label"
          >Text Color</label
        >
        <div class="col-2 col-md-1 col-xl-1">
          <input
            v-model="btns[0].textColor"
            class="form-control form-control-color"
            type="color"
            id="input-btn-text-color"
          />
        </div>
        <div class="col-6 col-md-3 col-xl-2">
          <input v-model="btns[0].textColor" class="form-control" type="text" />
        </div>
      </div>

      <div class="row">
        <label
          for="input-btn-align"
          class="col-4 col-md-2 col-xl-2 col-form-label"
          >Btn align</label
        >
        <div class="col-8 col-md-4 col-xl-3">
          <select v-model="btnAlign" id="input-btn-align" class="form-select">
            <template v-for="(align, i) in alignments" :key="i">
              <option :value="align.id" v-text="align.value" />
            </template>
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <label
          for="input-btn-text"
          class="col-4 col-md-2 col-xl-2 col-form-label"
          >Text</label
        >
        <div class="col-8 col-md-3">
          <input
            v-model="btns[0].text"
            class="form-control"
            type="text"
            id="input-btn-text"
          />
        </div>
        <label
          for="input-btn-class"
          class="col-4 col-md-2 col-xl-2 col-form-label"
          >Btn Class</label
        >
        <div class="col-8 col-md-5">
          <input
            v-model="btns[0].class"
            class="form-control"
            type="text"
            id="input-btn-class"
            placeholder="btn btn-primary"
          />
        </div>
      </div>

      <div class="row">
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

    <!-- <page-up-btn v-show="isShowPageUpBtn" /> -->

    <!-- <v-confirm
      v-model="dialog"
      :closeable="closeable"
      :persistent="persistent"
      :no-actions-divider="noActionsDivider"
      :dark="dark"
      :width="`${width}px`"
      :title="title"
      :title-color="titleColor"
      :title-text-color="titleTextColor"
      :close-icon-color="closeIconColor"
      :message="message"
      :btn-align="btnAlign"
      :btns="btns"
      :hide-header="hideHeader"
    /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { Alignment, VConfirmBtn } from "@gn5r/vue-confirm/types";
// import PageUpBtn from "./PageUpBtn";

export default defineComponent({
  name: "component-example",
  model: {},
  mixins: [],
  props: {},
  data() {
    return {
      dialog: false,
      closeable: false,
      persistent: false,
      noActionsDivider: false,
      dark: false,
      width: 800,
      title: "titleeeeeeeeeeee",
      titleColor: "#2196f3",
      titleTextColor: "#ffffff",
      closeIconColor: "#ffffff",
      message: "test\nmessage",
      btnAlign: "end",
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
      ],
      btns: [] as Record<string, any>[],
      hideHeader: false,
      scrollY: 0,
      isShowPageUpBtn: false,
    };
  },
  methods: {
    handleOnScroll() {
      const HIDDEN_POS_Y = 50;
      this.scrollY = window.scrollY;
      this.isShowPageUpBtn = HIDDEN_POS_Y <= this.scrollY;
    },
  },
  created() {
    this.btns = [
      {
        text: "ok",
        textColor: "#ffffff",
        color: "#2196F3",
        class: "",
        function: () => (this.dialog = false),
      },
      {
        text: "NO",
        textColor: "",
        color: "",
        class: "btn btn-outline-danger fw-bold",
        function: () => (this.dialog = false),
      },
    ];
  },
  mounted() {
    window.addEventListener("scroll", this.handleOnScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleOnScroll);
  },
  computed: {},
  watch: {},
  components: {
    // PageUpBtn,
  },
});
</script>

<style scoped></style>
