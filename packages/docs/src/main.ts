import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/main.scss";

import "@fortawesome/fontawesome-free/js/all.min.js";
import { registerPlugins } from "@/plugins";
import { registerComponents } from "@/plugins/global-components";

const app = createApp(App);
registerPlugins(app);
registerComponents(app);

app.mount("#app");
