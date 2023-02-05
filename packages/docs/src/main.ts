import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/main.scss";

import { VConfirmPlugin } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/dist/v-confirm.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import vuetify from "@/plugins/vuetify";
import router from "@/plugins/router";
import i18n from "@/plugins/i18n";
import { registerComponents } from "@/plugins/global-components";

const app = createApp(App);
app.use(router).use(vuetify).use(VConfirmPlugin).use(i18n).mount("#app");
registerComponents(app);
