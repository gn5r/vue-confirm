import { Plugin } from "vue";
import VConfirm from "./components/VConfirm/VConfirm";

export const VConfirmPlugin: Plugin = {
  install(app) {
    app.component("v-confirm", VConfirm);
  },
};

export default VConfirm;
