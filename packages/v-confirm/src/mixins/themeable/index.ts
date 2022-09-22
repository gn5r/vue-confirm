import Vue from "vue";

export default Vue.extend({
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
