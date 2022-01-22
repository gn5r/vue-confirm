import { VueConstructor } from "vue";
import VConfirm from "./components/VConfirm/VConfirm";

function install(Vue: VueConstructor) {
  if ((install as any).installed) return;
  (install as any).installed = true;
  Vue.component("v-confirm", VConfirm);
}

export class VConfirmPlugin {
  static install = install;
}

export default VConfirm;
