import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import VConfirm from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/dist/v-confirm.min.css";
// import "@mdi/font/css/materialdesignicons.min.css";

Vue.component("v-confirm", VConfirm);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
