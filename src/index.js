import VConfirm from "./components/VConfirm";

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VConfirm", VConfirm);
}

export default VConfirm;
