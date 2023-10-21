// Vue
import { defineComponent, toRef } from "vue";

// Components
import { MdiIcon } from "@/components/MdiIcon";
import { mdiClose } from "@mdi/js";

// Composables
import { useBackgroundColor, useTextColor } from "@/composables/color";
import { useThemeProps } from "@/composables/theme";

export const VConfirmHeader = defineComponent({
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
    title: String,
    ...useThemeProps(),
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const { backgroundColorClasses, backgroundColorStyles } =
      useBackgroundColor(toRef(props, "color"));
    const { textColorClasses, textColorStyles } = useTextColor(
      toRef(props, "textColor")
    );

    return () =>
      slots.default ? (
        slots.default({
          attrs: {
            class: [...backgroundColorClasses.value, ...textColorClasses.value],
            style: { ...backgroundColorStyles.value, ...textColorStyles.value },
          },
          title: props.title,
        })
      ) : (
        <header
          class={["v-confirm__header", backgroundColorClasses.value]}
          style={[backgroundColorStyles.value]}
        >
          <div
            class={textColorClasses.value}
            style={[{ backgroundColor: "transparent" }, textColorStyles.value]}
          >
            {props.title}
          </div>
          {props.closeable && <div class="v-confirm__spacer" />}
          {props.closeable && (
            <div class="v-confirm__close-icon">
              <MdiIcon
                color={props.textColor}
                dark={props.dark}
                onClick={(e: Event) => {
                  emit("click", e);
                }}
              >
                {mdiClose}
              </MdiIcon>
            </div>
          )}
        </header>
      );
  },
});

export type VConfirmHeader = InstanceType<typeof VConfirmHeader>;
