<template>
  <v-container class="px-0" fluid>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-text class="pa-0">
            <v-container fluid>
              <v-row align="center" dense>
                <v-col>
                  <span class="text-h5">{{ title.componentOptions }}</span>
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
                  <span class="text-h5">{{ title.titleOptions }}</span>
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
                  <span class="text-h5">{{ title.messageOptions }}</span>
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
                  <span class="text-h5">{{ title.actionButtons }}</span>
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
                    :items="alignments"
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
            <v-btn
              color="primary"
              variant="outlined"
              @click="config.modelValue = true"
            >
              {{ title.showDialog }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePlaygroundTitles } from "@theme/composables/playground";
import { useVConfirmStore } from "@theme/store/vconfirm";

import type { Alignment } from "@gn5r/vue-confirm";

const title = usePlaygroundTitles();
const config = useVConfirmStore();
const alignments = ref<{ id: Alignment; value: Alignment }[]>([
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
]);
config.btns = [
  {
    text: "ok",
    textColor: "#ffffff",
    color: "#2196F3",
    class: "",
    onClick: () => (config.modelValue = false),
  },
  {
    text: "NO",
    textColor: "",
    color: "",
    class:
      "v-btn v-theme--light text-error v-btn--density-default v-btn--size-default v-btn--variant-outlined",
    onClick: () => (config.modelValue = false),
  },
];
</script>

<style lang="sass" scoped></style>
