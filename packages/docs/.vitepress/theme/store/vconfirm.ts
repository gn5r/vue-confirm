import { defineStore } from "pinia";
import type { Alignment, VConfirmBtn } from "@gn5r/vue-confirm";

export const useVConfirmStore = defineStore("vconfirm", {
  state: () => ({
    btnAlign: "end" as Alignment,
    btns: [] as VConfirmBtn[],
    closeable: false,
    dark: false,
    hideHeader: false,
    message: "Hello\nWorld!",
    modelValue: false,
    noActionsDivider: false,
    persistent: false,
    title: "titleeeeeeeeeeee",
    titleColor: "#2196f3",
    titleTextColor: "#ffffff",
    width: 800,
  }),
});
