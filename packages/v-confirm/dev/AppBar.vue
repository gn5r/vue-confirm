<template>
  <v-app-bar density="compact">
    <template #append>
      <v-icon
        :icon="current.dark ? 'mdi-brightness-4' : 'mdi-brightness-5'"
        @click="toggelTheme"
      />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";

const { global, current } = useTheme();

function toggelTheme() {
  global.name.value = current.value.dark ? "light" : "dark";
}
</script>

<style lang="sass" scoped></style>
