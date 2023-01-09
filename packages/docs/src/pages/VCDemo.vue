<template>
  <v-card>
    <v-card-text class="pa-0">
      <v-container fluid>
        <v-row align="center" dense>
          <v-col>
            <span class="text-h5">Component Options</span>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="6" lg="2">
            <v-checkbox
              v-model="config.closeable"
              label="Closeable?"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" lg="2">
            <v-checkbox
              v-model="config.persistent"
              label="Persitent?"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="12" lg="3">
            <v-checkbox
              v-model="config.noActionsDivider"
              label="NoActionsDivider?"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="4" lg="2">
            <v-checkbox
              v-model="config.dark"
              label="Dark?"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" lg="2">
            <v-checkbox
              v-model="config.hideHeader"
              label="HideHeader?"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>

        <v-row align="center" dense>
          <v-col cols="4" md="2" lg="2">
            <v-text-field
              v-model="config.width"
              label="Width"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <span class="text-h5">Title Options</span>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6" md="1" lg="1">
            <v-text-field
              v-model="config.titleColor"
              label="Color"
              type="color"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" md="3" lg="2">
            <v-text-field
              v-model="config.titleColor"
              label="Color"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" md="2" lg="2">
            <v-text-field
              v-model="config.titleTextColor"
              label="Text Color"
              type="color"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" md="3" lg="2">
            <v-text-field
              v-model="config.titleTextColor"
              label="Text Color"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" lg="10">
            <v-text-field
              v-model="config.title"
              label="Text"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <span class="text-h5">Message Option</span>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" lg="10">
            <v-textarea
              v-model="config.message"
              label="Message"
              rows="3"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <span class="text-h5">Action Buttons</span>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6" md="1" lg="1">
            <v-text-field
              v-model="config.btns[0].color"
              label="Color"
              type="color"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" md="3" lg="2">
            <v-text-field
              v-model="config.btns[0].color"
              label="Color"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" md="2" lg="2">
            <v-text-field
              v-model="config.btns[0].textColor"
              label="Text Color"
              type="color"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" md="3" lg="2">
            <v-text-field
              v-model="config.btns[0].textColor"
              label="Text Color"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6" md="3" lg="3">
            <v-select
              v-model="config.btnAlign"
              :items="config.alignments"
              item-title="value"
              item-value="id"
              label="Btn align"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6" md="3" lg="3">
            <v-text-field
              v-model="config.btns[0].text"
              label="Text"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" md="3" lg="3">
            <v-text-field
              v-model="config.btns[0].class"
              label="Class"
              placeholder="btn btn-primary"
              variant="solo"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" variant="outlined" @click="config.dialog = true"
        >show dialog</v-btn
      >
    </v-card-actions>

    <v-confirm
      v-model="config.dialog"
      :btn-align="config.btnAlign"
      :btns="config.btns"
      :closeable="config.closeable"
      :dark="config.dark"
      :hide-header="config.hideHeader"
      :message="config.message"
      :no-actions-divider="config.noActionsDivider"
      :persistent="config.persistent"
      :title-color="config.titleColor"
      :title-text-color="config.titleTextColor"
      :title="config.title"
      :width="config.width"
    />
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Alignment, VConfirmBtn } from "@gn5r/vue-confirm";

export default defineComponent({
  name: "VCDemo",
  setup() {
    const config = ref({
      dialog: false,
      closeable: false,
      persistent: false,
      noActionsDivider: false,
      dark: false,
      width: "800",
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
      ] as { id: Alignment; value: Alignment }[],
      btns: [] as VConfirmBtn[],
      hideHeader: false,
    });
    config.value.btns = [
      {
        text: "ok",
        textColor: "#ffffff",
        color: "#2196F3",
        class: "",
        function: () => (config.value.dialog = false),
      },
      {
        text: "NO",
        textColor: "",
        color: "",
        class:
          "v-btn v-theme--light text-error v-btn--density-default v-btn--size-default v-btn--variant-outlined",
        function: () => (config.value.dialog = false),
      },
    ];

    return { config };
  },
  components: {},
});
</script>

<style scoped></style>
