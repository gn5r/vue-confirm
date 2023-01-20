import { defineComponent } from "vue";
import { useThemeProps, useThemeClasses } from "@/composables/theme";
import "./Divider.scss";

export const Divider = defineComponent({
  name: "divider",
  props: useThemeProps(),
  setup(props, { attrs }) {
    const themeClasses = useThemeClasses(props);
    return () => (
      <hr
        role="separator"
        aria-orientation="horizontal"
        class={["divider", themeClasses.value]}
        {...attrs}
      />
    );
  },
});

export type Divider = InstanceType<typeof Divider>;
