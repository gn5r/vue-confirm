// https://vitepress.dev/guide/custom-theme
import "./styles/style.css";
import "./styles/style.scss";

import DefaultTheme from "vitepress/theme";
import VCLayout from "./components/VCLayout.vue";

import type { Theme } from "vitepress";

import "@fortawesome/fontawesome-free/js/all.min.js";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import pinia from "./plugins/pinia";
import vconfirm from "./plugins/vconfirm";

export default {
  extends: DefaultTheme,
  Layout: VCLayout,
  enhanceApp({ app }) {
    app.use(pinia);
    app.use(i18n);
    app.use(vuetify);
    app.use(vconfirm);
  },
} satisfies Theme;
