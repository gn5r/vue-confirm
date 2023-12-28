// https://vitepress.dev/guide/custom-theme
import "./styles/style.css";
import "./styles/style.scss";
import VCLayout from "./components/VCLayout.vue";

import type { Theme } from "vitepress/client";

import "@fortawesome/fontawesome-free/js/all.min.js";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import pinia from "./plugins/pinia";
import vconfirm from "./plugins/vconfirm";

export default {
  Layout: VCLayout,
  enhanceApp({ app, router, siteData }) {
    app.use(pinia);
    app.use(i18n);
    app.use(vuetify);
    app.use(vconfirm);
  },
} as Theme;
