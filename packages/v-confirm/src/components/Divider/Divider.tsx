import { defineComponent, computed } from "vue";
import { useThemeProps, useThemeClasses } from "@/composables/theme";
import "./Divider.scss";

export default defineComponent({
  name: "divider",
  props: useThemeProps(),
  setup(props) {
    const themeClasses = useThemeClasses(props);
    return () => (
      <>
        <hr
          role="separator"
          aria-orientation="horizontal"
          class={["divider", themeClasses.value]}
        />
      </>
    );
  },
});
