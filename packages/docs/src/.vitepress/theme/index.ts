// https://vitepress.dev/guide/custom-theme
import "./styles/style.css";
import "./styles/style.scss";
import LayoutProvider from "./components/LayoutProvider.vue";

import type { Theme } from "vitepress/client";

import "@fortawesome/fontawesome-free/js/all.min.js";
import vuetify from "../plugins/vuetify";
import i18n from "../plugins/i18n";
import { VConfirmPlugin } from "@gn5r/vue-confirm";
import "@gn5r/vue-confirm/styles";

export default {
  Layout: LayoutProvider,
  enhanceApp({ app, router, siteData }) {
    app.use(i18n);
    app.use(vuetify);
    app.use(VConfirmPlugin);
  },
} as Theme;
