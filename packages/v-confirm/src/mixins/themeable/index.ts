import { defineComponent } from "vue";

export default defineComponent({
  name: "themeable",
  props: {
    dark: Boolean,
  },
  computed: {
    themeClasses(): object {
      return {
        light: !this.dark,
        dark: this.dark,
      };
    },
  },
});
