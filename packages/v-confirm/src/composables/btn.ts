// Types
import type { PropType } from "vue";
import type { Alignment, VConfirmBtn } from "@gn5r/vue-confirm";

export function useBtnProps() {
  return {
    btnAlign: {
      type: String as PropType<Alignment>,
      default: "end",
    },
    btns: {
      type: Array as PropType<VConfirmBtn[]>,
      default: () => [],
    },
  };
}
