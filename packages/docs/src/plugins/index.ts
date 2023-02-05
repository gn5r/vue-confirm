import vuetify from "@/plugins/vuetify";
import router from "@/plugins/router";
import i18n from "@/plugins/i18n";
import pinia from "@/store";

import { VConfirmPlugin } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/dist/v-confirm.min.css";

import { useAppStore } from "@/store/app";

import type { App } from "vue";

const app = useAppStore(pinia);
app.$subscribe(() => app.save());

export function registerPlugins(app: App) {
  app.use(router).use(pinia).use(vuetify).use(i18n).use(VConfirmPlugin);
}
