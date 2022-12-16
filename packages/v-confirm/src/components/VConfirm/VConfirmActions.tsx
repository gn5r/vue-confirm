import { defineComponent, toRef } from "vue";

import { PropType } from "vue";
import { Alignment, VConfirmBtn } from "@gn5r/vue-confirm/types";

import { useBackgroundColor, useTextColor } from "@/composables/color";

export default defineComponent({
  name: "v-confirm-footer",
  props: {
    btnAlign: {
      type: String as PropType<Alignment>,
      default: "end",
    },
    btns: {
      type: Array as PropType<Array<VConfirmBtn>>,
      default: () => [],
    },
  },
  setup(props) {
    return () => (
      <div
        class="v-confirm__actions"
        style={{ justifyContent: props.btnAlign }}
      >
        {props.btns.map((btn) => {
          const { backgroundColorClasses, backgroundColorStyles } =
            useBackgroundColor(toRef(btn, "color"));
          const { textColorClasses, textColorStyles } = useTextColor(
            toRef(btn, "textColor")
          );
          const classes: string[] = [];
          if (btn.class) {
            if (Array.isArray(btn.class)) classes.push(...btn.class);
            else classes.push(btn.class);
          } else {
            classes.push("button");
          }
          return (
            <button
              type="button"
              class={[
                classes,
                backgroundColorClasses.value,
                textColorClasses.value,
              ]}
              style={[backgroundColorStyles.value, textColorStyles.value]}
              onClick={() => btn.function()}
            >
              {btn.text}
            </button>
          );
        })}
      </div>
    );
  },
});
