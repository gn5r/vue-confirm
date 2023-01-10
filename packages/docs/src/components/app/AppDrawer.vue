<template>
  <v-navigation-drawer v-model="drawer" location="left">
    <v-list :items="computedItems" color="primary" item-props nav />
  </v-navigation-drawer>
</template>

<script lang="ts">
// Vue
import { defineComponent, ref, computed } from "vue";

// Composables
import { useRoute } from "vue-router";
import { useNavigation } from "@/composables/navigation";

export default defineComponent({
  name: "app-drawer",
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

    return { drawer, computedItems };
  },
  components: {},
});
</script>

<style scoped></style>
