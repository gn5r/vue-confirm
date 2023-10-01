// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import { Theme } from "vitepress/client";
import "./style.css";
import "./style.scss";
import LayoutProvider from "./LayoutProvider.vue";

import "@fortawesome/fontawesome-free/js/all.min.js";
import vuetify from "../plugins/vuetify";
import i18n from "../plugins/i18n";
import { VConfirmPlugin } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/dist/v-confirm.min.css";

export default {
  extends: DefaultTheme,
  Layout: LayoutProvider,
  enhanceApp({ app, router, siteData }) {
    app.use(i18n);
    app.use(vuetify);
    app.use(VConfirmPlugin);
  },
} as Theme;
