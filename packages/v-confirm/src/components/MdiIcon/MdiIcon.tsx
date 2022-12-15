// Vue
import { defineComponent, ref, computed, toRef } from "vue";

import { getSize } from "../../utils/helper";

import { useThemeProps, useThemeClasses } from "@/composables/theme";
import { useTextColor } from "@/composables/color";

import "./MdiIcon.scss";

export default defineComponent({
  name: "mdi-icon",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: "inherit",
    },
    ...useThemeProps(),
  },
  setup(props, { attrs, slots }) {
    const hasClickListener = computed(() => Boolean(attrs.onClick));
    const themeClasses = useThemeClasses(props);
    const icon = slots.default
      ? (slots.default()[0].children as string).trim()
      : "";
    const fontSize = getSize(props.size);
    const tag = ref(hasClickListener ? "button" : "span");
    const { textColorClasses, textColorStyles } = useTextColor(
      toRef(props, "color")
    );

    return () => (
      <>
        <tag.value
          aria-hidden={!hasClickListener}
          type={hasClickListener ? "button" : undefined}
          class={["mdi-icon", themeClasses.value, textColorClasses.value]}
          style={[
            { width: `${fontSize}px`, height: `${fontSize + 12}px` },
            textColorStyles.value,
          ]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            style={{
              "font-size": `${fontSize}px`,
              width: `${fontSize}px`,
              height: `${fontSize}px`,
              fill: "currentColor",
              "vertical-align": "middle",
            }}
          >
            <path d={icon} />
          </svg>
        </tag.value>
      </>
    );
  },
});
