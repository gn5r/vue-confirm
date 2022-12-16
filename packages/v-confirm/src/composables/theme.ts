import { computed } from "vue";

export function useThemeProps() {
  return {
    dark: {
      type: Boolean,
      default: false,
    },
  };
}

export function useThemeClasses(props: { dark?: boolean }) {
  const themeClasses = computed(() => ({
    light: !props.dark,
    dark: props.dark,
  }));
  return themeClasses;
}
