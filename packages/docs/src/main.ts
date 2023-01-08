import { createApp } from "vue";
import App from "./App.vue";
// import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import { VConfirmPlugin } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/dist/v-confirm.min.css";
import vuetify from "@/vuetify";
import "@/styles/main.scss";
import router from "@/router";

const app = createApp(App);
app.use(router).use(vuetify).use(VConfirmPlugin).mount("#app");
