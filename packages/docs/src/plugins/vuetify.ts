import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { ja } from "vuetify/locale";

export default createVuetify({
  locale: {
    locale: "ja",
    messages: { ja },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867c0",
          secondary: "#5CBBF6",
          tertiary: "#E57373",
          accent: "#005CAF",
        },
      },
      dark: {
        colors: {
          primary: "#2196F3",
          secondary: "#424242",
          tertiary: "#E57373",
          accent: "#FF4081",
        },
      },
    },
  },
});
