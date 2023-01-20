import { defineComponent, toRef, computed } from "vue";

import type { PropType, ButtonHTMLAttributes } from "vue";
import { Alignment, VConfirmBtn } from "@gn5r/vue-confirm/types";

import { useBackgroundColor, useTextColor } from "@/composables/color";

export const VConfirmActions = defineComponent({
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
  setup(props, { slots }) {
    const items = computed(() =>
      props.btns.map((btn) => {
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
        return {
          attrs: {
            type: "button" as ButtonHTMLAttributes["type"],
            class: [
              ...classes,
              ...backgroundColorClasses.value,
              ...textColorClasses.value,
            ],
            style: { ...backgroundColorStyles.value, ...textColorStyles.value },
            onClick: () => btn.function(),
          },
          ...btn,
        };
      })
    );

    return () => (
      <div
        class="v-confirm__actions"
        style={{ justifyContent: props.btnAlign }}
      >
        {slots.default
          ? slots.default({ items: items.value })
          : items.value.map((item) => {
              return <button {...item.attrs}>{item.text}</button>;
            })}
      </div>
    );
  },
});

export type VConfirmActions = InstanceType<typeof VConfirmActions>;
