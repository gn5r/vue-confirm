<template>
  <v-footer
    class="justify-center text-center bg-transparent"
    :class="
      $vuetify.theme.current.dark ? 'text-grey-lighten-2' : 'text-grey-darken-2'
    "
    height="24"
    app
    absolute
  >
    <span>Development by</span>
    <a href="https://github.com/gn5r" target="_blank" rel="author,noopener"
      >&copy;shangyuan.tuolang</a
    >
  </v-footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
