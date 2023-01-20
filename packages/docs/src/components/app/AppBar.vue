<template>
  <v-app-bar theme="dark" density="comfortable" flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        v-if="$vuetify.display.mdAndDown"
        @click="drawer = !drawer"
      />
      <v-app-bar-title v-if="$vuetify.display.mdAndUp"
        >Vue Confirm</v-app-bar-title
      >
    </template>
    <template v-slot:append>
      <v-btn
        :icon="theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-5'"
        @click="toggleTheme"
      />
      <v-menu :theme="theme.dark ? 'dark' : 'light'">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon="mdi-translate-variant" />
        </template>
        <v-list :items="languages" color="primary" item-props />
      </v-menu>
      <a
        class="text-white"
        href="https://github.com/gn5r/vue-confirm"
        target="_blank"
        :style="{ 'font-size': '24px' }"
      >
        <i class="fab fa-github fa-lg"></i>
      </a>
      <a
        class="text-white ml-3"
        href="https://www.npmjs.com/package/@gn5r/vue-confirm"
        target="_blank"
        :style="{ 'font-size': '24px' }"
      >
        <i class="fab fa-npm fa-lg"></i>
      </a>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
// Vue
import { defineComponent, ref, computed, watch } from "vue";

// Composables
import { useTheme } from "vuetify";
import { useI18nList } from "@/composables/i18n";

export default defineComponent({
  name: "app-bar",
  props: {
    modelValue: Boolean,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const lazyValue = ref(props.modelValue);
    const drawer = computed({
      set(val: boolean) {
        lazyValue.value = val;
        emit("update:modelValue", val);
      },
      get() {
        return lazyValue.value;
      },
    });

    watch(
      () => props.modelValue,
      (val) => (lazyValue.value = val)
    );

    const languages = useI18nList();
    const vuetifyTheme = useTheme();
    const { current: theme } = vuetifyTheme;

    function toggleTheme() {
      vuetifyTheme.global.name.value = theme.value.dark ? "light" : "dark";
    }

    return { drawer, languages, theme, toggleTheme };
  },
  components: {},
});
</script>

<style scoped></style>
