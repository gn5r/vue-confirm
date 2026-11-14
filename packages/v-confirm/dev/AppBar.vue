<template>
  <v-app-bar density="compact">
    <template #append>
      <v-btn
        :icon="current.dark ? 'mdi-brightness-4' : 'mdi-brightness-5'"
        @click="toggle(['light', 'dark'])"
      />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";

const { current, toggle } = useTheme();
</script>

<style lang="sass" scoped></style>
