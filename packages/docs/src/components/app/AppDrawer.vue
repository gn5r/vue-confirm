<template>
  <v-navigation-drawer v-model="drawer" location="left">
    <v-list :items="computedItems" color="primary" item-props nav />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
// Utilities
import { defineProps, defineEmits, ref, computed, watch } from "vue";

// Composables
import { useRoute } from "vue-router";
import { useNavigation } from "@/composables/navigation";

const props = defineProps({
  modelValue: Boolean,
});
const emits = defineEmits(["update:modelValue"]);

const lazyValue = ref(props.modelValue);
const drawer = computed({
  set(val: boolean) {
    lazyValue.value = val;
    emits("update:modelValue", val);
  },
  get() {
    return lazyValue.value;
  },
});

watch(
  () => props.modelValue,
  (val) => (lazyValue.value = val)
);

const route = useRoute();
const items = useNavigation();
const computedItems = computed(() =>
  items.value.flatMap((i) => ({
    title: i.title,
    value: i.title,
    prependIcon: route.path.includes(i.to ?? "")
      ? i.activeIcon
      : i.inactiveIcon,
    to: i.to,
  }))
);
</script>

<style scoped></style>
