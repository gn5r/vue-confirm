// Vue utils
import { defineComponent, toRef, computed } from "vue";

// Types
import type { ComputedRef } from "vue";

// Helpers
import { convertToUnit } from "@/utils/helper";

// Composables
import { useThemeProps, useThemeClasses } from "@/composables/theme";
import { useTextColor } from "@/composables/color";

// Styles
import "./MdiIcon.scss";

export const MdiIcon = defineComponent({
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
  emits: ["click"],
  setup(props, { slots, emit, attrs }) {
    let slotIcon: ComputedRef<string | undefined> | undefined;
    if (slots.default) {
      slotIcon = computed(() => {
        const slot = slots.default?.();
        if (!slot) return "";
        return slot[0].children as string;
      });
    }
    const themeClasses = useThemeClasses(props);
    const fontSize = convertToUnit(props.size);
    const { textColorClasses, textColorStyles } = useTextColor(
      toRef(props, "color")
    );

    return () => (
      <button
        type="button"
        class={["mdi-icon", themeClasses.value, textColorClasses.value]}
        style={[
          { width: fontSize, height: fontSize, "font-size": fontSize },
          textColorStyles.value,
        ]}
        onClick={(e: Event) => {
          emit("click", e);
        }}
        {...attrs}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          style={{
            fill: "currentColor",
          }}
        >
          <path d={slotIcon?.value} />
        </svg>
      </button>
    );
  },
});

export type MdiIcon = InstanceType<typeof MdiIcon>;
