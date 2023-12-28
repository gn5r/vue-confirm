import type { App } from "vue";
import { VConfirm } from "./components";

export function createVConfirm() {
  return {
    install: (app: App) => {
      app.component("v-confirm", VConfirm);
    },
  };
}

export default VConfirm;
