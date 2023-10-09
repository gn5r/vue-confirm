import type { Plugin } from "vue";
import { VConfirm } from "./components";

export const VConfirmPlugin: Plugin = {
  install(app) {
    app.component("v-confirm", VConfirm);
  },
};

export default VConfirm;
