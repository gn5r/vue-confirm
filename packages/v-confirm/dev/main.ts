import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./vuetify";
import vconfirm from "./vconfirm";

createApp(App).use(vuetify).use(vconfirm).mount("#app");
