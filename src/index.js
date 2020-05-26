import VConfirm from "./components/VConfirm";

// Vue.use()で実行される関数
export function install(Vue) {
  Vue.component("v-confirm", VConfirm);
}

export default VConfirm;
