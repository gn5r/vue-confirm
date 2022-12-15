import { defineComponent, toRef } from "vue";

import { useBackgroundColor, useTextColor } from "@/composables/color";
import { useThemeProps } from "@/composables/theme";

import { MdiIcon } from "@/components";
import { mdiClose } from "@mdi/js";

export default defineComponent({
  name: "v-confirm-header",
  props: {
    color: {
      type: String,
      default: "inherit",
    },
    textColor: {
      type: String,
      default: "inherit",
    },
    closeable: Boolean,
    ...useThemeProps(),
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const { backgroundColorClasses, backgroundColorStyles } =
      useBackgroundColor(toRef(props, "color"));
    const { textColorClasses, textColorStyles } = useTextColor(
      toRef(props, "textColor")
    );

    return () => (
      <>
        <header
          class={["v-confirm__header", backgroundColorClasses.value]}
          style={[backgroundColorStyles.value]}
        >
          <div
            class={textColorClasses.value}
            style={[{ backgroundColor: "transparent" }, textColorStyles.value]}
          >
            {slots.default?.()}
          </div>
          {props.closeable ? (
            <>
              <div class="v-confirm__spacer" />
              <div class="v-confirm__close-icon">
                <MdiIcon
                  color={props.textColor}
                  dark={props.dark}
                  onClick={() => emit("click")}
                >
                  {mdiClose}
                </MdiIcon>
              </div>
            </>
          ) : null}
        </header>
      </>
    );
  },
});
